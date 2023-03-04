import React from "react";
import track from "../images/track.png";

function Track() {
    return <div class="track-top">
    <h1 class="track-h">Track & Manage Approval Flows</h1>
    <p class="track-p">Keep track of every step in your approval process from any device via email, BoloForms Dashboard or Google Sheets.</p>
    
    <div class="get-started">

    <img class="box-img" src={track} alt="box"></img>
    <div class="box-right">
        <div class="easy-to-use">
            <h4>Email Notifications</h4>
        </div>
        <h1 class="track-h1">Track, Manage & Organize Approval Flows</h1>
        <p>Effortlessly monitor every stage of your approval process from any device through email, the BoloForms Dashboard, or Google Sheets.</p>
        <button class="box-button navbar-button-1">Watch Video</button>
        <button class="box-button navbar-button-2">Try for Free</button>
    </div>
</div>
</div>
};

export default Track;