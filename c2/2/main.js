function vote_cats(){
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/cats', true);
xhr.send(); 
}

function vote_cats(){
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/cats', true);
xhr.send(); 
alert("Спасибо ващ голос за кошек принят");
}

function vote_dogs(){
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/dogs', true);
xhr.send(); 
alert("Спасибо ващ голос за собак принят");
}

function vote_parrots(){
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://sf-pyw.mosyag.in/sse/vote/parrots', true);
xhr.send(); 
alert("Спасибо ващ голос за попугаев принят");
}