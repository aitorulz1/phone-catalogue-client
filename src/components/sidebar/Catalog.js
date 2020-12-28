import React, { Fragment, useEffect, useState } from 'react';
import './Catalog.css';
import Header from '../layouts/Header';
import PhoneDetail from '../main/PhoneDetail';
import logoMain from '../../images/logo-main.png';

import PropTypes from 'prop-types';

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions de Redux
import { obtenerPhonesAction } from '../../redux/actions/phonesActions';



const Phones = () => {

    

    const dispatch = useDispatch();

    useEffect( () => {

        // Consultar la API
        const cargarPhones = () => dispatch ( obtenerPhonesAction(phones) );
        cargarPhones()
        }, [dispatch]);


        // Obtener el state
        const phones = useSelector( state => state.phones.phones );

        // Obtener id del objeto
        const [id, getId] = useState(null);

        const onClickId = id => {
            getId(id)
        }


    return(
        <Fragment>

            <div className="sidebar-container">
    
                <Header />

                <div className="sidebar-list-container">
                    <div className="sidebar-list">

                    { !phones || phones.length === 0 ? 'Nada que mostrar' 
                        : 
                            (
                                phones.map((phone) => (    
                                <div key={phone.id} className="select-phone" onClick={() => onClickId(phone.id)}>{phone.name}</div>
                                ))
                            )
                        }

                    </div>
                </div>

            </div>


            <div className="main-container-inicio">

                      {id !== null ?

                        <PhoneDetail
                            phone={phones[id]}
                        />
                    
                    : 
                    
                        <img src={logoMain} alt="PhoneCatalogue" />
                    
                    }
                             

            </div>
    
        </Fragment>
    )
}

Phones.propTypes = {
    obtenerPhonesAction: PropTypes.func.isRequired
}

export default Phones;