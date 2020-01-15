
const initialState = {
    message: null,
    count: 0,
    extra: false
}

const rendererReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case 'ONE_OFF_RENDERING_ACTION':
                console.log('Selectors will be called, and connected component is intrested in this part of the state.meh, then will re-render!');
                return {
                    ...state,
                    message: action.message
                }
            case 'CONT_RENDERING_ACTION':
                console.log('Selectors will be called, and connected component is intrested in this part of the state.meh, then will re-render!');
                var incremented = state.count + 1;
                return {
                    ...state,
                    count: incremented,
                    message: action.message
                }
            case 'NONRENDERING_ACTION':
                console.log('Selectors will be called, but if connected component is not intrested in this part of the state.meh, then no re-render!');
                return {
                    ...state,
                    message: action.message
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
    console.log('selectExtraProperty selector: ' + state.renderer.extra);
    return state.renderer.extra;
}