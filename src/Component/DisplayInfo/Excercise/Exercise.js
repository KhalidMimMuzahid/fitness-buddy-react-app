import React from 'react';
import './Exercise.css'

const Exercise = ({exercise,exTimeF}) => {
    // console.log(exercise)
    const exerciseTimeF=exTimeF;
    return (
        <div className='exercise'>
            <img src={exercise.picture} alt="" />
            <div className='exercise-info'>
                <div className='info-without-button'>
                    <h3>{exercise.name}</h3>
                    <p>{exercise.details}</p>
                    <h6>For Age: {exercise.forAge}</h6>
                    <h6>Time required: {exercise.duration}</h6>
                </div>
                <button onClick={()=>exerciseTimeF(exercise.duration)}>Add to list</button>
            </div>
        </div>
    );
};

export default Exercise;