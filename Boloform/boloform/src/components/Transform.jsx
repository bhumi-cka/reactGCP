import React from "react";
import Approvals from "../images/approvals.png";

function Transform() {
    return <div class="transform">
        
        <div class="transform-left box-right">
            <div class="easy-to-use">
                <h4>Online Forms</h4>
            </div>

            <h1>Transform Forms into Workflows</h1>
            <p>Craft a Form from Scratch or Personalise a Free Template with Our Form Builder — and Convert Form Submissions into Automated Workflows Instantly.</p>

            <ul class="numbered-items">
                <li><p>Create your ideal online form for your website or internal use and begin collecting responses.</p></li>
                
                <li><p>Create an approval flow for submissions that you can easily track and manage from any device.</p></li>
           
            </ul>

            <button class="transform-button box-button navbar-button-2">See Features</button>

        </div>

        <img class="transform-img box-img" src={Approvals} alt="approvals"></img>
    </div>
};

export default Transform;