import React from "react";
import respond from "../images/respond.png";

function Respond() {
    return <div class="get-started">
        <img class="box-img" src={respond} alt="box"></img>
        <div class="box-right respond-right">
            <div class="easy-to-use">
                <h4>BoloForms Dashboard</h4>
            </div>
            <h1>Swiftly Respond to Submissions</h1>
            <p>In the BoloForms Dashboard, approvers can view and respond to pending approvals, while form owners can monitor each step to ensure that no task is overlooked.</p>

        </div>
    </div>
};

export default Respond;