import React from 'react';
import { connect } from 'react-redux';
import FlightItem  from '../FlightItem/FlightItem';
import './RotationList.styles.scss';

const RotationList = ({ rotationList }) => {
  return (
    <div className='rotation-list'>
        <div className='rotation-header'>Flight Rotation</div>
        {rotationList.map(item => 
          (<FlightItem key={item.id} flight={item} isRotationItem/>)
        )}
    </div>
  )
}

const mapStateToProps = state => ({
  rotationList: state.Flight.rotationList
})

export default connect(mapStateToProps, null)(RotationList);
