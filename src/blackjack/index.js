import { crearDeck, perdirCarta, turnoMaquina, acumularPuntos, crearCarta } from './usecases'

/**
 * 
 * Clubs = treboles
 * Diamonds
 * Hearts
 * Spades
 * 
 */

const miModulo = (() => {
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'D', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = []

    // Referencias html
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        puntosHtml = Array.from(document.querySelectorAll('small')),
        divCartasJugadores = document.querySelectorAll('.divCartas');


    const incializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];

        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);

        }
        //console.clear();
        puntosHtml.forEach(elem => elem.innerText = 0)
        divCartasJugadores.forEach(elem => elem.innerHTML = '')

        btnDetener.disabled = false;
        btnPedir.disabled = false;
    }

    // Eventos

    btnPedir.addEventListener('click', () => {
        console.log(deck)
        const carta = perdirCarta(deck);
        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHtml)

        crearCarta(carta, 0, divCartasJugadores)

        if (puntosJugador > 21) {
            console.warn('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoMaquina(puntosJugador, deck, puntosJugadores, puntosHtml, divCartasJugadores);
        } else if (puntosJugador === 21) {
            console.warn('21, bacan');
        }

    })

    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoMaquina(puntosJugadores[0], deck, puntosJugadores, puntosHtml, divCartasJugadores);
    })

    btnNuevo.addEventListener('click', () => {
        incializarJuego();

    })

    return {
        nuevoJuego: incializarJuego
    };


})();
