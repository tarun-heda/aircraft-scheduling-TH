import { FlightActionTypes } from './FlightActionTypes';

export const updateRotationList = items => ({
    type: FlightActionTypes.UPDATE_ROTATION_LIST,
    payload: items
});

export const removeFromRotationList = items => ({
    type: FlightActionTypes.REMOVE_FROM_ROTATION_LIST,
    payload: items
});

export const updateUtilizationPercentage = items => ({
    type: FlightActionTypes.UPDATE_UTILIZATION_PERCENTAGE,
    payload: items
});

export const setAircraftData = items => ({
    type: FlightActionTypes.SET_AIRCRAFT_DATA,
    payload: items
});

export const setFlightData = items => ({
    type: FlightActionTypes.SET_FLIGHT_DATA,
    payload: items
});

export const setPageOffset = items => ({
    type: FlightActionTypes.SET_PAGE_OFFSET,
    payload: items
});