import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const hotOrColdReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RESTART_GAME:
      return initialState;

    case actions.CHANGE_FEEDBACK:
      return Object.assign({}, state, {
        feedback: action.feedback
      });

    case actions.CHANGE_STATUS:
      return Object.assign({}, state, {
        auralStatus: action.status
      });

    case actions.ADD_GUESS:
      return Object.assign({}, state, {
        guesses: [...state.guesses, action.guess]
      });

    default:
      return state;
  }
}