;;
(function () {
  'use strict';

  window.addEventListener('load', function () {
    // code wordt uitgevoerd na het laden van de pagina

    document.getElementById('btnLogin').addEventListener('click',
      function () {
        // Toon de loginmodal
        document.getElementById('loginmodal').classList.remove('loginmodal--verborgen');
      });

    //add toegevoegd, btnCancel
    document.getElementById('btnCancel').addEventListener('click',
      function () {
        // Toon de loginmodal
        document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
      });
    document.getElementById('login__form').setAttribute('novalidate', 'novalidate');
    // formchecking starts here

    document.getElementById('login__form').addEventListener('submit', function(e) {
      // ????????????????
      e.preventDefault();
      e.stopPropagation();
    
    let isValid = true;

    // perform checks here
      // ...

      // Neemt de id van errormessages en stelt ze gelijk aan de variabelen binnne js.
      let errUname = document.getElementById('errUname');
      let errPass = document.getElementById('errPass');
      // Neemt de id van Input  en stelt ze gelijk aan de variabelen binnne js.
      let inpUname = document.getElementById('inpUname');
      let inPass = document.getElementById('inpPass')

      if (inpUname.value == ''){
        isValid = false;
        errUname.innerHTML = 'email mag niet leeg zijn'
        errUname.style.display = 'block';
      }else {
        errUname.innerHTML = '';
      }
      // }else if(inpUname.value != [a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,} ){
      //   errUname.innerHTML = 'ongeldig email'
      //   errUname.style.display = 'block';
      // }
      if (inpPass.value == ''){
        isValid = false;
        errPass.innerHTML = 'Het wachtwoord mag niet leeg zijn'
        errPass.style.display = 'block';
      }else {
        errPass.innerHTML = '';
      }
  
      if (isValid == true){
        console.log('all ok');
      } else {
        console.log('form contains errors')
      }
    });
    
  });
})();