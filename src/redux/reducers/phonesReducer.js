import {
    COMENZAR_DESCARGA_PHONES,
    DESCARGA_PHONES_EXITO,
    DESCARGA_PHONES_ERROR
} from '../types';


const initialState = {
    phones: [],
    error: null,
    loading: false
}



export default function(state = initialState, action) {
    switch(action.type) {
        
        case COMENZAR_DESCARGA_PHONES:
            return {
                ...state,
                loading: true
            }

        case DESCARGA_PHONES_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                phones: action.payload
            }

        case DESCARGA_PHONES_ERROR:
            return {
                ...state,
                error: true
            }

            default:
                return state;
    }
}