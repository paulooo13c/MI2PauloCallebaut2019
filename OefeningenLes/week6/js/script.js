;(function(){
    "use strict";


    function handleError(err) {
	    console.log('Request failed', err)
	}
	function handleResponse(resp) {
    console.log('response status: ', resp.status);
    // returned the response terug in jsonformaat.
	  return resp.json();
  }
  var kolom1 = document.querySelector('th');
	function handleSuccess(data) {

      console.log('status: ', data.status);
      console.log(data.statusText);
      //kolom1.textContent = data[1 , title];
      console.log("data1= " ,data[1].title, data[1].artists);  
      kolom1.innerHTML = data[1].title;
    }
  // function showText(responseAsText){
  //   var title = document.getElementById('songs');
  //   title.innerHTML = responseAsText;
  // }
    
    document.getElementById("btnSearch").addEventListener("click",function(e){
        e.preventDefault();
        let naam = document.getElementById("artist").value;
        let url = 'https://www.songsterr.com/a/ra/songs/byartists.json?artists=';
        url += naam;

        fetch(url)
        .then(handleResponse)
        .then(handleSuccess)
        // .then(showText)
        .catch(handleError);
    });
  }())
