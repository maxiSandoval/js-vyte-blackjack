import  _  from 'underscore';

/**
 * Crea baraja.
 * @param {Array<string>} tiposDeCarta - tipos de carta. Ejemplo ['C', 'D', 'D', 'S'],
 * @param {Array<string>} tiposEspeciales - tipos especiales. Ejemplo ['A', 'J', 'Q', 'K'];
 * @returns {Array} Retorna baraja 
 * 
 */
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {
    
    if (!tiposDeCarta || tiposDeCarta.length === 0 ) 
    throw new Error('El tipo de carta es obligatorio como arreglo de string');

    if (!tiposEspeciales || tiposEspeciales.length === 0 ) 
    throw new Error('El tipo especial es obligatorio como arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCarta) {
            deck.push(i + tipo);

          
        }
    }
    

    for (const tipo of tiposDeCarta) {
        for (const especial of tiposEspeciales) {
            deck.push(especial + tipo);
        }
    }

    // Mezcla
    return _.shuffle(deck);
}
