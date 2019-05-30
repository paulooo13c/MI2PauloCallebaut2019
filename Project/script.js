;;
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Bij het klikken van een div object krijg je de waarde hiervan. En zal er een transformatie plaatsvinden.

    // Klassen in een array steken om ze allemaal te kunnen aanspreken.
    let pictogram = document.getElementsByClassName('klassepictogram');
    const mijnArray = [...pictogram];

    let afbeelding = document.getElementsByClassName('hidden');
    const arrayAfbeeldingen = [...afbeelding];

    // Een array waar ik de geklikte objecten insteek.
    const open = [];

    // Een boolean die ik gebruik om het eerste en tweede geklikte object te onderscheiden.
    let isEerstePictogram = false;

    for (let i = 0; i < mijnArray.length; i++) {
      mijnArray[i].addEventListener("click", function () {
        mijnArray[i].classList.add('klik');
        arrayAfbeeldingen[i].classList.remove('hidden');
        if (!isEerstePictogram) {
          isEerstePictogram = true;
          open.push(mijnArray[i]);
          open.push(arrayAfbeeldingen[i]);
          console.log(open[0])
        }
        else {
          isEerstePictogram = false;
          open.push(mijnArray[i]);
          open.push(arrayAfbeeldingen[i]);
          console.log(open[1]);
          setTimeout(vergelijken, 250);
        }
        console.log("KlikFunctie werkt.");
      })
    }

    // Deze functie zal de waarden van Vergelijken.
    // In dit geval gaat hij de id van het object er uit nemen.

    let aantalJuist = 0;

    function vergelijken() {
      if (open[0].id === open[2].id) {
        console.log("waarden zijn gelijk");
        aantalJuist++;
        open.length = 0;
        if (aantalJuist == 8) {
          einde();
        }
      }
      else {
        console.log("waarden zijn niet gelijk")
        open[0].classList.remove('klik');
        open[1].classList.add('hidden');
        open[2].classList.remove('klik')
        open[3].classList.add('hidden')
        Buzzer();
        open.length = 0;
      }
    }
    function Buzzer(){
      var audio = new Audio('sounds/Wrong Buzzer.wav');
      audio.play();
    }

    function einde() {
      alert("Proficiat je hebt ze allemaal gevonden ! ")
      var credits = new Audio()
    }
  });

})();