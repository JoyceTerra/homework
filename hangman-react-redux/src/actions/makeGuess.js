//and its actions should have the type MAKE_GUESS.

export const MAKE_GUESS = 'MAKE_GUESS'

export default (letter) => ({
    type: MAKE_GUESS,
    payload: letter
})