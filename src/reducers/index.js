import {combineReducers} from 'redux';

import contentReducer from './reducer_content';

export default combineReducers({
  content: contentReducer
});
