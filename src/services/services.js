import { aircraftDetailsUrl, flightDetailsUrl }  from './url';

export const getAircraftDetails = name => {
    const details = fetch(aircraftDetailsUrl + name)
                    .then(result => result.json()
                        .then(data => {
                            return data;
                        })
                    );
    
    return details;
}

export const getFlightDetails = (offset, pageSize) => {
    const details = fetch(`${flightDetailsUrl}?offset=${offset}&limit=${pageSize}`)
                    .then(result => result.json()
                        .then(data => {
                            return data;
                        })
                    );
    
    return details;
}