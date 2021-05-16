import React from 'react';
import './MainHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faIcons } from '@fortawesome/free-solid-svg-icons'
const MainHeader = () => {
    return (
        <div className="pb-5">
            <div className="background d-flex flex-row align-items-center mt-5 mb-5">
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <p className="header">Cari Cari</p>
                    <div className="text">
                        <p className="text-white">Live from their sofa to yours. Get closer to your favorite</p>
                        <p className="text-white">artists, and never miss out.</p>
                    </div>
                </div>
            </div>
            <div className="allRound mt-5 text-white text-center">
                <div className="round d-flex flex-column justify-content-center">
                    <p style={{ color: 'blue' }}><FontAwesomeIcon icon={faHeart} /></p>
                    <p>0</p>
                    <p>Label</p>
                </div>
                <div className="round d-flex flex-column justify-content-center">
                    <p><FontAwesomeIcon icon={faIcons} /></p>
                    <p>0</p>
                    <p>Label</p>
                </div>
                <div className="round d-flex flex-column justify-content-center">
                    <p><FontAwesomeIcon icon={faIcons} /></p>
                    <p>0</p>
                    <p>Label</p>
                </div>
                <div className="round d-flex flex-column justify-content-center">
                    <p><FontAwesomeIcon icon={faIcons} /></p>
                    <p>0</p>
                    <p>Label</p>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;