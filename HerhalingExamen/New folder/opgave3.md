# Oefening 3 : gegevens ophalen en tonen
## Opgave
In deze oefening haal je gegevens op via de api van songsterr op https://www.songsterr.com/a/wa/api

De opgave bestaat uit een aantal delen:
  * het ophalen van de gegevens met fetch
  * de (json) gegevens gebruiken om de tabel met gegevens te vullen
  * extra 'decoratie' op de getoonde gegevens toepassen

De nadruk ligt wel op het ophalen van de gegevens met fetch en het kunnen gebruiken van deze gegevens.

## De gegevens ophalen met fetch
Lees eerst de uitleg die je op https://www.songsterr.com/a/wa/api vindt.

Maak wel gebruik van het ```https``` protocol in plaats van http.

Het is de bedoeling dat je zoekt op basis van de artiestennaam. Bekijk welke url je moet bevragen om op te zoeken op basis van artiestennaam.
  * Kies voor de variant die json gegevens teruggeeft. Hoe je dit aanpast lees je in de eerste alinea op de uitleg van de API.
  * Voor deze fetch moet je geen extra opties meegeven, het is een standaard ```GET``` request
  * Kijk na op https://www.songsterr.com/a/wa/api hoe je moet omgaan met artiest- of groepsnamen die spaties bevatten.


## De liedgegevens weergeven
  * De gegevens plaats je best in het tbody deel van de pagina
  * In de eerste kolom plaats je de naam van het lied
  * In de 2e kolom plaats je de partituur (tab) gegevens van dat lied
  * Bekijk de structuur van de json om te zien wat je nodig hebt :
    * met een eenvoudige console.log
    * met een breakpoint in je script in je browser

## Extra decoratie op de getoonde gegevens
Als het je gelukt is om de gegevens in de tabel in te vullen, kan je dit verder uitbreiden met de volgende onderdelen:

  * Toon een loader img tijdens het wachten op de data
  * Link naar het lied
  * Toon de artiestnaam wanneer je over een liednaam hovert
  * Wanneer je over de partituur (tab) gegevens hovert met je cursor, toon je 'Bekijk partituur'

### Toon een loader img
Wanneer de gebruiker op de knop heeft geklikt, toon je een loader image. 
Je kan gebruik maken van de loader in de oefening, of je zoekt naar een eigen loader image.

Zodra de gegevens getoond worden, moet deze afbeelding automatisch verdwijnen.

### Link naar de tab van een lied
Voorzie een link die doorlinkt in een ander venster (tabblad) naar de gegevens van het lied op songsterr zelf.
  * Bekijk op de https://www.songsterr.com/a/wa/api welke url je daarvoor moet samenstellen.
  * De linken openen altijd in hetzelfde, andere tabblad.

### Toon de artiestnnaam
Wanneer de gebruiker met zijn cursor over de titel van het lied gaat, toon je de naam van de artiest(en).
  * Een eenvoudige title is een minimum
  * Wie iets meer uitdaging, of een 'eigen' effect wil, kan het volgende proberen :
    * Hou de artiestennaam bij in een data-attribuut van de td met de titel
    * Werk met een eventListener op de tbody (de td's zit nog niet in de dom bij de start)
    * ```mousemove``` en ```mouseleave``` kan je hiervoor gebruiken.
    * Deze events hebben onder andere de ```clientY``` eigenschap waar je mee kan werken.
    * window.scrollY is de afstand die de gebruiker heeft gescrollt op een pagina
    * De breedte van een element kan je vinden met de eigenschap ```clientWidth```
    * De artiestennaam kan je dan tonen door :
      * de naam te plaatsen in de gewenste div (```artistName```)
      * de div weer te geven door de hidden class te verwijderen
      * de x en y positie van die div aan te passen zoals gewenst

### Toon 'Bekijk partituur'
Wanneer de gebruiker met zijn cursor over een tabtype van een lied gaat, toon je de tekst
'Bekijk partituur'. Je maakt gebruik van dezelfde methode die je toepaste voor de artiestennaam.

### Extra afwerking
Je kan zelf een aantal effecten of extra afwerkingen bedenken op basis van de gegevens die je in de json data ontvangt.
