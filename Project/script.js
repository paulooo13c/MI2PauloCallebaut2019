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

    const open = [];

    let isEerstePictogram = false;

    let klik1;
    let klik2;
    let afbeelding1;
    let afbeelding2;

    let geklikedArray = [klik1, klik2, afbeelding1, afbeelding2];

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
          setTimeout(vergelijken, 500);
        }
        console.log("KlikFunctie werkt.");
      })
    }

    // Deze functie zal de waarden van beiden vergelijken 
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
        open.length = 0;
      }
    }

    function einde() {
      alert("Proficiat je hebt ze allemaal gevonden ! ")
    }
  });

})();