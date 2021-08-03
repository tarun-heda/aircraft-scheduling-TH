import { FlightActionTypes } from '../actions/FlightActionTypes';
import { reorderList } from '../../utils/reorder-rotation-list';
import { removeRotationItem } from '../../utils/remove-rotation-item';

const INITIAL_STATE = {
    aircraftData: [],
    flightData: [],
    rotationList: [],
    utilizationPercentage: 0,
    pageOffset: 0
  }
  
  const FlightReducer = (state = INITIAL_STATE, action) => {
      switch (action.type) {
          case FlightActionTypes.UPDATE_ROTATION_LIST:
          return {
              ...state,
              rotationList: reorderList([...state.rotationList, action.payload])
          }
          case FlightActionTypes.REMOVE_FROM_ROTATION_LIST:
          return {
              ...state,
              rotationList: reorderList(removeRotationItem(action.payload, state.rotationList))
          }
          case FlightActionTypes.UPDATE_UTILIZATION_PERCENTAGE:
          return {
              ...state,
              utilizationPercentage: action.payload
          }
          case FlightActionTypes.SET_AIRCRAFT_DATA:
          return {
              ...state,
              aircraftData: action.payload
          }
          case FlightActionTypes.SET_FLIGHT_DATA:
          return {
              ...state,
              flightData: action.payload
          }
          case FlightActionTypes.SET_PAGE_OFFSET:
          return {
              ...state,
              pageOffset: action.payload
          }
          default:
              return { ...state };
      }
  }

  export default FlightReducer;