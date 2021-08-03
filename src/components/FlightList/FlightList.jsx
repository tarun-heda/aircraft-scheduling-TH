import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import FlightItem  from '../FlightItem/FlightItem';
import { getFlightDetails } from '../../services/services';
import { paginationPageSize } from '../../utils/constants';
import { setFlightData, setPageOffset } from '../../redux/actions/FlightAction';
import './FlightList.styles.scss';

const FlightList = ({ flightData, setFlightData, pageOffset, setPageOffset }) => {

  useEffect(() => {
    (async() => {
      const aircraftDetails = await getFlightDetails(pageOffset, paginationPageSize);
      setFlightData(aircraftDetails.data);
    })();
  }, [pageOffset, setFlightData])

  const handlePageClick = item => {
    setPageOffset(item.selected * paginationPageSize);
  }

  return (
    <div className='flight-container'>
      <div className='flight-list-header'>Flights</div>
      <div className='flight-list'>
          {flightData && flightData.map(item => 
              (<FlightItem flight={item}/>)
          )}
      </div>
      <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setFlightData: items => dispatch(setFlightData(items)),
  setPageOffset: offset => dispatch(setPageOffset(offset))
})

const mapStateToProps = state => ({
  aircraftData: state.Flight.aircraftData,
  flightData: state.Flight.flightData,
  pageOffset: state.Flight.pageOffset
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);
