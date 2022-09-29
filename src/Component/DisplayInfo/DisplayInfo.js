import React, { useEffect, useState } from 'react';
import './DisplayInfo.css'
import Exercise from './Excercise/Exercise';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const DisplayInfo = () => {
    const [exercises, setExercises]= useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data=>setExercises(data))
    },[])
    // console.log(exercises)
    return (
        <div>
            <header className='header'>
            <span><FontAwesomeIcon icon={faDumbbell} /></span>
            <h1>Fitness Buddy</h1>
            </header>
            <h3>Select todays's exercise</h3>
            <div className='exercises'>
                {
                    exercises.map(exercise => <Exercise 
                        exercise={exercise} 
                        key={exercise.id}
                        
                        ></Exercise>)
                }
            </div>
        </div>
    );
};

export default DisplayInfo;