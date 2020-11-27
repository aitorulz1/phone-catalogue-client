import React from 'react';
import './PhoneDetail.css';
import logoMain from '../../images/logo-main.png';

const PhoneDetail = ({phone}) => {
    console.log('hola')
    console.log(phone)
    return(

        <div className="data-container">
      
                    <img src={logoMain} alt="PhonePhonesue" />
   
        </div>
    
    )
}

export default PhoneDetail