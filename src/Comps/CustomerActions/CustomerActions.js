import { getActionBuyPetrol,getActionReBuyDisel,getActionReBuyCNG } from "../../Redux/actions"
import { useDispatch } from "react-redux"

export default function CustomerActions() {

    const dispatcher = useDispatch()

    return (
        <div>

            <h1>Actions for Customer...</h1>

            <div class="btn-group" role="group" aria-label="Basic example">
                <button onClick={()=>{dispatcher(getActionBuyPetrol)}} type="button" class="btn btn-primary">Buy Petrol</button>
                <button onClick={()=>{dispatcher(getActionReBuyDisel)}} type="button" class="btn btn-primary">Buy Disel</button>
                <button onClick={()=>{dispatcher(getActionReBuyCNG)}} type="button" class="btn btn-primary">Buy CNG</button>
            </div>
        </div>
    )


}