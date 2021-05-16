import React from 'react';

const Review = ({ data }) => {
    return (
        <div style={{color: "white", padding: "15px", border: '2px solid #E5AF56', borderRadius: '20px', width: '370px', boxShadow: '8px 8px #5293E8'}}>
            <div className="d-flex">
                <img className="rounded-circle m-3" style={{height: "50px", width: "50px"}} src={data.img} alt="" />
                <div className="m-3">
                    <h6>{data.name}</h6>
                    <div className="d-flex">
                        <img style={{height: "20px", width: "30px", marginRight: "10px"}} src={data.flag} alt="" />
                        <p>{data.city}</p>
                    </div>
                </div>
            </div>
            <div>
                <p>{data.text}</p>
            </div>
        </div>
    );
};

export default Review;