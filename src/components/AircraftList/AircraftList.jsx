import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AircraftItem  from '../AircraftItem/AircraftItem';
import { getAircraftDetails } from '../../services/services'
import { setAircraftData } from '../../redux/actions/FlightAction';
import './AircraftList.styles.scss';

const AircraftList = ({ setAircraftData, aircraftData }) => {

  useEffect(() => {
    document.title = 'Aircraft Scheduling';
    (async() => {
      const aircraftDetails = await getAircraftDetails('GABCD');
      setAircraftData(aircraftDetails.data);
    })();
  }, [setAircraftData])

  return (
    <div className='aircraft-list'>
        <div className='aircraft-header'>Aircraft</div>
        {aircraftData && (<AircraftItem aircraft={aircraftData}/>)}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setAircraftData: items => dispatch(setAircraftData(items))
})

const mapStateToProps = state => ({
  aircraftData: state.Flight.aircraftData
})

export default connect(mapStateToProps, mapDispatchToProps)(AircraftList);
