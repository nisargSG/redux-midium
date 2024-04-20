import { REFILL_DISEL, BUY_DISEL } from '../actions'

export default (state={disel:1000}, action) => {
    switch (action.type) {

        case REFILL_DISEL:
            return { ...state,disel: state.disel + 1000 }

        case BUY_DISEL:
            return { ...state,disel: state.disel - 1 }

        default:
            return state
    }

}