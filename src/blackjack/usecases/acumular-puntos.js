import {valorCarta} from './'


/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<Number>} puntosJugadores 
 * @param {HTMLElement} puntosHtml 
 * @returns 
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHtml ) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHtml[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}