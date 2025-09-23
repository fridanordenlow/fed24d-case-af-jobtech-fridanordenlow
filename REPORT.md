# 📌 Rättningsrapport – fed24d-case-af-jobtech-group-2

## 🎯 Uppgiftens Krav:
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://data.arbetsformedlingen.se/data/platsannonser/)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/job-ads/jobsearch/jobsearch-api/-/blob/main/docs/GettingStartedJobSearchSE.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): [Search job ads (jobtechdev.se)](https://jobsearch.api.jobtechdev.se/)

## Uppgift 

Använd endpoint **/search** för att söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: [Historical job ads (jobtechdev.se)](https://historical.api.jobtechdev.se/)

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
- Använd endpoint /complete för att lägga till autocomplete-funktion och få förslag på begrepp vid fritextsökning

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-group-2\src\contexts\AdContext.ts - no-unused-vars - 'ads' is defined but never used.,no-unused-vars - 'query' is defined but never used.,no-unused-vars - 'loading' is defined but never used.,no-unused-vars - 'error' is defined but never used.,no-unused-vars - 'total' is defined but never used.,no-unused-vars - 'page' is defined but never used.,no-unused-vars - 'page' is defined but never used.

## 🏆 **Betyg: VG**
📌 **Motivering:** Samtliga G-krav är uppfyllda och flera Nice-to-have är implementerade. Data hämtas strukturerat via fetch (serviceBase/get) och en tydlig service (adService). Applikationen använder React Router med loaders, Context API för delad state (sökning, pagination, laddning, fel), samt tydliga komponenter. Designsystmet från Arbetsförmedlingen används konsekvent och är tematiserat med egen färgpalett (utan AF:s logga/färger). Extra: styled-components används, en grafisk presentation via Recharts-bar chart finns, samt custom hooks (useAdContext, useMediaQuery). Koden är överlag välstrukturerad och typad med TypeScript.

💡 **Förbättringsförslag:**  
- Förbättra felhantering i serviceBase.get: kontrollera response.ok och kasta tydligt fel vid icke-200-svar. Detta gör catch-hantering i t.ex. SearchForm mer träffsäker.
- Ads-sidan: lägg till dependency array i useEffect (t.ex. [hasFetched, loaderData]) för att undvika att effekten körs på varje render innan hasFetched hunnit bli true.
- Pagination/fetching: ni cappar resultat till 100 och paginerar klient-side. Överväg server-side pagination (hämta med offset/limit vid sidbyte) för att stödja fler än 100 träffar.
- Autocomplete: implementera /complete-endpoint för sökförslag vid fritextsökning (ger bättre UX och uppfyller sista Nice-to-have).
- Säkerhet: ni använder dangerouslySetInnerHTML för annonsbeskrivning. Även om text_formatted kommer från tillförlitlig källa är det bra att sanera HTML eller tydligt dokumentera varför det är säkert här.
- Typning: i modellen Ad är description obligatorisk. Eftersom ni använder optional chaining i renderingen, överväg att göra description valfri i typen för att spegla API:t korrekt.
- Smådetaljer och UX:
  - Stava titel korrekt: “Tech Recruitments” (nuvarande “Reqruitments”).
  - I Footer används länkar med href="#" – ersätt med riktiga länkar eller ta bort för att förbättra tillgänglighet.
  - I diagrammet kan kommunnamn bli långa. Lägg till tickFormatter eller vinkla XAxis-ticks för bättre läsbarhet.
  - I AdDetails kan ni lägga till etikett för anställningsform (t.ex. “Anställningsform: …”) för konsekvent presentation.
- Robusthet: avbryt pågående fetches med AbortController vid snabba sidbyten/sökningar för att undvika race conditions.
- Testbarhet: bryt ut mer logik (t.ex. pagineringsberäkningar) till rena hjälpfunktioner och lägg till enkla enhetstester.

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
