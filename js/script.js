console.log('js ok');

/* 
Il programma dovrà mostrare una form da compilare con cui 
chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

Il recap dei dati e l'output del prezzo finale va stampato in pagina 
(formattato con massimo due decimali, per indicare centesimi sul prezzo).
*/

//recupero elementi
const nameInputElement = document.getElementById('user-name');
const distanceInputElement = document.getElementById('distance');
const agesElement = document.getElementById('ages-menu');
const generateElement = document.getElementById('generate');
const resetElement = document.getElementById('reset');
const nameElement = document.getElementById('customer-name');
const trainElement = document.getElementById('train-number');
const codeElement = document.getElementById('code-cp');
const priceElement = document.getElementById('price-ticket');




//creo collegamento al bottone "GENERA" con l'input nome e cognome e stampo elemento in pagina
generateElement.addEventListener('click', function(){
    console.log('click');
    const nameValue = nameInputElement.value;
    nameElement.innerText = nameValue;
    
    //creo varibile numero random carrozza
    const trainNumberValue = Math.floor(Math.random()*1000);
    trainElement.innerText = trainNumberValue;
    
    //creo varibile numero random codice cp
    const codeNumberValue = Math.floor(Math.random()*1000);
    codeElement.innerText = codeNumberValue;



 });
