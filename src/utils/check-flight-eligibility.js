const checkFirstItem = (flight, firstItem) => {
    if ((flight.destination === firstItem.origin && (firstItem.departuretime > flight.arrivaltime + (20*60)) && firstItem.id !== flight.id)) {
        return true;
    }
    return false;
}

const checkLastItem = (flight, lastItem) => {
    if ((flight.origin === lastItem.destination && (flight.departuretime > lastItem.arrivaltime + (20*60)) && lastItem.id !== flight.id)) {
        return true;
    }
    return false;
}

export const isFlightEligible = (flight, rotationList) =>{
    let isEligible = false;
    if (rotationList.length === 0) {
        return true;
    }
    if (flight.selected)  {
        return false;
    }
    const firstItem = rotationList[0];
    const lastItem = rotationList[rotationList.length -1];

    isEligible = checkFirstItem(flight, firstItem);
    if (!isEligible) {
        isEligible = checkLastItem(flight, lastItem);
    }

    return isEligible;
}