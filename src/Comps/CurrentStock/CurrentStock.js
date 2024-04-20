import { useState } from "react";
import { useSelector } from "react-redux";

export default function CurrentStock() {


    const petrol = useSelector(state => state.managerPetrol.petrol)
    const disel = useSelector(state => state.managerDisel.disel)
    const cng = useSelector(state => state.managerCNG.cng)

    


    return (
        <div className="col-md-4">
            <h1>Current Stock</h1>
            <ul className="list-group ">
                <li className="list-group-item">Petrol : {petrol}</li>
                <li className="list-group-item">Disel : {disel}</li>
                <li className="list-group-item">CNG : {cng}</li>

            </ul>

        </div>


    )

}