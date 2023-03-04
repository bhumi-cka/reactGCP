import React from "react";
import stars from "../images/5-stars.png";
import support1 from "../images/support 1.png";
import support2 from "../images/support 2.png";
import support3 from "../images/support 3.png";
import support4 from "../images/support 4.png";

function Card(props) {
    return <div class="card">
        <img class="card-img" src={props.src}></img>
        <h2>{props.h}</h2>
        <p>{props.p}</p>
        <br></br>
        <br></br>
        <button class="card-button navbar-button-1">{props.button}</button>
        
    </div>
}

function Award() {
    return <div class="award">
        <img src={stars} alt="5-stars"></img>
        <h1>Award-winning support.</h1>
        <p>Best-in-class support. We're always here to help - here's how to connect.</p>

        <div class="cards-flex">
            <Card number="1"
                h="? Whatsapp chat"
                src={support1}
                p="Ask a question right now."
                button="Start a chat"
            />

            <Card number="2"
                h="? Email"
                src={support2}
                p="Get in touch by email."
                button="Send an email"
            />

            <Card number="3"
                h="? Help center"
                src={support3}
                p="In Depth Guides."
                button="Read guides"
            />

            <Card number="4"
                h="? Google Meet"
                src={support4}
                p="Guided support and Q&A."
                button="Book a time"
            />

        </div>


    </div>
};

export default Award;