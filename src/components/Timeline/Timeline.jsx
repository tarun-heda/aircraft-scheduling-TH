import React from 'react';
import { connect } from 'react-redux';
import { updateUtilizationPercentage } from '../../redux/actions/FlightAction';
import { timeValues, totalWidth, turnAroundTime, turnAroundTimeWidth,
            turnAroundTimeBackgroundColor, backgroundColor, timeItemWidth } from '../../utils/constants';
import "./Timeline.styles.scss";

const Timeline = ({ rotationList, updateUtilizationPercentage }) => {
    let prevEnd = 0;
    let utilizationTime = 0;

    if (rotationList.length === 0) {
        updateUtilizationPercentage(0);
    }

    const calculateUtilization = time => {
        const utilizationPercentage = (time/totalWidth) * 100;
        updateUtilizationPercentage(utilizationPercentage.toFixed(2));
    }

    const calculateProperties = item => {
        const marginLeft = ((Number(item.departuretime) - prevEnd)/86400) * totalWidth;
        const width = ((Number(item.arrivaltime) - (Number(item.departuretime)))/86400) * totalWidth;
        utilizationTime += width;
        calculateUtilization(utilizationTime);
        return { width: +width.toFixed(2), backgroundColor: backgroundColor, marginLeft: +marginLeft.toFixed(2) };
    }

    return (
        <div className='timeline-container'>
            <div className='time-container'>
                {timeValues.map(item => {
                    return (<div className='time-item' style={{ width: timeItemWidth }}>{item.time}</div>)
                })}
            </div>
            <div className='timeline-bar' style={{ width: totalWidth }}>
                {rotationList.map((item) => {

                    const { width, marginLeft, backgroundColor } = calculateProperties(item, prevEnd);
                    prevEnd = Number(item.arrivaltime) + turnAroundTime;

                    return (
                        <>
                            <div className='timeline-item' 
                                style={{ width: width, backgroundColor: backgroundColor, marginLeft: marginLeft }}>
                            </div>
                            <span className='timeline-item'
                                style={{ width: turnAroundTimeWidth, backgroundColor: turnAroundTimeBackgroundColor }}></span>
                        </>
                    );
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    rotationList: state.Flight.rotationList
});

const mapDispatchToProps = dispatch => ({
    updateUtilizationPercentage: item => dispatch(updateUtilizationPercentage(item))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
