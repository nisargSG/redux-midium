import { createStore, combineReducers } from "redux";

import managerPetrol from './reducer/petrolManager';
import managerDisel from './reducer/diselManager';
import managerCNG from './reducer/cngManager';



export default createStore(combineReducers({

    managerPetrol:managerPetrol,
    managerDisel:managerDisel,
    managerCNG:managerCNG

}))