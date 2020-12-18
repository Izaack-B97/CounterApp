import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import React from 'react';

// Funcional Component
const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <Fragment>
            <h1>{ saludo }!!!</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>{ subtitulo }</p>
        </Fragment>
        
    );

};

// Condiciones de las props 
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}




export default PrimeraApp;