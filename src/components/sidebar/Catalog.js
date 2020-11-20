import React, { Fragment } from 'react';
import './Catalog.css';
import Header from '../layouts/Header';
import PhoneDetail from '../main/PhoneDetail';

import logoMain from '../../images/logo-main.png';

const Catalog = () => {
    return(
        <Fragment>

            <div className="sidebar-container">
    
                <Header />

                <div className="sidebar-list-container">
                    <div className="sidebar-list">

                    </div>
                </div>

            </div>


            <div className="main-container-inicio">

                <PhoneDetail />

                <div className="main-container-inicio">
                    <img src={logoMain} alt="PhoneCatalogue" />
                </div> 

            </div>
    
        </Fragment>
    )
}

export default Catalog;