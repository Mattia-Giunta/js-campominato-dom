// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


// inizializzazione costanti
const btnHTML = document.getElementById('btnPlay')
const grigliaHTML = document.getElementById('griglia')
const selectHTML = document.getElementById('cmDifficolta')


// applicato evento al bottone
btnHTML.addEventListener('click', function(){

    // resetta la griglia ogni volta che premi il tasto
    grigliaHTML.innerHTML = ''

    // rende visibile la griglia sostituendo le proprietà di stile
    grigliaHTML.style.setProperty('display', 'flex')
    

    //ciclo che crea le celle in base alla disfficoltà nella griglia
    for (let i = 1; i <= selectHTML.value; i++) {

        //creo un singolo div vuoto
        let box = document.createElement("div")

        // adatta tramite il calc le celle in base alla difficoltà
        box.style.setProperty('flex-basis', `calc(100% / ${Math.sqrt(selectHTML.value)})`)

        //associo la classe al div creato
        box.classList.add("box")

        //inseriamo i numeri in modo sequenziale
        box.innerHTML = `<span>${ [i] }</span>`


        // al click seleziona e cambia il colore della cella
        box.addEventListener('click', function () {
            
            // console.log(this)

            let specificoSpanHtml = this.querySelector( "span" ).innerText

            this.classList.toggle('sky')

            console.log(specificoSpanHtml)

        })

        //inserisco il div nella griglia
        grigliaHTML.append(box)

    }

})

// Terminato esercizio