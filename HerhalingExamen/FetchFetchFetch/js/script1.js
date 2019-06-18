//https://github.com/toddmotto/public-apis link voor oef te maken
(function () {
	"use strict";

	function handleError(err) {
		console.log('Request failed', err)
	}

	function handleResponse(resp) {
		console.log('response status: ', resp.status);
		return resp.json();
	}
	const dataArray = [];
	

	function handleSuccess(data) {
		console.log('data received: ', data);


		var table = document.getElementById("songs");
		for(let i = 0; i < data.length; i++) {
			let tr = document.createElement('tr');
			tr.innerHTML = '<td>' + data[i].title + '</td>'
			+ '<td>' + data[i].type + '</td>';
			tr.className = "Data"
			table.appendChild(tr);
			dataArray.push(data[i]);
		}
		console.log(dataArray);
		Klick();
	}


		function Klick (){
			let tabeldata=  document.getElementsByClassName("Data")
			const mijnArray = [...tabeldata];
		for(let i = 0; i < mijnArray.length; i++)
		{
			mijnArray[i].addEventListener('click',function(){
				console.log(mijnArray[i].innerText);
				let id = dataArray[i].id

				let songId = mijnArray[i];
				dataArray[i] = songId;
				window.open('https://www.songsterr.com/a/wa/song?id=' + id);
			})
		}
	};

	document.getElementById('btnSearch').addEventListener("click", function(e){
    e.preventDefault();
    let naam = document.getElementById("artist").value;
    let url = 'https://www.songsterr.com/a/ra/songs/byartists.json?artists='+naam;
    console.log("werkt")

		fetch(url)
			.then(handleResponse)
			.then(handleSuccess)
			.catch(handleError);
	});
})();