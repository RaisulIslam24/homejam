import React from 'react';
import './UpcomingShowDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faIdCardAlt } from '@fortawesome/free-solid-svg-icons'

const UpcomingShowDetails = ({ data }) => {
    return (
        <div class="card" style={{boxShadow: '8px 8px #301A68'}}>
            <img style={{ height: '180px' }} class="card-img-top" src={data.img} alt="Card image cap" />
            <div class="card-body">
                <p className="type">{data.type}</p>
                <h5 class="card-title text-white">{data.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn">More info <FontAwesomeIcon icon={faArrowRight} /></button>
                    <FontAwesomeIcon icon={faIdCardAlt} style={{ color: 'purple' }} />
                </div>
            </div>
        </div>
    );
};

export default UpcomingShowDetails;