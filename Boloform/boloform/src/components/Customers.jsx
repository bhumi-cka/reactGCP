import React from "react";
import CompanyNames from "../images/company-names-img.png";

function Customers() {
    return <div class="customers">
        <h1 class="customers-h1">Our Customers</h1>
        <div class="customer-names">
            <img class="customer-logos" src={CompanyNames} alt="company-logos"></img>
        </div>
    </div>
};

export default Customers;