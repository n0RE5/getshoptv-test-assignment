import React from 'react'
import { Link } from 'react-router-dom';
import { DEFAULT_ROUTE } from '../utils/consts';
import '../styles/errorpage.scss';

const ErrorPage = () => {
    return (
        <div className='container error404'>
            <div className='error404__text'>404!</div>
            <div className='error404__description'>We looked all over, but that page seems to have gotten away from us.</div>
            <Link className='error404__link' to={DEFAULT_ROUTE}>Bring me back to the homepage</Link>
        </div>
    );
}

export default ErrorPage;