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

    // rotationList.forEach((item, index) => {
    //     if ((index === 0 || index === rotationList.length -1) && !stopProcessing) {
    //         if (item.ident === flight.ident) {
    //             isEligible = false;
    //             stopProcessing = true;
    //         }
    //         if (!((flight.arrivaltime < item.arrivaltime && flight.departuretime < item.arrivaltime) ||
    //             (flight.arrivaltime > item.departuretime && flight.departuretime > item.departuretime))) {
    //             isEligible = false;
    //         }
    //         if ((flight.origin === item.destination && (flight.departuretime > item.arrivaltime + 20) && item.ident !== flight.ident) ||
    //             (flight.destination === item.origin && (item.departuretime > flight.arrivaltime + 20) && item.ident !== flight.ident)) {
    //             isEligible = true;
    //         }
    //     }
    // });

    return isEligible;
}