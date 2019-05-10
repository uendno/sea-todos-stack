import {ACTIONS, FILTER_OPTIONS} from '../constants';

export default (state = {option: FILTER_OPTIONS.ALL}, action) => {
  switch (action.type) {
    case ACTIONS.SET_FILTER: {
      return {
        ...state,
        option: action.option
      }
    }
  
    default:
      return state;
  }
}

export const getCurrentFilterOption = state => state.option;