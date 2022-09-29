import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './WebpageName.css'

const WebpageName = () => {
    return (
        <div className='webpageName'>
            <h1>Exercise-Regularly</h1>
           <h1 className='icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></h1>
        </div>
    );
};

export default WebpageName;