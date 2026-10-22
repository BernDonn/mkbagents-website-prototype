# FAQ over Hermes en AI-agents voor MKB

## Wat is een Hermes Agent en wie maakt het?

Hermes Agent is open-source software van Nous Research voor een persoonlijke AI-assistent. De assistent kan gesprekken en werkwijzen onthouden, hulpmiddelen gebruiken en terugkerende taken uitvoeren. Hermes kan herbruikbare werkinstructies, ‘skills’, opbouwen en verfijnen op basis van opgedane ervaring en jouw aanwijzingen. Je kunt Hermes verbinden met verschillende taalmodellen en communicatiekanalen, zoals Telegram, Slack en WhatsApp. Ook webonderzoek, browserbediening, geplande taken en het verdelen van werk over subagents behoren tot de mogelijkheden. Welke functies beschikbaar zijn, hangt af van de inrichting, toegangsrechten en gekoppelde diensten. MKBagents helpt je Hermes in te richten rond jouw werkzaamheden. We spreken af welke taken de assistent uitvoert, welke informatie hij mag gebruiken en wanneer jouw goedkeuring nodig is. Hermes kan op een geschikte eigen computer, een VPS of in een combinatie daarvan draaien.

## Is een Hermes Agent niet gewoon een chatbot?

Nee. De vorm kan chat zijn, maar het verschil zit in context, tools gebruiken, stappen voorbereiden en binnen grenzen werk afmaken. Een chatbot geeft antwoord. Een agent bereidt voor, onthoudt context en handelt af waar dat veilig kan.

## Wat is dan het verschil tussen een chatbot en een agent?

Kort gezegd: het model is het taalbrein, maar de agent ontstaat pas door de harness (omgeving) eromheen. Die omgeving regelt welke instructies de agent meekrijgt, welke tools of API’s gebruikt mogen worden, hoe stappen worden gepland en waar menselijke controle nodig blijft. Met andere woorden: zonder harness hebben jullie vooral een slim antwoordmodel. Met harness krijgen jullie een werkende agent die context kan vasthouden, met systemen kan praten en taken gecontroleerd kan uitvoeren. In de praktijk bestaat zo’n harness vaak uit een promptlaag, toolkits, een agent-executor of workflowlaag en koppelingen naar bijvoorbeeld documenten, tabellen of externe API’s. Visualisatie van de omgeving rond het model, de harness (omgeving): loop, tools, context, persistence en policy. Samen vormen die de laag die van een los model een werkende agent maakt.

## Met ChatGPT en Claude kunnen wij toch ook een AI-agent opzetten? Waarom Hermes?

Ja, ook met de tools van OpenAI en Anthropic kunnen jullie AI-agents opzetten. Het belangrijkste verschil is niet dát het kan, maar hoeveel controle jullie over jullie systeem houden. ChatGPT en Claude zijn propriëtaire oplossingen: de leverancier bepaalt de mogelijkheden, prijzen en voorwaarden. Als jullie jullie werkprocessen daarop inrichten, worden jullie ook afhankelijk van toekomstige keuzes van die leverancier. Hermes is open source en kunnen jullie zelf beheren. Jullie kunnen de software aanpassen en verschillende AI-modellen aansluiten. Daardoor houden jullie meer ruimte om van aanbieder te wisselen, zonder jullie hele agentsysteem opnieuw op te bouwen. Dat maakt jullie niet automatisch volledig onafhankelijk van big tech: gebruiken jullie via Hermes een model van OpenAI of Anthropic, dan blijven jullie voor dat onderdeel afhankelijk van die aanbieder. Het verschil is dat jullie agentsysteem niet onlosmakelijk aan één leverancier vastzit.

## Wat is het verschil tussen Hermes en OpenClaw 2.0 voor ons als klein bedrijf?

Hermes is vooral een persoonlijke AI-assistent. OpenClaw biedt daarnaast ingebouwde mogelijkheden om met meerdere mensen dezelfde agentomgeving te gebruiken. Werken jullie zelfstandig en zoeken jullie een assistent die jullie werkwijze onthoudt, terugkerende taken uitvoert en specialistische agents kan inschakelen? Dan is Hermes een logische keuze. De samenwerking draait vooral om jullie en de agents die voor jullie werken. Willen jullie met collega’s of vaste samenwerkingspartners in dezelfde gesprekken werken, taken overnemen en afspreken wie mag lezen, voorstellen doen of meewerken? Dan komt OpenClaw 2.0 eerder in beeld. Het is geen harde scheiding: OpenClaw kan ook persoonlijk worden gebruikt en Hermes kan ook binnen een bedrijf worden ingezet. De keuze hangt vooral af van hoe jullie willen samenwerken, niet alleen van de grootte van jullie onderneming.

