import React from "react";
import './errorMessage.css'

const ErrorMessage = ({message})=>{
    return (
        <div className='center ma'>
            <div className='absolute mt5'>
                <p className="errorMessage">{message}</p>
            </div>
        </div>
    );
}


export default ErrorMessage;