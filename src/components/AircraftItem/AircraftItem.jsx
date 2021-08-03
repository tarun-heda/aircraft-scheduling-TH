import React from 'react';
import { connect } from 'react-redux';
import './AircraftItem.styles.scss';

const AircraftItem = ({ aircraft, utilizationPercentage }) => {
  return (
    <div className='aircraft-item'>
        <div className='header-text'>
            {aircraft.ident}
        </div>
        <div className='utilization-text'>
            Utilization: {utilizationPercentage}%
        </div>
    </div>
  )
}

const mapStateToProps = state => ({
    utilizationPercentage: state.Flight.utilizationPercentage
});


export default connect(mapStateToProps, null)(AircraftItem);
