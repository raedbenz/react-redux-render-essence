
export const oneOffRenderingAction = () => {
    return {
        type: 'ONE_OFF_RENDERING_ACTION',
        message: 'one-off-rendering-action'
    }
}

export const continuousRenderingAction = () => {
    return {
        type: 'CONT_RENDERING_ACTION',
        message: 'continuous-rendering-action'
    }
}

export const unknownAction = () => {
    return {
        type: 'UNKNOWN_ACTION',
        message: 'no-store-change-hence-non-rendering-action' //will not be used
    }
}

export const nonRenderingAction = () => {
    return {
        type: 'NONRENDERING_ACTION',
        message: 'non-rendering-action'
    }
}