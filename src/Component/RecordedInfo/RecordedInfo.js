import React from 'react';
import './RecordedInfo.css'
import profilePic from '../../images/prifilePic.jpg'

const RecordedInfo = () => {
    return (
        <div>
            <div className='recorded-info'>
                <div className='user'>
                    <div className='user-header'>
                        <img src={profilePic} alt="" />
                        <div className='user-info'>
                            <h3 className='user-name'>Khalid Mim Muzhaid</h3>
                            <p className='user-location'>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                    <div className='user-physical-info'>
                        <div>
                            <h3>75kg</h3>
                            <p>weight</p>
                        </div>
                        <div>
                            <h3>5' 8"</h3>
                            <p>height</p>
                        </div>
                        <div>
                            <h3>26 years</h3>
                            <p>age</p>
                        </div>
                    </div>
                </div>
                <div className='breaks-info'>
                    <h3>Add a Break</h3>
                    <div className='breaks'>
                        <p>10s</p>
                        <p>20s</p>
                        <p>30s</p>
                        <p>40s</p>
                        <p>50s</p>
                    </div>
                </div>
                <div className='exercise-details'>
                    <h3>Excercise Details</h3>

                    <div className="exercise-block">
                        <h4>Exercise time</h4>
                        <p><span id="excercise-time">200</span> seconds</p>
                    </div>
                    <div className="exercise-block">
                        <h4>Break time</h4>
                        <p><span id="break-time">15</span> seconds</p>
                    </div>
                </div>
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default RecordedInfo;