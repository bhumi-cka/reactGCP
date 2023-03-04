import React from "react";
import notify from "../images/notify.png";

function Notify() {
    return <div class="transform notify">
        
        <div class="notify-left transform-left box-right">
            <div class="easy-to-use">
                <h4>BoloForms Dashboard</h4>
            </div>

            <h1>Notify Users through Email</h1>
            <p>Automatically send approvers email notifications for each new task assigned to them. Form respondents will receive customized emails notifying them if their requests are approved.</p>

            <button class="transform-button box-button navbar-button-2">Try for Free</button>

        </div>

        <img class="notify-img" src={notify} alt="notify"></img>
    </div>
};

export default Notify;