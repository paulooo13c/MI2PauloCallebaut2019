(function () {
  "use strict";
// De Oefening uitwerken met searchparam.
// VARIABELEN
let url = 'https://www.songsterr.com/a/ra/songs/byartists.json?';
let jsonData;
let inputArtists = document.getElementById('artist');

 function handleResponse(resp) {
   console.log('response status: ', resp.status);
   return resp.json();
 } 
 
 function handleSuccess(data) {
   jsonData = data;
   console.log('data received: ', data);
   toonLiedjes();
   addClickEvent();
 }

 // Voegt voor elk lied een tablerow toe.
 function toonLiedjes(){
  console.log(jsonData.length)
  var table = document.getElementById("songs");
		for(let i = 0; i < jsonData.length; i++) {
			let tr = document.createElement('tr');
			tr.innerHTML = '<td>' + jsonData[i].title + '</td>'
			+ '<td>' + jsonData[i].type + '</td>';
			tr.className = "Data"
			table.appendChild(tr);
    }
 }

  function addClickEvent(){
    let tabeldata =  document.getElementsByClassName("Data")
    //const tabeldata = [...tabeldata];
    //console.log("tabeldata: ", tabeldata.length);
    //console.log("tabeldata", tabeldata.length);
    for(let i = 0; i < tabeldata.length; i++)
		{
			tabeldata[i].addEventListener('click',function(){
				console.log(tabeldata[i].innerText);
				let id = jsonData[i].id

				// let songId = tabeldata[i];
				// jsonData[i] = songId;
				window.open('https://www.songsterr.com/a/wa/song?id=' + id);
      })
      tabeldata[i].addEventListener('mouseover',function(){
          console.log("mouse over");
          //console.log(jsonData[i].artist.name)
          document.getElementById('artistName').innerHTML = jsonData[i].artist.name;
      })
		}
  }


 function handleError(err) {
   console.log('request failed: ', err)
 }

document.getElementById('btnSearch').addEventListener('click',function(e){
  e.preventDefault();
  console.log("click");
  addParams();
   fetch(url)
   .then(handleResponse)
   .then(handleSuccess)
   .catch(handleError);
});

function addParams(){
  let params = new URLSearchParams();
  params.append('artists',inputArtists.value);
  url = url+ params.toString();
}

})();
