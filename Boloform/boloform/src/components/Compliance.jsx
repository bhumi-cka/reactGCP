import React from "react";
import compliance from "../images/compliance.png";

function Compliance() {
    return <div class="compliance">
        <div class="compliance-left">
            <h1>Built with compliance and security.</h1>
            <p>Whether its SOC 2, HIPAA, GDPR, or ISO, BoloForms can work with your stack. Contact us at support@boloforms.com for more information.</p>
            <button class="compliance-button navbar-button-1">Read Docs</button>
        </div>
        <img src={compliance} alt="compliance"></img>
    </div>
};

export default Compliance;