# 📌 Rättningsrapport – fed24d-case-af-jobtech-group-2

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6VsM7MHT)
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://jobtechdev.se/sv/components/jobsearch)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/education/education-api/-/blob/main/GETTING_STARTED.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): Search job ads (jobtechdev.se) 

## Uppgift 

Använd endpoint https://jobsearch.api.jobtechdev.se/ för att använda/söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: Historical job ads (jobtechdev.se)

Om möjligt, använd en grafisk presentation av era resultat genom t.ex. stapeldiagram eller linjegrafer.

**Observera**
Er slutprodukt ska ej innehålla Arbetsförmedlingens logga eller färger. Anpassa gärna efter eget tycke och smak så att ni har en färgpalett och en god tanke bakom. 

## Betygskriterier 

### Need-to-have (G) 
- Ni har hämtat data på ett strukturerat sätt med hjälp av antingen fetch eller axios. 
- Ni har skapat en tjänst som ni använder för att hämta data. 
- Ni använder react-koncept vi har pratat om för att göra datan tillgänglig (context, state, routing et.c.). 
- Ni använder den syntax, namngivningsstandard samt skrivsätt som vi har lärt er.  
- Ni använder designsystemet för presentation. 

### Nice-to-have (Extra bonus) 
- Styled components (som drar nytta av designsystemet) 
- Grafisk presentation av datat 
- Användning av custom hook där det finns möjlighet

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-group-2\src\contexts\AdContext.ts - no-unused-vars - 'ads' is defined but never used.,no-unused-vars - 'query' is defined but never used.,no-unused-vars - 'loading' is defined but never used.,no-unused-vars - 'error' is defined but never used.,no-unused-vars - 'total' is defined but never used.,no-unused-vars - 'page' is defined but never used.,no-unused-vars - 'page' is defined but never used.

## 🏆 **Betyg: VG**
📌 **Motivering:** Uppgiften uppfyller samtliga G‑krav och levererar flera extra delar: data hämtas strukturerat via en tjänst (fetch i serviceBase + adService), React‑koncept används korrekt (context, state, routing med loaders), designsystemet används genomgående och är tematiserat utan AF:s logga/färger. Därtill finns styled-components, en grafisk visualisering (Recharts) och egna hooks (useMediaQuery, useAdContext). Arkitekturen är tydlig med separation mellan services, loaders, context och presentation.

💡 **Förbättringsförslag:**  
- Lägg till dependency-array i useEffect i Ads (t.ex. [loaderData, hasFetched]) för att undvika onödiga körningar vid varje render.
- Visa felmeddelanden i UI när error finns i context (t.ex. med DigiNotification) så användaren får feedback vid fel.
- Sanera HTML innan dangerouslySetInnerHTML i AdDetailsPresentation (t.ex. DOMPurify) för att minimera XSS-risk.
- Gör AdDetails-layouten mer responsiv: byt till kolumnlayout på små skärmar (flex-direction: column; justera widths/gap).
- Rätta typningen mot API:t: Ad.id är normalt en string i JobSearch. Gör även description optional i Ad då list-hits inte alltid innehåller full beskrivning.
- Styr pagination enhetligt från state och säkerställ att prop-namnen matchar komponent-API:t (t.ex. afInitActivePage i stället för afInitActive-page om det är det officiella namnet).
- Ta bort eller använd oanvänd kod/state: getTotalPos och totalPages i context används inte.
- Undvik att styla via interna .sc-digi-* klasser där möjligt. Föredra tokens/CSS-variabler och komponentprops för mer robust teming.
- Spara sökparametrar i URL:en (q, page) så att sökningar kan delas/bokmärkas och återställas vid reload.
- Tillgänglighet: lägg aria-label/description på grafen och ev. en tabellfallback för skärmläsare.
- Smådetaljer: rätta stavningen av “Recruitments” i UI/Title och undvik inline-styles (flytta till styled-components).

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| Frida Nordenlöw | 35 | 50% | 0.33 | 0.4 |
| M-Lenvik | 24 | 34.3% | 0.33 | 0.34 |
| Oskar | 11 | 15.7% | 0.33 | 0.26 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
