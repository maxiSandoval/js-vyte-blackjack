  

  /**
   * Funcion para pedir carta
   * @param {Array<String>} deck es un arreglo de string
   * @returns elimina del deck última carta y la retorna 
   */
  export const perdirCarta = (deck) => {

    if (deck.length === 0) {
        throw 'No hay cartas';
    }

    return deck.pop();
}
