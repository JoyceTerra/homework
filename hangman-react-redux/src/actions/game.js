export const MAKE_GUESS = 'MAKE_GUESS'
export const NEW_GAME = 'NEW_GAME'

export function newGame(word) {
    //console.log(word) -- receiving random word
    return {
        type: NEW_GAME,
        payload: word 
        
    }
}

export function makeGuess(letter) {
    return {
        type: MAKE_GUESS,
        payload: letter
    }
}


