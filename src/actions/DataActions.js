import {BASE_URL, ADD_FRIQ_IN_TYPE, REMOVE_FRIQ_IN_TYPE, SET_ALL_FRIQS} from '../constants/constants' 

export const addRow = (friq, type) => ({
    type: ADD_FRIQ_IN_TYPE,
    payload: {friq, type},
});

export const removeRow = (_id, type) => ({
    type: REMOVE_FRIQ_IN_TYPE,
    payload: {_id, type},
});

export const setData = (friqs) => ({
    type: SET_ALL_FRIQS,
    payload: friqs,
});

const makeRequest = async (url, method, params = {}) => {
	try {
        const responsePromise = await fetch(`${BASE_URL}${url}`, 
            method === 'GET'
                ? {method}
                : {
                    method,
                    body: JSON.stringify(params),
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
        );
        console.log(params)
        
       return responsePromise.json();
	} catch (error) {
		throw error;
	}
}

export const getDataRequest = () => async dispatch => {
    try {
        const result = await makeRequest('api/getData', 'GET');

        dispatch(setData(result));
    }
    catch(e) {
        throw new Error(e)
    }
}

export const removeDataRequest = (_id, type) => async dispatch => {
    try {
        await makeRequest('api/deleteData', 'POST', {id: _id});

        dispatch(removeRow(_id, type));
    }
    catch(e) {
        throw new Error(e)
    }
}

export const addDataRequest = (friq, type) => async dispatch => {
    try {
        await makeRequest('api/addData', 'POST', {data: friq.data, label: friq.label, type});

        dispatch(addRow(friq, type));
    }
    catch(e) {
        throw new Error(e)
    }
}