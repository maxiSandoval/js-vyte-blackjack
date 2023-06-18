

/**
 * 
 * @param {String} carta carta
 * @param {Number} turno turno
 * @param {HTMLElement} divCartasJugadores divCartasJugadores
 */
export const crearCarta = (carta,turno, divCartasJugadores) => {
    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta')
        divCartasJugadores[turno].append(imgCarta);
}