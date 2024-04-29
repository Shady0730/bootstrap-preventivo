console.log('Preventivo')

const buttonElement = document.getElementById('submit')
console.log (buttonElement);

formElement = document.getElementById('form-prev')

formElement.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('Submit')

// Prezzi orari per diversi tipi di lavoro
const prezziOrari = {
    'Backend Development': 20.50,
    'Frontend Development': 15.30,
    'Project Analysis': 33.60
};

// Codici promozionali validi
const codiciPromozionali = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

// Ore per progetto
const orePerProgetto = 10;

// Ottieni i valori degli input
const tipoLavoro = document.getElementById("tipoLavoro").value;
const codicePromo = document.getElementById("codicePromo").value;

let prezzoOrario = prezziOrari[tipoLavoro];
if (prezzoOrario === undefined) {
    document.getElementById("risultato").innerText = "Tipo di lavoro non valido. Scegli tra Backend Development, Frontend Development o Project Analysis.";
    return;
}

// Calcola il prezzo finale senza sconto
let prezzoFinale = orePerProgetto * prezzoOrario;

// Verifica il codice promozionale
if (codiciPromozionali.includes(codicePromo)) {
    prezzoFinale *= 0.75; // Applica lo sconto del 25%
} else if (codicePromo) {
    document.getElementById("risultato").innerText = "Codice promozionale non valido.";
    return;
}

// Formatta il prezzo finale con 2 cifre decimali
const prezzoFormattato = prezzoFinale.toFixed(2) + " €";

// Mostra il risultato
document.getElementById("risultato").innerText = "Prezzo finale: " + prezzoFormattato;

})