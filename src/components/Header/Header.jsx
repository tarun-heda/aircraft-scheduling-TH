import React from 'react';
import { getTomorrow } from '../../utils/get-tomorrow-date'
import './Header.styles.scss';

const Header = () => {
    return (
    <div className='header'>Aircraft Scheduling - {getTomorrow()}</div>
    )
}

export default Header;