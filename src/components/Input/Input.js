import React from 'react';
import './input.css';
const In = ({ onInputChange, onSubmitButton }) => {
    return (
        <div className='center mt3' >
            <div className=' center size br3 pa4 shadow-5'>
                <input className='f4 pa2 center w-70' type="text" placeholder='Paste Image link to find Face:-)' onChange={onInputChange} />
                <button className='w-25 grow link pv2 ph3 dib f4 white  bg-light-red' onClick={onSubmitButton}> Detect
    </button>
            </div>
        </div>
    );
}

export default In;