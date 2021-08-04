import { combineReducers } from 'redux';

import FlightReducer from './reducers/FlightReducer';

export default combineReducers({
    Flight: FlightReducer
})