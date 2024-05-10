import React from 'react';
import './barcaza.css';

const Barcaza = ({nombre, matriz, index, handleMatriz}) => {

    return(
        <div>
            <p className='titulo'>{nombre}</p>
            <form action="">
                <input type="text" placeholder='Máximo tipo A' value={matriz[0][index]} onChange={ (e) => handleMatriz(0, index, e.target.value)}/>
                <input type="text" placeholder='Máximo tipo B'value={matriz[1][index]} onChange={ (e) => handleMatriz(1, index, e.target.value)}/>
                <input type="text" placeholder='Máximo tipo C'value={matriz[2][index]} onChange={ (e) => handleMatriz(2, index, e.target.value)}/>
            </form>
        </div>
    )
}

export default Barcaza;