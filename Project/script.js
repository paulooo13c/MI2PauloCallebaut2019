;;
(function () {
    'use strict';
    window.addEventListener('load', function () {
      console.log("functie 1 werkt");

      // Geprobeerd om op deze manier op elke div te kunnen klikken maar tevergeefs.
      // let pictogrammen = document.querySelectorAll('dummy');
      // pictogrammen.forEach(pictogram => pictogram.addEventListener('click', function(){
      //   console.log("het werkt.");
      // }));

      // Bij het klikken van een div object krijg je de waarde hiervan. En zal er een transformatie plaatsvinden.
      let value1;
      let value2;
      let pictogram = document.getElementById('pictogram');
      let pictogram2 = document.getElementById('pictogram2');

      // Klassen in een array steken om ze allemaal te kunnen aanspreken.
      let kaart = document.getElementsByClassName('klassepictogram');
      let mijnArray = [...kaart];
      for (let i = 0; i < mijnArray.length; i++) {
        mijnArray[i].addEventListener("click", function(){
          mijnArray[i].style.transform = "rotatey(180deg)";
          mijnArray[i].style.backgroundColor = "red";
          mijnArray[i].classList.remove('klassepictogram');
          mijnArray[i].classList.add('klik');
          value1 = pictogram.getAttribute('value');
          VergelijkValue();
          console.log("KlikFunctie werkt.");
          console.log(value1);
        })
      }


      // pictogram.addEventListener('click', function(){
      //   pictogram.style.transform = "rotatey(180deg)";
      //   //pictogram.style.backgroundColor = "red";
      //   pictogram.classList.remove('klassepictogram');
      //   pictogram.classList.add('klik');
      //   value1 = pictogram.getAttribute('value');
      //   console.log("KlikFunctie werkt.");
      //   console.log(value1);
      // })

      // pictogram2.addEventListener('click', function(){
      //   pictogram2.style.transform = "rotatey(180deg)";
      //   pictogram2.style.backgroundColor = "red";
      //   value2 = pictogram2.getAttribute('value');
      //   console.log("KlikFunctie 2 werkt.");
      //   console.log(value2);
      //   VergelijkValue();
      // })


      // Deze functie zal de waarden van beiden vergelijken 
      function VergelijkValue()
      {
        // Code ....
        if(value1 === value2)
        {
          console.log("de waarden zijn gelijk ")

        }
        else
        {
          console.log("de waarden zijn niet gelijk")
          pictogram.style.transform = "rotatey(180deg)";
          pictogram.style.backgroundColor = "white";
          pictogram2.style.transform = "rotatey(180deg)";
          pictogram2.style.backgroundColor = "white";
        }
      }
    });

})();