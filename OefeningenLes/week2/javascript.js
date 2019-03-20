(function () {
  'use strict';

  window.addEventListener('load', function () {
    // code wordt uitgevoerd na het laden van de pagina

    document.getElementById('btnLogin').addEventListener('click',
      function () {
        // Toont de loginmodal door css class te verwijderen.
        document.getElementById('loginmodal').classList.remove('loginmodal--verborgen');
      });

    //add toegevoegd, btnCancel
    document.getElementById('btnCancel').addEventListener('click',
      function () {
        // Toon de loginmodal
        document.getElementById('loginmodal').classList.add('loginmodal--verborgen');
      });

    // formcheck oefening.  
    document.getElementById('login__form').setAttribute('novalidate', 'novalidate');
    // formchecking starts here
    //btnsubmit , click 
    document.getElementById('login__form').addEventListener('submit', function (e) {
      // ????????????????
      e.preventDefault();
      e.stopPropagation();

      let isValid = true;

      // perform checks here
      // ...

      // Neemt de id van errormessages en stelt ze gelijk aan de variabelen binnne js.
      let errUname = document.getElementById('errUname');
      let errPass = document.getElementById('errPass');
      let inpUname = document.getElementById('inpUname');
      let inPass = document.getElementById('inpPass')
      // 3 gelijkaantekens gaan ook de types vergelijken.
      // zo zal het strings en int kunnen onderscheiden.
      if (inpUname.value === '') {
        isValid = false;
        errUname.innerHTML = 'email mag niet leeg zijn'
        errUname.style.display = 'block';
      } else {
        errUname.innerHTML = '';
      }
      // }else if(inpUname.value != [a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,} ){
      //   errUname.innerHTML = 'ongeldig email'
      //   errUname.style.display = 'block';
      // }
      if (inpPass.value === '') {
        isValid = false;
        errPass.innerHTML = 'Het wachtwoord mag niet leeg zijn'
        errPass.style.display = 'block';
      } else {
        errPass.innerHTML = '';
      }

      if (isValid == true) {
        console.log('all ok');
      } else {
        console.log('form contains errors')
      }
      //lijst met alle images. en figures ophalen. je stelt je css objecten gelijk aan variabelen.
      
      //let figures = document.querySelectorAll('.main__thumbs figure');
    });
      let thumbs = document.querySelectorAll('.main__thumbs>figure');
      let big = document.querySelector('.main__large');
      let photo = big.querySelector('img');

        for (let i = 0; i < thumbs.length; i++) {
            let thumb = thumbs[i];
            let link = thumb.querySelector('a');
            let img = thumb.querySelector('img');
            let description = document.querySelector('.large__title');
            link.addEventListener('click', function(e) {
          // prevent default link action , zorgt dat link niet geactiveerd word.
          e.preventDefault();
          // show image
          photo.src = link.href;
          photo.alt = img.alt;
          description.innerHTML = img.alt;
          // change active state
          document.querySelector('.main__thumbs .active').classList.remove('active');
          
          thumb.classList.add('active');
        });
      }
      // FILTERING VAN ALBUMS
      // werk met select and eventlistner change.
      var selectAlbum= document.getElementById("selAlbum");
      let lijstopties = document.querySelectorAll('option');
      let array = [1,2,3,4,5,6,7];
      
      selectAlbum.addEventListener('change', function(){
        let waarde = selectAlbum.value;
        // console.log("het werkt");
        // console.log(waarde);
        $('figure').remove();
       for (let i = 0; i < array.length;i ++ )
       {
        // $("#filter").change(function() {
				// 	var tekst = $(this).val();
				// 	$("tbody tr").hide();
				// 	$("tbody tr td:contains('" + tekst + "')").parent().show();
				// });
       }
      }
      
      )
  });
})(); 