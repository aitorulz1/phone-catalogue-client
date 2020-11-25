import React, { Fragment, useEffect } from 'react';
import './Catalog.css';
import Header from '../layouts/Header';
import PhoneDetail from '../main/PhoneDetail';


// Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions de Redux
import { obtenerPhonesAction } from '../../redux/actions/phonesActions';



const Phones = () => {


    const dispatch = useDispatch();

    useEffect( () => {

        // Consultar la API
        const cargarPhones = () => dispatch ( obtenerPhonesAction() );
        cargarPhones()
        }, [dispatch]);

        // Obtener el state
        
        const phones = useSelector( state => state );
        console.log(phones)
        


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

            </div>
    
        </Fragment>
    )
}

export default Phones;