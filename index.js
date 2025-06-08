//ESERCIZIO 1 
/*
let num1 = parseInt(prompt("inserisci numero "))
let num2 = parseInt(prompt("inserisci numero "))
let risultato = controllo(num1, num2)
console.log(num1,num2)
console.log(risultato)

function controllo(num1, num2) {
    if (num1 === 50 || num2 === 50 || (num1+num2) === 50) {
        return true;
    } else {
        return false;
    }
}

//ESERCIZIO 2
let parola =prompt("inserisci parola ")
let posLettera = parseInt(prompt("inserisci numero "))
eliminaLettera(parola,posLettera)


function eliminaLettera(parola,posLettera) {
if(posLettera < parola.length) {
    let mod= parola.slice(0, posLettera)+parola.slice(posLettera + 1)
    console.log(mod)
    
}else{
    console.log("posizione non valida")
}
}

//ESECIZIO 3
let num1 = parseInt(prompt("inserisci numero "))
let num2 = parseInt(prompt("inserisci numero "))
let risultato = controllo(num1, num2)
console.log(risultato)

function controllo(num1, num2) {
    if(((num1>=40 && num1<=60) || (num2>=40 && num2<=60)) && ((num1>=70 && num1<=100) || (num2>=70 && num2<=1000))) {
        return true;
    } else {
        return false;
    }
} 

//ESERCIZIO 4
let nomeCitta = prompt("inserisci nome città");
let analisi = analizzaCitta(nomeCitta);
console.log(analisi);

function analizzaCitta(nomeCitta) {
    nomeCitta = nomeCitta.toLowerCase();
    if(nomeCitta.startsWith("los") || nomeCitta.startsWith("new")) {
        nomeCitta= nomeCitta.split(" ");
        nomeCitta = nomeCitta.map(parola => parola.charAt(0).toUpperCase() + parola.slice(1)).join(" ");
        return nomeCitta 
    }else {
        return false;
    }
}

//Esercizio 5
let numeri = [];
let nElementi = parseInt(prompt("inserisci numero di elementi dell'array"));
for (let i = 0; i < nElementi; i++) {
    let numero = parseInt(prompt("inserisci numero " + (i + 1)));
    numeri.push(numero);
}
let risultato = somma(numeri);
console.log("La somma dei numeri è: " + risultato);

function somma(numeri) {
    let somma = 0;
    for (let i = 0; i < numeri.length; i++) {
        somma += numeri[i];
    }
    return somma;
}

//Esercizio 6 
let numeri = [];
let numDaTrovare = [1,3]
let nElementi = parseInt(prompt("inserisci numero di elementi dell'array"));
for (let i = 0; i < nElementi; i++) {
    let numero = parseInt(prompt("inserisci numero " + (i + 1)));
    numeri.push(numero);
}
let risultato = controllo(numeri, numDaTrovare);
console.log(risultato);

function controllo(numeri, numDaTrovare) {
    ricerca = numDaTrovare.some(num => numeri.includes(num));
    return ricerca    
}

// Esercizio 7
let gradiAngolo = parseInt(prompt("Inserisci i gradi dell'angolo"));
let risultato = verificaAngolo(gradiAngolo);
console.log(risultato);

function verificaAngolo(gradiAngolo) {
    if (gradiAngolo >= 0 && gradiAngolo < 90) {
        return "Acuto";
    } else if (gradiAngolo === 90) {
        return "Retto";
    } else if (gradiAngolo > 90 && gradiAngolo < 180) {
        return "Ottuso";
    } else if (gradiAngolo === 180) {
        return "Piatto";
    }else {
        return "Valore non valido";
    }
}

// Esercizio 8
let CreaAcronimo = prompt("Inserisci una frase per creare un acronimo");
let acronimo = generaAcronimo(CreaAcronimo);
console.log(acronimo);

function generaAcronimo(frase) {
    let parole = frase.split(" ");
    console.log(parole);
    let acronimo = "";
    for (let i = 0; i < parole.length; i++) {
        acronimo += parole[i].charAt(0).toUpperCase();
    }
    return acronimo;
}
*/

