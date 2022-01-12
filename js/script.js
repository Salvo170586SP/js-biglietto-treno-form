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
const ticketElement = document.getElementById('ticket-type');
const trainElement = document.getElementById('train-number');
const codeElement = document.getElementById('code-cp');
const priceElement = document.getElementById('price-ticket');






//creo collegamento al bottone "GENERA" e stampo elementi in pagina
generateElement.addEventListener('click', function () {
    console.log('click');

    //Validazione
    //Se l'utente non inserisce i dati il programma si BLOCCA e stampa messaggio
    if (!nameInputElement.value || !distanceInputElement.value || agesElement.value === '--') {
        alert('Inserisci dati');
    } else {




        const nameValue = nameInputElement.value;
        nameElement.innerText = nameValue;

        //creo varibile numero random carrozza
        const trainNumberValue = Math.floor(Math.random() * 10);
        trainElement.innerText = trainNumberValue;

        //creo varibile numero random codice cp
        const codeNumberValue = Math.floor(Math.random() * 1000);
        codeElement.innerText = codeNumberValue;

        //calcolo prezzo del biglietto a km
        let price = 0.21 * distanceInputElement.value;
        console.log(price);

        //variabile di appoggio
        totalprice = price;

        //condizione 
        //se è minorenne
        if (agesElement.value === 'minorenne') {
            //applico sconto del 20%
            totalprice = price * (20 / 100);
            console.log('prezzo scontato minorenni', totalprice.toFixed(2));
            priceElement.innerHTML = `<h1>${totalprice.toFixed(2)}€<h1>`;
            ticketElement.innerText = 'SCONTO MINORENNI 20%';
        } else if (agesElement.value === 'over65') {
            //altrimenti se è over 65 applico sconto del  40%
            totalprice = price * (40 / 100);
            console.log('prezzo scontato over 65', totalprice.toFixed(2));
            priceElement.innerHTML = `<h1>${totalprice.toFixed(2)}€</h1>`;
            ticketElement.innerHTML = 'SCONTO OVER 65';
        } else {
            //altrimenti applico prezzo intero
            priceElement.innerHTML = `<h1>${totalprice.toFixed(2)}€</h1>`;
            ticketElement.innerHTML = 'BIGLIETTO STANDARD';
        }

    }
});


//creo collegamento al bottone "ANNULLA" ed elimino gli elementi della pagina
resetElement.addEventListener('click', function () {
    nameInputElement.value = '';
    distanceInputElement.value = '';
    nameElement.innerText = '';
    trainElement.innerText = '';
    codeElement.innerText = '';
    priceElement.innerText = '';
    ticketElement.innerText = '';
})