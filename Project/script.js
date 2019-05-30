;;
(function () {
  'use strict';
  window.addEventListener('load', function () {

    // ARRAYS
    // Klassen in een array steken om ze allemaal te kunnen aanspreken.
    let pictogram = document.getElementsByClassName('klassepictogram');
    const mijnArray = [...pictogram];

    let afbeelding = document.getElementsByClassName('hidden');
    const arrayAfbeeldingen = [...afbeelding];

    // Een array waar ik de geklikte objecten insteek.
    const open = [];

    // DOM elements + variabelen
    let highscoreBoard = document.getElementById('highscoreBoard');
    let highscore;

    let aantalJuist = 0;
    let score = 0;
    let scoreboard = document.getElementById('scoreboard');

    // Voor het spel te beginnen halen we eerst een highscore binnen als die bestaat.
    getHighscore();

    // Een boolean die ik gebruik om het eerste en tweede geklikte object te onderscheiden.

    let isEerstePictogram = false;
    for (let i = 0; i < mijnArray.length; i++) {
      mijnArray[i].addEventListener('click', function () {
        mijnArray[i].classList.add('klik');
        arrayAfbeeldingen[i].classList.remove('hidden');
        if (!isEerstePictogram) {
          isEerstePictogram = true;
          open.push(mijnArray[i]);
          open.push(arrayAfbeeldingen[i]);
        }
        else {
          isEerstePictogram = false;
          open.push(mijnArray[i]);
          open.push(arrayAfbeeldingen[i]);
          setTimeout(vergelijken, 500);
        }
      })
    }

    // Hier gaan we de geplaatse objecten van de array open[] ophalen en de id's vergelijken. Telkens maken we de array leeg zodat de volgende objecten er in gestoken kunnen worden.

    function vergelijken() {
      if (open[0].id === open[2].id) {
        aantalJuist++;
        open.length = 0;
        score++
        scoreboard.textContent = score;
        if (aantalJuist == 8) {
          einde();
        }
      }
      else {
        open[0].classList.remove('klik');
        open[1].classList.add('hidden');
        open[2].classList.remove('klik')
        open[3].classList.add('hidden')
        Buzzer();
        updateScore();
        open.length = 0;
      }
    }

    // Score updaten
    function updateScore(){
      if(score > 0)
      {
        score--;
        scoreboard.textContent = score;
      }
      else
      {
        ;
      }
    }

    function Buzzer(){
      var audio = new Audio('sounds/Wrong Buzzer.wav');
      audio.play();
    }

    function einde() {
      alert("Proficiat je hebt ze allemaal gevonden!!"
      +" Het spel word herladen"
      +" je highscore wordt bijgehouden")
      aantalJuist = 0;
      setHighscore();
      reload();
    }

    function reload(){
      location.reload();
    }

    // Als de score die je hebt behaald groter is dan je highscore word deze bijgehouden.
    function setHighscore(){
      if(score > localStorage.getItem('highscoreStorage'))
      {
        localStorage.setItem('highscoreStorage', score);
      }
      else
      {
        ;
      }
    }

    // Als er een highscore bestaat word deze opgehaald.
    function getHighscore(){
      if(localStorage.getItem('highscoreStorage') != null )
      {
      highscore = localStorage.getItem('highscoreStorage')
      highscoreBoard.textContent = highscore;
      }
      else{;}
    
    }
  
  });

})();