import groupBy from 'lodash/groupBy';
import mapValues from 'lodash/mapValues';

const initialState = {
    friqData: {
        modal: [],
        static: [],
        noneStatic: [],
        spectral: [],
    }
};

export default function mainReducer(state = initialState, action) {
    switch(action.type) {
        case 'FRIQ_GET_DATA':
            return state;
        case 'REMOVE_FRIQ_IN_TYPE':
            return ({
                ...state, 
                friqData: {
                    ...state.friqData,
                    [action.payload.type]: state.friqData[action.payload.type].filter(item => item._id !== action.payload._id),
                }
            })
        case 'ADD_FRIQ_IN_TYPE':
            return ({
                ...state, 
                friqData: {
                    ...state.friqData,
                    [action.payload.type]: [...state.friqData[action.payload.type], action.payload.friq],
                }
            })
        case 'SET_ALL_FRIQS': {
            const groupedData = groupBy(action.payload, 'type')

            return ({
                ...state, 
                friqData: mapValues(state.friqData, (item, key, obj) => {
                    if (groupedData[key]) {
                        return groupedData[key].map((elem, id) => ({...elem, id}))
                    }

                    return item;
                }),
            })
        }

            return ({
                ...state, 
                friqData: {
                    ...state.friqData,

                }
            })

        default:
        return state;
    }
}