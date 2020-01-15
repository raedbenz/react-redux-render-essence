export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    })
}

export const invalidAction = () => dispatch => {
    dispatch({
        type: 'INVALID_ACTION',
        payload: 'invalid_action'
    })
}

export const mehAction = () => dispatch => {
    dispatch({
        type: 'MEH_ACTION',
        payload: 'meh-action'
    })
}