## Hoe verschillen OpenAI Dots, Meta Muse en Grok Bot van Hermes?

OpenAI Dots, Meta Muse en Grok Bot zijn AI-assistenten die niet alleen antwoorden geven, maar ook met apps werken, context onthouden en taken op de achtergrond uitvoeren. Hun aanbieders leveren daarvoor een beheerde omgeving. De beschikbaarheid verschilt per land, abonnement en uitrolfase. Hermes is een open-source werkomgeving voor een AI-assistent. Jullie kunnen Hermes op jullie eigen computer of server laten draaien en kiezen uit verschillende ondersteunde taalmodellen. Jullie geheugen, tools en opgebouwde werkwijzen staan in die omgeving, zodat jullie bij een modelwissel niet automatisch jullie hele assistent opnieuw hoeven op te bouwen. Het belangrijkste verschil zit dus in keuze en zeggenschap over de inrichting. Bij Dots, Muse en Grok Bot bepaalt de aanbieder de mogelijkheden van het platform. Bij Hermes kunnen jullie meer zelf bepalen over hosting, modellen en koppelingen. Daar hoort wel beheer bij. Een eigen installatie betekent bovendien niet dat alle verwerking lokaal gebeurt: dat hangt af van de modellen en diensten die jullie aansluiten.

## Wat als de agent twijfelt of iets fout kan doen?

Dan stopt hij en vraagt akkoord. Geen klantbericht, betaling of gevoelige actie zonder menselijke controle. Dat is geen bijzaak, het is het uitgangspunt.

## Wat kost een Hermes-implementatie via MKBagents?

