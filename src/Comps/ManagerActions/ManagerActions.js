import { useDispatch } from "react-redux"
import { getActionRefillPetrol,getActionRefillDisel,getActionRefillCNG } from "../../Redux/actions"

export default function ManagerActions() {

    const dispatcher = useDispatch()

    return (
        <div>

            <h1>Actions for Manager...</h1>

            <div class="btn-group" role="group" aria-label="Basic example">
                <button onClick={()=>{dispatcher(getActionRefillPetrol)}} type="button" class="btn btn-primary">Refill Petrol</button>
                <button onClick={()=>{dispatcher(getActionRefillDisel)}} type="button" class="btn btn-primary">Refill Disel</button>
                <button onClick={()=>{dispatcher(getActionRefillCNG)}} type="button" class="btn btn-primary">Refill CNG</button>
            </div>
        </div>
    )


}