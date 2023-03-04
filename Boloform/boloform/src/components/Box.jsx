import React from "react";
import Logo2 from "../images/logo-2.png";
import BoxGetStarted from "../images/box-get-started.png";

function Box() {
    return <div class="get-started">
        <img class="box-img" src={BoxGetStarted} alt="box"></img>
        <div class="box-right">
            <div class="easy-to-use">
                <h4>Easy-to-Use Builder</h4>
            </div>
            <h1>Get Started in Minutes</h1>
            <p>Design Your Ideal Approval Flow with No Coding Required. With BoloForms's Easy-To-Use interface, You Can Quickly Add Approvers, Emails, and Conditional Statements to Your Approval Process.</p>
            <button class="box-button navbar-button-1">Watch Video</button>
            <button class="box-button navbar-button-2">Try for Free</button>
        </div>
    </div>
};

export default Box;