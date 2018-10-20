export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
  type: 'RESTART_GAME'
});

export const CHANGE_FEEDBACK = 'CHANGE_FEEDBACK';
export const changeFeedback = feedback => ({
  type: 'CHANGE_FEEDBACK',
  feedback
});

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
  type: 'ADD_GUESS',
  guess
});

export const CHANGE_STATUS = 'CHANGE_STATUS';
export const changeStatus = status => ({
  type: 'CHANGE_STATUS',
  status
});