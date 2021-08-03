import React from 'react';
import { connect } from 'react-redux';
import './FlightItem.styles.scss';
import { updateRotationList, removeFromRotationList } from '../../redux/actions/FlightAction';
import { isFlightEligible } from '../../utils/check-flight-eligibility';

const FlightItem = ({ flight, rotationList, updateRotationList, removeFromRotationList, isRotationItem }) => {

  const onFlightItemClick = selectedFlight => {
    if (selectedFlight.selected) {
      removeFromRotationList(selectedFlight);
      selectedFlight.selected = false;
    } else {
      selectedFlight.selected = true;
      updateRotationList(selectedFlight);
    }
  } 

  const isEligible = isFlightEligible(flight, rotationList);
  const flightClassName = isRotationItem ? 'flight-item flight-item-unselect' : isEligible ? 'flight-item' : 'flight-item flight-item-disabled';

  return (
    <>
      <div className={flightClassName} onClick={onFlightItemClick.bind(this, flight)}>
          <div className='select-flight'>
            {isRotationItem ? 'Remove' : 'Add'}
          </div>
          <div className='flight-details-container'>
            <div className='flight-header'>
                {flight.id}
            </div>
            <div className='flight-details'>
                <div className='detail'>
                  <span>{flight.origin}</span>
                  <span>{flight.readable_departure}</span>
                </div>
                {isRotationItem && <div className='arrow'>&#8594;</div>}
                <div className='detail'>
                  <span>{flight.destination}</span>
                  <span>{flight.readable_arrival}</span>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  updateRotationList: item => dispatch(updateRotationList(item)),
  removeFromRotationList: item => dispatch(removeFromRotationList(item))
})

const mapStateToProps = state => ({
  rotationList: state.Flight.rotationList
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightItem);
