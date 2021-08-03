import { combineReducers } from 'redux';

import FlightReducer from './reducers/FlightReducer';
// import TweetListReducer from './reducers/TweetListReducer';

export default combineReducers({
    Flight: FlightReducer
})