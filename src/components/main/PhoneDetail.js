import React from 'react';
import './PhoneDetail.css';
import logoMain from '../../images/logo-main.png';

import PropTypes from 'prop-types';

const PhoneDetail = ({phone}) => {

    if(!phone) {
        return <img src={logoMain} alt="PhoneCatalogue" />;
    }

    const { name, manufacturer, description, color, price, imageFileName, phoneColor, screen, processor, ram } = phone;
    
    return(

        <div className="data-container">

            
            <div className="data-title-container">
                {manufacturer}
            </div>


            <div className="phone-data-container">

                <div className="phone-container">
                    <img src={`/phones/${imageFileName}`} alt={`phone: ${name}`} />

                </div>

            
                <div className="info-container">

                    <div className="info">

                            <div className="description-container">
                                <div className="manufacturer">{name}</div>
                                <div className="price">£ {price}</div>
                            </div>

                            <div className="description-container">
                                <div className="color-desc">color | <span className="light">{color}</span></div>
                                <div className="color-img"><img src={`/phone-color/${phoneColor}`} alt={`color: ${color}`}/></div>
                            </div>

                            <div className="description-container">
                                <div className="description-title-dark">Description</div>
                                <div className="description-info">{description}</div>
                            </div>

                            <div className="description-container">
                                <div className="title-dark">screen</div>
                                <div className="desc-info">{screen}</div>
                            </div>

                            <div className="description-container">
                                <div className="title-dark">processor</div>
                                <div className="desc-info">{processor}</div>
                            </div>

                            <div className="description-container">
                                <div className="title-dark">ram</div>
                                <div className="desc-info">{ram}</div>
                            </div>

                    </div>


                </div>

            </div>
                    
   
        </div>
    
    )
}

PhoneDetail.propTypes = {
    phone: PropTypes.object.isRequired
}

export default PhoneDetail