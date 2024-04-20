import { useState } from "react";
import CurrentStock from "../CurrentStock/CurrentStock";
import CustomerActions from "../CustomerActions/CustomerActions";
import ManagerActions from "../ManagerActions/ManagerActions";

export default function App() {


    const [currentActionMenu,setCurrentActionMenu]=useState(0)

    return (

        <div className="container mt-2">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome To Our Gas Station</h1>
                    <div className="row">
                        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                        <CurrentStock />
                    </div>

                    <button onClick={()=>{setCurrentActionMenu(1)}} className="btn btn-primary btn-lg" type="button">Open Customer's Actions</button>
                    <button onClick={()=>{setCurrentActionMenu(2)}} className="btn btn-primary btn-lg ms-4" type="button">Open Admin's Actions</button>
                </div>

                {currentActionMenu==1 && <CustomerActions />}
                {currentActionMenu==2 && <ManagerActions />}


            </div>



        </div>

    )


}