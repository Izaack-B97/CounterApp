import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
    
    const [ counter, setCounter ] = useState(value);

    // Funciones
    const handleAdd = (e) => {
        setCounter(counter + 1 );
        // setCounter((c) => c + 1 );
    };

    const handleReset = (e) => {
        setCounter(value);
    }

    const handleSubstract = (e) => {
        setCounter(counter - 1);
    }
    
    return (
        <Fragment>
            <h1>CounterApp</h1>
            <p>{ counter }</p>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </Fragment>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};



export default CounterApp;
