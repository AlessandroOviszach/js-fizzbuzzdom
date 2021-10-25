// Scrivi un programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 (vedi grafica allegata).

let box = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {

    if ( i % 3 == 0 && i % 5 == 0 ) {
        box.innerHTML += `<div class="box red">FizzBuzz</div>`;

    } else if ( i % 3 == 0 ) {
        box.innerHTML += `<div class="box green">Fizz</div>`;

    } else if ( i % 5 == 0 ) {
        box.innerHTML += `<div class="box yellow">Buzz</div>`;

    } else {
        box.innerHTML += `<div class="box">${i}</div>`;
    }
}
















