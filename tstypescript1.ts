//scrivi un programma che dati due numeri di due ipotetici giocatori
//generi un numero casuale tra 1 e 100 
//verifichi se uno dei due giocatori ha indovinato
//in caso nessuno indovini, definire chi si è avvicinato di più.

//numeri dei giocatori + type assignement!!
let giocatore1: number = 13
let giocatore2: number = 85

//genero numero random con Math.floor e Math.random
let randomNumber: number = Math.floor(Math.random()* 100) + 1

//distanza tra due numeri Math.abs
let distanza1:number = Math.abs(giocatore1 - randomNumber)
let distanza2:number = Math.abs(giocatore2 - randomNumber)

//console.log:
console.log (`numero del giocatore 1: ${giocatore1}`)
console.log (`numero del giocatore 2: ${giocatore2}`)
console.log (`numero random: ${randomNumber}`)

//nel dom:
let container = document.createElement("div")

let giocatoreUno = document.createElement("p")
giocatoreUno.innerText = `Giocatore 1: ${giocatore1}`
container.appendChild(giocatoreUno)

let giocatoreDue = document.createElement("p")
giocatoreDue.innerText = `Giocatore 2: ${giocatore2}`
container.appendChild(giocatoreDue)

let numberRandom = document.createElement("p")
numberRandom.innerText = `numero random: ${randomNumber}`
container.appendChild(numberRandom)

document.body.appendChild(container)


//funzione confronto numeri:
function confrontoNumeri (): string {
    if (giocatore1 === randomNumber){
        console.log("Giocatore 1 hai vinto!")
        return ("Giocatore 1 hai vinto!")
    }
    if (giocatore2 === randomNumber){
        console.log("Giocatore 2 hai vinto!")
        return "Giocatore 2 hai vinto!"
    }
    if (distanza1 < distanza2) {
        console.log("Nessuno ha indovinato.. ma Giocatore 1 si è avvicinato di più al risultato!")
        return "Nessuno ha indovinato.. ma Giocatore 1 si è avvicinato di più al risultato!"
    }
    else if (distanza1 > distanza2) {
        console.log("Nessuno ha indovinato.. ma Giocatore 2 si è avvicinato di più al risultato!")
        return "Nessuno ha indovinato.. ma Giocatore 2 si è avvicinato di più al risultato!"
    }
    else { //in caso di pareggio 
        console.log("entrambi vittoria!!")
        return "entrambi vittoria!!"
    }
}
confrontoNumeri ()

//stampa nel dom il risultato del gioco:
let risultato: string = confrontoNumeri()

let risultatoResult = document.createElement("h5")
risultatoResult.innerText = risultato

document.body.appendChild(risultatoResult)


// button refresh
let refreshButton = document.createElement("button")
refreshButton.innerText = "RIPROVA!"
document.body.appendChild(refreshButton)

// al click ricarico la pagina
refreshButton.addEventListener("click", () => {
    location.reload()
})
