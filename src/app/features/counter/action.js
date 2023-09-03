import * as counter from './constans'

export const increment = (value) => {
    return {
        type: counter.INC,
        value: value
    }
}
export const decrement = (value) => {
    return {
        type: counter.DEC,
        value: value
    }
}
export const decCheckingAction = (value) => {
    return (dispatch, getState) => {
        if (getState().counter.count > 0) {
            dispatch(decrement(value))
        }
    }
}