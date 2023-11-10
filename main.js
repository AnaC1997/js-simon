////Visualizzare in pagina 5 numeri casuali
const numeriCasuali = getRandomNumbers(5, 1, 100);

//////stampo l'array in pagina 
document.getElementById("numeroInPagina").innerHTML = numeriCasuali.join(", ");

////dopo 3s, faccio scompare i numeri scompaiono dal DOM
setTimeout(function() {
    document.getElementById("numeroInPagina").innerHTML = "";
}, 3000);

////dopo 3s chiedo i numeri all'utente
setTimeout (function() {
    let numeriUtente =  numeroUsuario ();
    let numeriInduvinatiUtente = numeriInduvinati(numeriCasuali, numeriUtente);
    alert("Hai indovinato " + numeriInduvinatiUtente.length + " numeri");
    alert("I numeri che hai indovinato sono: " + numeriInduvinatiUtente.join(", ") );
    alert("I numeri giusti erano: " + numeriCasuali.join (", "))
}, 3100);


///////////////////// FUNZIONI//////////////////////////

// Funzione per sapere quanti numeri sono stati indovinati
function numeriInduvinati(arrayList, arrayConfronto){
    // array vuoto per contenere i numeri indovinati
    let risultato = []; 

    for(let i = 0; i <arrayList.length; i++){
        if( arrayConfronto.includes(arrayList[i])) {
        // se al confrontare i dui nummeri sono uguali, allora aggiunge elemento a risultato
        risultato.push(arrayList[i]);
        
    }
    
}
// restituisce  l'array contenenet i numeri indovinati
return risultato;
}


// l'utente inserisce 5 numeri da prompt 
function numeroUsuario(){
    //Dichiaramo un array vuro per inserire i numeri che l'utente fornisce con il prompt
    let risultato = [];
    //  il cliclo non finisce fino che " risultato" non contiene 5 numeri 
    while(risultato.length <5){

        // chiedo all'utente un numero 
        let nuevoNumero = parseInt(prompt("Inserisce un numero")); 

        // // Se il numero non è presente, lo aggiungo all'array 'risultato'.
        if (!risultato.includes(nuevoNumero)){
            risultato.push(nuevoNumero);
        }
        // Se il numero è già presente, mostro un messaggio di avviso all'utente.
        else{
            alert ("Non puoi inserire una numero già inserito")
        }
    }
    // Una volta ottenuti 5 numeri, ristituisce l'array "risultato"
    return risultato;
}


//Funzione che contendra numeri causuali e controllerà che tutti siano diversi tra loro
function getRandomNumbers(quantiNumeri, min, max) {
    let risultato = [];

    // cliclo while che repite funche non sia raggiunto la quantita di numeri desiderari
    while (risultato.length < quantiNumeri) {
        // genera un nuovo numero casuale
        const nuevoNumero = numeroCasuale(min, max);
        // controlla che non sia nel array 
        if (!risultato.includes(nuevoNumero)) {
             // se non è nel array lo pusha
            risultato.push(nuevoNumero);
            console.log(nuevoNumero)
        }
       
    }
    return risultato;
}

// Funzione per generare un numero casuale
function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}
