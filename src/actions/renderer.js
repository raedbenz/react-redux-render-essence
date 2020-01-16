import * as actionTypes from './actionTypes';

export const resetCounterAction = () => {
    return {
        type: actionTypes.RESET_COUNTER,
        message: 'one-off-rendering-action'
    }
}

export const incrementCounterAction = () => {
    return {
        type: actionTypes.INCREMENT_COUNTER,
        message: 'continuous-rendering-action'
    }
}

export const unknownAction = () => {
    return {
        type: actionTypes.UNKNOWN,
        message: 'no-store-change-hence-non-rendering-action' //will not be used
    }
}

export const extraCounterAction = () => {
    return {
        type: actionTypes.EXTRA_COUNTER,
        message: 'unmapped-store-prop-hence-non-rendering-action'
    }
}