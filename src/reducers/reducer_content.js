import {GET_CONTENT} from '../actions/index';

const INIT_STATE = {currentContent: {}}

export default function (state = INIT_STATE, action) {
  switch(action.type) {
    case GET_CONTENT:
      return {...state, currentContent: action.payload};
    default:
      return state;
  }
}