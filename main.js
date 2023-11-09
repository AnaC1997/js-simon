//Visualizzare in pagina 5 numeri casuali

// Funzione per generare HTML con un numero casuale
function generaHTML(indice) {
    let numeroRandom = numeroCasuale(1, 100);
    return "Il numero " + indice + " è: " + numeroRandom;
}




// Imposta l'HTML degli elementi
const numero1 =document.getElementById("numeroInPagina1").innerHTML = generaHTML(1);
const numero2 =document.getElementById("numeroInPagina2").innerHTML = generaHTML(2);
const numero3 =document.getElementById("numeroInPagina3").innerHTML = generaHTML(3);
const numero4 =document.getElementById("numeroInPagina4").innerHTML = generaHTML(4);
const numero5 =document.getElementById("numeroInPagina5").innerHTML = generaHTML(5);

let contatore = 0; 
// Nascondi l'HTML dopo 30 secondi
setInterval(function() {
    contatore++;
    nascondiContenuto();
}, 30000);

// Funzione per nascondere il contenuto
function nascondiContenuto() {
    
    document.getElementById("numeroInPagina1").style.display = "none";
    document.getElementById("numeroInPagina2").style.display = "none";
    document.getElementById("numeroInPagina3").style.display = "none";
    document.getElementById("numeroInPagina4").style.display = "none";
    document.getElementById("numeroInPagina5").style.display = "none";
}

const numeroUtente = Number(prompt("Inserisci un numero"));
// Funzione per generare un numero casuale
function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



