;(function(){
    "use strict";

    // 200 = alles in orde
    function handleResponse(resp) {
        console.log('response status: ', resp.status);
          return resp.json(); // converteer data naar json.
      }
    
    var something = document.getElementsByTagName('table');
    var tableca = something[0];

    function handleSucces(data){
        console.log('data recieved: ', data);
        for(let i=0; i< 10; i++)
        {
            data[i].title;
            data[i].chordsPresent;
            var tr = document.createElement('tr');

            var td1 = document.createElement('td');
            var td2 = document.createElement('td');

            var text1 = document.createTextNode(data[i].title);
            var text2 = document.createTextNode(data[i].tabTypes)

            td1.appendChild(text1);
            td2.appendChild(text2);

            tr.appendChild(td1);
            tr.appendChild(td2);

            tableca.appendChild(tr);
        }
    }

    // een andere optie

    // function handleSuccess(data) {
	// 	console.log('status: ', data);
	// 	console.log('data received: ', data);
	// 	var table = document.getElementById("songs");
	// 	for(let i = 0; i < data.length; i++) {
	// 		let tr = document.createElement('tr');
	// 		tr.innerHTML = '<td>' + data[i].title + '</td>'
	// 		+ '<td>' + data[i].type + '</td>';
	// 		table.appendChild(tr);
	// 	}
	// }

    const datas = document.querySelectorAll('td');

    datas.forEach(data=> data.addEventListener('mouseover',function(){
        console.log('over');
    }))

    // let tabledate = document.querySelectorAll("td");

    // tabledate.addEventListener('onmouseover',function(){
    //     console.log('hover');
    // })
 

    document.getElementById('btnSearch').addEventListener("click", function(e){
    e.preventDefault();
    let naam = document.getElementById("artist").value;
    let url = 'https://www.songsterr.com/a/ra/songs/byartists.json?artists='+naam;
    console.log("werkt")

    fetch(url)
    .then(handleResponse)  // roep functie handleRespsonse op.
    .then(handleSucces);
    //.catch(handleError);
});
}());