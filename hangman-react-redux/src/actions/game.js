export const MAKE_GUESS = 'MAKE_GUESS'
export const NEW_GAME = 'NEW_GAME'




export function newGame() {
    return {
        type: NEW_GAME,
        payload: [] //because new game should be empty
    }
}

export function makeGuess(letter) {
    return {
        type: MAKE_GUESS,
        payload: letter
    }
}


