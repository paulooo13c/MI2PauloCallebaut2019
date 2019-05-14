;;
(function () {
    'use strict';
    window.addEventListener('load', function () {
      console.log("functie 1 werkt");
      
      // let pictogrammen = document.querySelectorAll('dummy');
      // pictogrammen.forEach(pictogram => pictogram.addEventListener('click', function(){
      //   console.log("het werkt.");
      // }));

      // Bij het klikken van een div object krijg je de waarde hiervan. En zal er een transformatie plaatsvinden.
      let value1;
      let pictogram = document.getElementById('dummy');
      pictogram.addEventListener('click', function(){
        pictogram.style.transform = "rotate(20deg)";
        value1 = pictogram.getAttribute('value');
        console.log("KlikFunctie werkt.");
        console.log(value1);
      })

    });

})();