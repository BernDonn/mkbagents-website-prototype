/* Candidate: aggregate native video counts; no Google, cookies or visitor identifiers. */
(() => {
  'use strict';
  if (window.siteVideoAnalyticsLoaded) return;
  window.siteVideoAnalyticsLoaded = true;
  const allowed = () => {
    if (location.pathname.replace(/\/+$/, '') === '/analytics-uit') return false;
    try { return localStorage.getItem('site-analytics-opt-out') !== '1' && localStorage.getItem('site-analytics-consent-v1') !== 'refused'; }
    catch (_) { return false; }
  };
  const titles = {
  "/assets/workshop.mp4": "Workshop AI meets Business Amsterdam",
  "/assets/mkb-hermes-intro-20261018-atelier-replaced-586a89ff9269.mp4": "Hermes, je eigen digitale assistent (verdieping)",
  "/assets/atelier-mkbagents-04-db82c62efab793c1.mp4": "Waarom Hermes?",
  "/assets/atelier-mkbagents-15-aeb1e104b7d3a88a.mp4": "Wat is een AI-agent?",
  "/assets/atelier-mkbagents-10-527a3677db31ab19.mp4": "Een persoonlijke AI-assistent",
  "/assets/atelier-mkbagents-28-251a4b998a8c9e67.mp4": "Een tweede brein voor je werk",
  "/assets/atelier-mkbagents-05-731e16a6dae5e486.mp4": "Je AI inwerken",
  "/assets/atelier-mkbagents-08-b778d05dc4b96bee.mp4": "Inbox, agenda en overzicht",
  "/assets/atelier-mkbagents-07-c6708b91dffbcca1.mp4": "Gesprekken, mail en documenten",
  "/assets/atelier-mkbagents-29-af04d2e321327e4c.mp4": "WhatsApp: antwoorden voorbereiden",
  "/assets/atelier-mkbagents-17-1003d6ea59576a2a.mp4": "Een AI-agent via WhatsApp Business",
  "/assets/atelier-mkbagents-13-9502d115693540f2.mp4": "De telefoonassistent",
  "/assets/atelier-mkbagents-18-1dd8e5d2b100342d.mp4": "Workflowautomatisering",
  "/assets/atelier-mkbagents-06-4f875bb22cd0f45a.mp4": "Bonnetjes en administratie",
  "/assets/atelier-mkbagents-11-5c5589ef1ea9c901.mp4": "Dit is inbegrepen",
  "/assets/atelier-mkbagents-09-0497df1c55efc79a.mp4": "Inrichten en testen",
  "/assets/atelier-mkbagents-12-7c137d3f56a693fe.mp4": "Technische inrichting en OAuth",
  "/assets/atelier-mkbagents-20-5ffdb71a9d2a1940.mp4": "Modelkeuze en toegang",
  "/assets/atelier-mkbagents-02-b77af4cddde85aea.mp4": "Vijf vragen over AI-afhankelijkheid",
  "/assets/hermes-tips/korte-samenvatting-b4a2e1740ca1.mp4": "Korte samenvatting",
  "/assets/hermes-tips/tokengebruik.mp4": "1. Begrijp je tokengebruik",
  "/assets/hermes-tips/nieuw-gesprek.mp4": "2. Begin een nieuw gesprek als het onderwerp verandert",
  "/assets/hermes-tips/vaste-basis-ea7de40ce5c0.mp4": "3. Houd je vaste basis compact en correct",
  "/assets/atelier-mkbagents-03-c2175b988cae28a6.mp4": "Hermes 0.23: Rewind",
  "/assets/atelier-mkbagents-16-2ae8e4630253719b.mp4": "Een website verbeteren of maken",
  "/assets/atelier-mkbagents-00-a5de81188ea3348b.mp4": "De AI-zichtbaarheidscheck",
  "/assets/atelier-mkbagents-21-3da0d976fb352f63.mp4": "ChatGPT: een fietsslot bestellen",
  "/assets/atelier-mkbagents-26-1e4457c36e1019c3.mp4": "ChatGPT: leveranciers selecteren",
  "/assets/atelier-mkbagents-27-59d577052e13cfd8.mp4": "ChatGPT als data-analist",
  "/assets/atelier-mkbagents-24-6f29d395008f6342.mp4": "Agentic browsing met ChatGPT Atlas",
  "/assets/atelier-mkbagents-25-3d9a5d675a790cb6.mp4": "Agentic browsing met Perplexity Comet",
  "/assets/restored-blogs/6da01a2430dbb83bf457-atelier-replaced-f090858b29f0.mp4": "AI: bouwen, kopen of samenwerken?",
  "/assets/restored-blogs/52ec0af5ab08d47d9642-atelier-replaced-4a9db7575af5.mp4": "AI en het internetmodel",
  "/assets/hermes-vaste-prijs-uitgebreid-mkbagents-8e95d5ec936c.mp4": "Vaste prijs",
  "/assets/china-ai-studiereis/dr-herbert-diess-drives-et9.mp4": "China AI studiereis"
};
  const bound = new WeakSet();
  const bind = video => {
    if (bound.has(video)) return;
    bound.add(video);
    let started = false, finished = false, running = false, lastMedia = 0, lastClock = 0;
    let seconds = 0, pending = 0, milestones = new Set();
    const source = video.getAttribute('src') || video.querySelector('source')?.getAttribute('src') || '';
    const path = new URL(source || location.pathname, location.href).pathname;
    const emit = (name, extra = {}) => {
      if (!allowed() || !Object.hasOwn(titles,path)) return;
      const kind = {video_start:'start',video_watch_time:'watch',video_complete:'complete'}[name];
      if (!kind) return;
      // No retry or persistent queue: failures undercount rather than double-count.
      fetch('https://sophie.mkbagents.nl/video-count', {
        method:'POST', mode:'cors', credentials:'omit', referrerPolicy:'no-referrer', keepalive:true,
        headers:{'Content-Type':'text/plain'},
        body:JSON.stringify({video:path,kind,seconds:extra.watch_seconds || 0})
      }).catch(() => {});
    };
    const reset = () => { started = finished = running = false; seconds = pending = 0; milestones = new Set(); };
    const baseline = () => { lastMedia = video.currentTime; lastClock = performance.now(); };
    const flush = () => {
      if (pending >= 0.01) emit('video_watch_time',{watch_seconds:Math.round(pending*1000)/1000});
      pending = 0;
    };
    const sample = () => {
      const now = performance.now(), media = video.currentTime;
      const wall = (now-lastClock)/1000, delta = media-lastMedia;
      // Reject discontinuities. Seek, waiting and pause handlers reset baselines.
      if (allowed() && !document.hidden && running && !video.seeking && wall > 0 && wall <= 2 && delta > 0 && delta <= wall*video.playbackRate + 0.35) {
        const watched = Math.min(wall, delta/video.playbackRate);
        seconds += watched; pending += watched;
        for (const percent of [25,50,75]) {
          const point = video.duration * percent/100;
          if (lastMedia < point && media >= point && !milestones.has(percent)) {
            milestones.add(percent); emit('video_progress',{video_percent:percent});
          }
        }
        if (pending >= 10) flush();
      }
      lastMedia = media; lastClock = now;
    };
    const begin = () => {
      if (!allowed()) return;
      if (finished) reset();
      if (!started) { started = true; emit('video_start'); }
      running = true; baseline();
    };
    video.addEventListener('playing', begin);
    window.addEventListener('site-analytics-allowed', () => { if (!video.paused) begin(); });
    video.addEventListener('timeupdate',sample);
    video.addEventListener('seeking', () => { running = false; baseline(); });
    video.addEventListener('seeked', () => { running = started && !video.paused && allowed(); baseline(); });
    video.addEventListener('waiting', () => { sample(); running = false; baseline(); });
    video.addEventListener('pause', () => { sample(); running = false; flush(); });
    video.addEventListener('ratechange', () => { baseline(); });
    video.addEventListener('ended', () => {
      sample(); running = false;
      if (started && !finished) { flush(); emit('video_complete',{video_percent:100}); finished = true; }
    });
    video.addEventListener('emptied', () => { flush(); reset(); });
    window.addEventListener('pagehide', () => { sample(); flush(); running = false; });
    document.addEventListener('visibilitychange', () => { if (document.hidden) { sample(); flush(); } baseline(); });
    window.addEventListener('site-analytics-change', () => { if (!allowed()) reset(); else if (!video.paused) begin(); });
  };
  const scan = () => document.querySelectorAll('video').forEach(bind);
  scan(); new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});
})();
