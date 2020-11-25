import {
    COMENZAR_DESCARGA_PHONES,
    DESCARGA_PHONES_EXITO,
    DESCARGA_PHONES_ERROR
} from '../types';

import phoneService from '../../service/PhoneService';

export function obtenerPhonesAction() {
    return async (dispatch) => {
        dispatch( obtenerPhones() );
    try {
        const respuesta = await phoneService.get('/phones');
        dispatch ( descargaPhonesExitosa(respuesta.data) )
    } catch (error) {
        dispatch ( descargaProductosError() )
    }
}
}

const obtenerPhones = () => ({
    type: COMENZAR_DESCARGA_PHONES,
    payload: true
})

const descargaPhonesExitosa = phones => ({
    type: DESCARGA_PHONES_EXITO,
    payload: phones
})

const descargaProductosError = () => ({
    type: DESCARGA_PHONES_ERROR
})