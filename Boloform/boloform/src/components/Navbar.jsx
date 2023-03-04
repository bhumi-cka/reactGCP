import React from "react";
import logo from "../images/logo.png"
import { BrowserRouter } from "react-router-dom";
import YoutubeEmbed from "./YoutubeEmbed";

function Navbar() {
    return <div>
    <div class="navbar">
        <div class="navbar-img-list">
            <img class="logo" src={logo} alt="logo"></img>
            <ul class="navbar-list">
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Guides</li>
                <li>Use Cases</li>
            </ul>
        </div>
        <div class="navbar-buttons">
            <button class="navbar-button-1">Sign In</button>
            <button class="navbar-button-2">BoloForms Premium</button>
        </div>
    </div>

    
    </div>
}

export default Navbar;