Voor een vaste prijs van €1.000 exclusief btw, eenmalig, richten we samen een werkende Hermes-assistent in rond de vooraf afgesproken taken. Begeleiding, testen en overdracht zijn inbegrepen. Je betaalt ons geen jaarlijkse verlenging of verplicht beheerabonnement. Modelgebruik, eventuele hosting en andere externe diensten betaal je apart. GeoScope is een afzonderlijke uitbreiding van €500 exclusief btw, eenmalig, op je bestaande Hermes. Websitewerk en andere aanvullende opdrachten spreken we vooraf apart af. Zie het [volledige kostenoverzicht](https://mkbagents.nl/kosten-hermes-assistent/).

## Wat is een AI-vindbaarheidstest (GeoScope) en wat krijgen wij?

Voor eenmalig €500 exclusief btw installeren we de GeoScope-skill op jullie bestaande Hermes en richten we die in voor jullie bedrijf. Jullie krijgen een gebruikslicentie op onze eigen werkwijze voor gevonden worden én opvolgen: jullie AI-zichtbaarheid meten, antwoorden en bronnen beoordelen, verbeteringen voorbereiden en het resultaat opnieuw meten. Wij blijven de skill doorontwikkelen; het intellectuele eigendom blijft bij GeoScope. De skill staat in jullie eigen Hermes-omgeving. Dat betekent niet dat alle verwerking offline gebeurt: gekoppelde AI-modellen en meetdiensten kunnen extern draaien. Gebruikskosten van modellen en meetdiensten zijn niet inbegrepen. De totale kosten hangen af van het aantal vragen, AI-omgevingen en de gebruikte diensten.

## Hoe snel kan een eerste Hermes-agent live zijn?

Reken op weken, niet op maanden. Na het startgesprek spreken we doel, toegang, grenzen en testvoorbeelden af. Daarna richten we de gekozen taken in, testen we met jullie eigen werk en sturen we samen bij. De precieze planning hangt af van de gekozen taken en benodigde toegang.

## Hebben wij eigen ontwikkelaars nodig voor Hermes Agent?

Voor een eerste MKBagents-route hebben jullie geen eigen ontwikkelaars nodig. Wel zijn jullie keuzes en toegang nodig: welk kanaal, welke mailbox of databron, welke modelroute en welke acties nooit zonder akkoord mogen plaatsvinden. Technische inrichting, koppelingen en beheer worden stap voor stap voorbereid.

## Werkt Hermes met de tools die wij al gebruiken?

Ja, dat is precies het idee: mail, agenda, documenten, WhatsApp, Slack, CRM, boekhouding of n8n. Geen nieuw eiland, maar een laag over wat er al staat.

## Kan Hermes onze facturen verwerken met KNAB en DigiBoox?

Ja. Hermes kan een factuur uit jullie e-mail of bestanden ophalen, leverancier, datum, bedrag, btw en factuurnummer controleren en nagaan of de kostenpost al bestaat. Na jullie goedkeuring kan Hermes de factuur automatisch in DigiBoox opnemen en koppelen aan de bijbehorende KNAB-banktransactie. Bij ontbrekende of onduidelijke gegevens stopt Hermes en vraagt het om jullie beoordeling.

## Krijgen wij alleen een kant-en-klare AI-agent, of leren wij er zelf mee werken?

Jullie kennen het gezegde: 'Geef een man een vis en hij eet een dag, leer hem vissen en hij eet zijn hele leven.' Veel AI-consultants geven jullie een vis: een kant-en-klare agent die werkt, maar die jullie niet begrijpen en niet zelf kunnen aanpassen. MKBagents werkt anders: we leren jullie vissen. We bouwen niet alleen AI-agents voor jullie, maar zorgen dat jullie als ondernemers begrijpen hoe ze werken, ze zelf kunnen aanpassen en nieuwe agents kunnen bouwen wanneer jullie dat willen. Zo wordt AI met Hermes echt een kracht voor jullie werk en bedrijf, niet een black box die jullie elke keer moeten uitbesteden.

## Hoe beginnen wij klein met een AI-agent?

Kies één concrete taak: inboxfiltering, agenda-briefings, klantvragen samenvatten, documenten ordenen of conceptmails voorbereiden. Of misschien willen jullie beginnen met een AI-telefoonassistent. Eerst één agent en één workflow betrouwbaar maken; daarna pas uitbreiden naar extra kanalen, tools of automatiseringen. Zie een AI-assistent als een slimme, razendsnelle stagiair: die kan veel, maar kent jullie bedrijf nog niet. Laat zien hoe jullie een taak uitvoeren, geef voorbeelden van een goed resultaat en spreek af wanneer jullie toestemming nodig is. Begin met één terugkerende taak, controleer het werk en leg de aanpak pas als vaste werkwijze vast wanneer die in de praktijk werkt. Goed inwerken is niet alleen beter prompten. Ook de omgeving rond het AI-model, de harness, moet goed zijn ingericht: met toegang tot de juiste bronnen en tools, duidelijke controles en vragen wanneer informatie ontbreekt.

## Welke GEO-auditingtools gebruiken jullie bij GeoScope?

Voor ChatGPT en Gemini gebruiken we DataForSEO. Voor Perplexity gebruiken we Apify; de Copilot-koppeling via Apify is nog in ontwikkeling. Claude wordt getest met een model-API met webzoeken. Hermes ondersteunt de analyse en het voorbereiden van verbeteringen. Het GEO Strategy House: van technische basis tot meten en verbeteren.

## Wat is een workflow en wat is het verschil met een losse prompt?

Een workflow is een vaste reeks stappen die telkens in dezelfde logische volgorde wordt uitgevoerd. Een losse prompt is één afzonderlijke opdracht aan AI. Een workflow beschrijft het hele terugkerende proces, van de informatie die binnenkomt tot jullie controle of akkoord. Een eenvoudige workflow bestaat bijvoorbeeld uit vier stappen: een mail, formulier, bestand of bericht komt binnen; Hermes vat samen, ordent informatie of maakt een concept; Hermes zet een taak, antwoord of document klaar en kan waar nodig een tool gebruiken; jullie controleren, passen aan en beslissen. Een agent kan binnen zo’n workflow zelfstandiger stappen uitvoeren en bepalen wat er vervolgens nodig is. Jullie spreken vooraf af waar Hermes zelf mag handelen en wanneer jullie akkoord nodig blijft. Bekijk ook het workflowoverzicht met concrete voorbeelden voor kleine bedrijven.

## Wat is het kernverschil tussen automatisering en een AI-agent?

Automatisering volgt vooraf bepaalde stappen; een agent kiest dynamisch acties op basis van doel en context. Deterministische workflows zijn voorspelbaar en goed controleerbaar bij herhaalde taken. Agenten bieden flexibiliteit bij variatie, maar vragen grenzen, toezicht en controle op fouten.

## Kan Hermes ons helpen met het bouwen van een website?

Ja. Hermes kan helpen bij het bouwen, verbeteren en publiceren van een website. Denk aan het ordenen van ideeën, het schrijven van conceptteksten, het voorbereiden van pagina's, het controleren van formulieren en het ondersteunen bij publicatie. Maar ook het eenvoudig ontwikkelen en koppelen van apps. De mens blijft nodig voor keuzes, controle, merkgevoel en akkoord op wat gepubliceerd wordt.

## Hebben jullie ervaring met Respond.io?

Ja. We hebben ervaring met een praktijkcase waarin Respond.io niet alleen als centrale inbox werkte, maar ook als eerste AI-intakelaag. In die opzet kwamen WhatsApp en sociale kanalen samen in Respond.io, stelde de Respond.io-agent de eerste intakevragen en zorgde n8n daarna voor de vaste workflow richting CRM, kanaallabeling en leadregistratie. Dat is leerzaam voor MKBagents: Respond.io is sterk als kanaal- en intakelaag, n8n als voorspelbare workflowlaag en Hermes als bredere agentlaag voor samenvatten, duiden, conceptantwoorden en vervolgstappen. De concrete inrichting maken we altijd eigen en AVG-bewust, zonder bestaande cases één-op-één te kopiëren. Dit sluit aan op ons AI-vindbaarheidsmodel GeoScope, powered by Hermes: gevonden worden én opvolgen.

## Kunnen wij met Hermes praten terwijl wij auto rijden?

Ja. Hermes kan via kanalen zoals Telegram of WhatsApp op jullie Apple Watch of iPhone bereikbaar zijn. Jullie spreken een bericht in, Hermes kan reageren en jullie kunnen gesproken berichten terugkrijgen, bijvoorbeeld onderweg in de auto.

## Hoe moeilijk is het om een chatbot zoals Sophie die praat en belt te maken?

Een pratende en bellende chatbot zoals Sophie is technisch zeer goed mogelijk. Sophie is een snelle showcase die we gebouwd hebben om te laten zien wat nu al bruikbaar is: spraak, gesprek, bellen, intake en opvolging in één kleine demo. De echte waarde zit niet in de losse demo zelf, maar in wat jullie ermee kunnen laten zien: een agent die zelfstandig een gesprek kan starten, informatie kan verzamelen en een vervolgactie kan voorbereiden. De waarde zit ook in de bredere mogelijkheden van Hermes. Een dienst als Fonio.ai vraagt bijvoorbeeld rond €99 per maand voor alleen al een AI-telefoonassistent, terwijl Hermes zo’n toepassing zelf kan helpen bouwen en koppelen. Jullie kunnen het testen op de website; we hebben haar Sophie genoemd.

## Wat betekent een agent die met jullie meegroeit?

Een agent die met jullie meegroeit, onthoudt voorkeuren, werkwijzen en terugkerende taken binnen afgesproken grenzen. Daardoor hoeven jullie niet steeds opnieuw uit te leggen hoe jullie werken. Hermes kan zo briefings, conceptmails, documentordening, planning en opvolging steeds beter voorbereiden, terwijl jullie de eindcontrole houden.

## Kunnen wij Hermes via WhatsApp Business gebruiken?

Ja. WhatsApp Business kan het laagdrempelige kanaal zijn waarmee jullie of jullie klanten de agent bereiken. Hermes begint veilig: profiel, intake, labels en conceptantwoorden eerst; verdergaande automatisering pas met duidelijke opt-in, logging, officiële routes en menselijke goedkeuring. Hier ligt ook de kracht van Hermes: we kunnen WhatsApp-berichten laten sturen, groeperen, labelen en opvolgen. Zie het als een mini-CRM rond jullie klantgesprekken.

## Wat is MCP en heeft Hermes dat nodig?

MCP staat voor Model Context Protocol. Het is een standaard waarmee een AI-agent verbinding kan maken met externe documenten, agenda’s, databases of andere systemen. Bij Hermes hebben jullie MCP meestal niet nodig. Hermes kan het meeste zelf regelen met ingebouwde tools, vaardigheden en rechtstreekse koppelingen. Alleen als een specifiek extern systeem niet rechtstreeks bereikbaar is, kan MCP een aanvullende koppeling zijn. Het is dus een mogelijkheid, geen vereiste om met Hermes te beginnen.

## Is Hermes Agent AVG-proof in te zetten?

Ja, mits de inrichting klopt. Bij MKBagents begint dat met dataminimalisatie, duidelijke toegang, menselijke goedkeuring bij gevoelige acties en een route die past bij jullie risico’s: VPS in Europa, eigen Mac mini/Mac of hybride. AVG-proof is dus geen losse claim, maar een ontwerpkeuze per workflow, kanaal en databron.

## Zijn autonome agents zoals Hermes veilig genoeg voor zakelijk gebruik?

Autonome agents vragen begrenzing. MKBagents kiest daarom voor menselijke controle, beperkte toegang, duidelijke taakafbakening, logging/controleerbaarheid en geen automatische verzending of gevoelige actie zonder akkoord waar reputatie, geld, rechten of privacy geraakt kunnen worden. Veiligheid zit niet in “de agent mag alles”, maar in professioneel beperken wat hij mag doen.

## Stuurt Hermes onze bedrijfsdata naar een LLM?

Niet standaard jullie volledige bedrijfsomgeving. Een extern model ontvangt alleen wat voor een taak in de context wordt geplaatst: jullie prompt, relevante gespreksinformatie, geselecteerde tool- of bestandsresultaten en eventueel memory. Memory wordt lokaal opgeslagen, maar kan bij gebruik wel in de modelcontext terechtkomen. Gebruiken jullie /moa (Mixture of Agents), een feature van Hermes, dan laat Hermes voor één opdracht meerdere referentiemodellen eerst naar dezelfde vraag kijken. Een aggregatormodel gebruikt hun analyses om één antwoord te maken. Daarna schakelt Hermes terug naar het model dat jullie al gebruikten. Als de gekozen modellen extern draaien, ontvangen zij dus dezelfde geselecteerde taakcontext. Open source geeft controle en keuze, maar is niet automatisch privé. Privacy ontwerpen jullie per workflow: context minimaliseren, rechten scheiden en per taak kiezen tussen lokaal, eigen VPS, Europese cloud of externe modellen.

## Wanneer is AI lokaal draaien verstandig?

Zelf het model beheren Ja, jullie kunnen een beschikbaar AI-model zelf laten draaien als de licentie dat toestaat en de hardware geschikt is. Dat heet zelf hosten. Jullie gebruiken dan de bestaande modelbestanden, ook wel weights genoemd. Jullie hoeven dus niet zelf een taalmodel vanaf nul te trainen. De vraag is vooral of deze inrichting past bij jullie werk, gegevens en budget. Een bruikbaar AI-systeem bestaat uit meer dan een model. Het model interpreteert de vraag en maakt een antwoord of voorstel. De applicatielaag eromheen levert bedrijfsgegevens, instructies, tools, toegangsrechten en controles. De derde laag is de rekenkracht: de computer of server waarop dit alles draait. Vergelijk het model met de motor van een auto. Een goede motor is belangrijk, maar pas met besturing, remmen en de rest van de auto kunnen jullie verantwoord de weg op. Voor een afgebakende taak kan een open model met passende software en goede bedrijfsinformatie veel waarde leveren. Dat betekent niet dat het op elk gebied even goed presteert als de krachtigste commerciële modellen. Een kleinere motor kan prima passen bij de rit die jullie willen maken. Test daarom de concrete taak, inclusief uitzonderingen: wordt het werk betrouwbaar afgerond, klopt het resultaat en stopt het systeem als informatie of toestemming ontbreekt? Alleen een slim klinkend antwoord is niet genoeg. Een voorbeeld voor een klein bedrijf: een conceptofferte opstellen met jullie eigen tarieven, voorwaarden en een goedgekeurd voorbeeld. Het model helpt de aanvraag te begrijpen en de tekst te schrijven. De applicatie haalt de juiste tarieven op, rekent bedragen met een rekentool na en meldt ontbrekende gegevens. Jullie controleren de offerte en geven akkoord voordat deze naar de klant gaat. Jullie bedrijfskennis maakt hierbij het verschil: tarieven, afspraken, documenten en de manier waarop jullie werken. Die informatie hoeven jullie niet allemaal in het model zelf te trainen. De applicatie kan de relevante gegevens per taak ophalen en meegeven. Bewaak welke informatie daarvoor nodig is, wie erbij mag en hoelang die wordt bewaard. Controleer bij een leverancier de contracten en het databeleid, waaronder afspraken over opslag, hergebruik en training. Dat verschilt per dienst en overeenkomst. Een eigen agentomgeving beheren is niet hetzelfde als het model lokaal draaien. Jullie kunnen Hermes zelf beheren en toch een extern model gebruiken. Dan gaan de geselecteerde opdracht, gesprekscontext, geheugeninformatie en toolresultaten die voor die taak worden meegestuurd naar de modelaanbieder. Ook lokaal bewaard geheugen kan zo extern worden verwerkt. Alleen als ook het model en de overige verwerking binnen de afgesproken eigen omgeving blijven, blijft die gegevensverwerking daar. Zelf hosten kan op eigen hardware, zoals een geschikte computer of bedrijfsserver, of op een gehuurde cloudserver. Een Europese VPS is dus geen computer bij jullie op kantoor. Kijk per route naar de benodigde capaciteit, de locatie van de gegevens en wie het beheer doet. Niet iedere server is geschikt voor ieder model. Jullie krijgen meer zeggenschap over de inrichting, maar blijven afhankelijk van onder meer hardware, software, modellicenties en eventueel een hostingpartij. Bij eigen beheer horen ook updates, beveiliging, back-ups, hersteltests en het opnieuw testen van workflows na wijzigingen. Jullie betalen mogelijk geen externe modelprijs per token, maar wel voor hardware of cloudcapaciteit, elektriciteit en beheertijd. Zelf hosten is daarom niet automatisch goedkoper, veiliger of volledig onafhankelijk. Spreek vooraf af wie verantwoordelijk is en vergelijk de totale kosten met de kwaliteit die de taak vraagt. Een hybride inrichting kan ook passen: gevoelige verwerking in de eigen omgeving en een extern model voor taken waarvoor dat is toegestaan. Leg die grens expliciet vast, ook voor geheugen, documenten, hulpmiddelen en een eventuele fallback. Een storing mag niet ongemerkt betekenen dat vertrouwelijke gegevens alsnog naar buiten gaan. MKBagents kiest daarom per workflow: lokaal waar gegevensgrenzen en controle dat vragen, extern waar dat is toegestaan en beter past. Met een open agentomgeving kunnen jullie een andere modelroute aansluiten zonder noodzakelijk al jullie werkwijzen opnieuw op te bouwen. Koppelingen en resultaten moeten jullie daarna wel opnieuw testen. Begin met één nuttige taak, vergelijk de routes op dezelfde voorbeelden en kies op basis van betrouwbaar afgerond werk.

## Wat gebruiken jullie voor hosting als wij de AI-modellen op een eigen fysieke server willen hebben?

Dan gebruiken we lokale hosting, ook wel on-premise hosting genoemd. Op de server draaien de AI-modellen via software zoals Ollama of vLLM. Jullie gegevens blijven zo binnen jullie eigen omgeving. Voor één server is dit meestal voldoende. OpenInfra/OpenStack wordt pas interessant als jullie meerdere servers of een complete private cloud willen beheren.

## Wat betekent het dat Hermes open source is?

Hermes Agent is open source. Dat betekent dat de code openbaar beschikbaar is, ongeveer zoals softwareprojecten op GitHub worden bewaard, gedeeld, verbeterd en door anderen kunnen worden voortgezet. GitHub is een online werkplaats en archief voor softwarecode: een soort digitale garage waar ontwikkelaars code bouwen, onderhouden, verbeteren en delen. Omdat Hermes open source is, blijft de code beschikbaar, ook als Nous Research ooit zou stoppen of het project door anderen wordt voortgezet. Jullie betalen geen licentie voor Hermes zelf. Nous Research kan geld verdienen met diensten eromheen, zoals modeltoegang, hosting, support of maatwerk voor bedrijven. Dat zien jullie vaker bij open source: Google maakte Android open source en bouwde daarmee een groot Google-ecosysteem; Meta geeft Llama-modellen vrij en wordt daardoor belangrijker in open AI. Hermes is dan de open werkbank rond agents; het commerciële deel zit in gemak, beheer en professioneel gebruik eromheen. Maar voor onze toepassing hoeven jullie jullie geen zorgen te maken: Hermes blijft open source, door de community up-to-date en er is geen vendor lock-in.
