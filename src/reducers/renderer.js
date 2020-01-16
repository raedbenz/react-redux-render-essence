import * as actionTypes from '../actions/actionTypes';

const initialState = {
    message: null,
    count: 0,
    extra: 0
}

const rendererReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.RESET_COUNTER:
                console.log('Selectors will be called, and connected component is intrested in this part of the state.meh, then will re-render!');
                return {
                    ...state,
                    message: action.message,
                    count: 0
                }
            case actionTypes.INCREMENT_COUNTER:
                console.log('Selectors will be called, and connected component is intrested in this part of the state.meh, then will re-render!');
                var incremented = state.count + 1;
                return {
                    ...state,
                    count: incremented,
                    message: action.message
                }
            case actionTypes.EXTRA_COUNTER:
                console.log('Selectors will be called, but if connected component is not intrested in this part of the state.meh, then no re-render!');
                return {
                    ...state,
                    message: action.message,
                    extra: state.extra + 1
                }
            default:
                console.log('Selectors will not be called hence no re-render!');
                return state;
        }
    }

export default rendererReducer;

//Selectors
export function selectReducerCount(state) {
    console.log('selectReducerCount selector: ' + state.renderer.count);
    return state.renderer.count;
}

export function selectMessage(state) {
    console.log('selectMessage selector: ' + state.renderer.message);
    return state.renderer.message;
}

export function selectExtra(state) {
    console.log('selectExtra selector: ' + state.renderer.extra);
    return state.renderer.extra;
}