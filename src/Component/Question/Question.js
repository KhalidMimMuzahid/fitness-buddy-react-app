import React from 'react';
import'./Question.css'

const Question = () => {
  return (
    <div className="faq-full-container">
      <h1 className='faq-title'> Asked Some Question?</h1>
      <div className="faq-container">
        <div className="text-container">
          <h2> 1.How Does react Work ?</h2>
          <p>
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code.
          </p>
        </div>
        <div className="text-container">
          <h2>2.Difference between props & state in react ?</h2>
          <p>
            <h3>Props:</h3>
            <li>are immutable</li>
            <li>which lets React do fast reference checks</li>
            <li>are used to pass data down from your view-controller</li>
            <li>your top level component</li>
            <li>use this to pass data to child components</li>
            <h3>State:</h3>
            <li>are immutable</li>
            <li>which lets React do fast reference checks</li>
            <li>are used to pass data down from your view-controller</li>
            <li>your top level component</li>
            <li>use this to pass data to child components</li>
          </p>
        </div>
        <div className="text-container">
          <h2>3.what is the useEffect used for other than fetch API data?</h2>
          <li>Running on state change: validating input field </li>
          <li>Running on state change: live filtering</li>
          <li>Running on state change: trigger animation on new array value</li>
          <li>
            Running on props change: update paragraph list on fetched API data
            update
          </li>
          <li>
            Running on props change: updating fetched API data to get BTC
            updated price
          </li>
        </div>
      </div>
    </div>
  );
};

export default Question;