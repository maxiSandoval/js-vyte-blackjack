import { perdirCarta, crearCarta, acumularPuntos } from "./";


/**
 * Turno maquina
 * @param {Number} puntosMinimos Puntos minimos que maquina necesita para ganar
 * @param {Array<String>} deck 
 * @param {Array<Number>} puntosJugadores 
 * @param {HTMLElement} puntosHtml 
 * @param {HTMLElement} divCartasJugadores 
 * 
 */
export const turnoMaquina = (puntosMinimos, deck, puntosJugadores, puntosHtml, divCartasJugadores) => {

    let puntosMaquina = 0;

    //Esto se puede optimizar
    if (!puntosMinimos || !deck || !puntosHtml || !divCartasJugadores || !puntosJugadores) throw Error('Valores necesarios')

    do {

        const carta = perdirCarta(deck);

        puntosMaquina = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHtml)
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores)

    } while ((puntosMaquina < puntosMinimos) && (puntosMinimos <= 21));




    const determinarGanador = () => {

        const [puntosMinimos, puntosMaquina] = puntosJugadores;

        setTimeout(() => {
            if (puntosMaquina === puntosMinimos) {
                alert('Empate :(')
            } else if (puntosMinimos > 21) {
                alert('Gana Kaio-sama');
            } else if (puntosMaquina > 21) {
                alert('Gana Jugador');
            } else {
                alert('Gana Kaio-sama');
            }
        }, 100);

    }
    determinarGanador();
}