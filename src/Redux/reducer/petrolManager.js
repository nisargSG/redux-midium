import { REFILL_PETROL, BUY_PETROL } from '../actions'

export default (state={petrol:1000}, action) => {
    switch (action.type) {

        case REFILL_PETROL:
            return { ...state,petrol: state.petrol + 1000 }

        case BUY_PETROL:
            return { ...state,petrol: state.petrol -1 }

        default:
           return state
    }

}