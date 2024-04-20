import { REFILL_CNG, BUY_CNG } from '../actions'

export default (state={cng:1000}, action) => {
    switch (action.type) {

        case REFILL_CNG:
            return { cng: state.cng + 1000 }

        case BUY_CNG:
            return { cng: state.cng - 1 }

        default:
           return state
    }

}