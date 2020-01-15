
const initialState = {
    payload: null,
    meh: null
}

const rendererReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case 'SIMPLE_ACTION':
                console.log('Selectors will be called, and connected is intrested in this part of the state.meh, then will re-render!');
                return {
                    ...state,
                    payload: action.payload
                }
            case 'MEH_ACTION':
                console.log('Selectors will be called, but if connected component is not intrested in this part of the state.meh, then no re-render!');
                return {
                    ...state,
                    meh: action.payload
                }
            default:
                console.log('Selectors will not be called hence no re-render!');
                return state;
        }
    }

export default rendererReducer;

export function selectPayload(state) {
    console.log('selectPayload:' + state.simpleReducer.payload);
    return state.renderer.payload;
}

export function selectMeh(state) {
    console.log('selectMeh:' + state.simpleReducer.meh)
    return state.renderer.meh;
}