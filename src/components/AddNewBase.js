import React from "react";
import Wrap from "./styled/Wrap";
import Image from "./styled/Image";
import { Link } from "react-router-dom";
import Cancel from "../media/cancel-button.svg";
import Okay from "../media/okay-button.svg";
import Input from "./styled/Input";
import addData from "./AddData";
import Delete from "./Delete";

const getInputValue = (event) => {
    let userValue = event.target.value;

    if(event.target.classList.contains("input-title")){
        localStorage.setItem("title", userValue)
    } else {
        localStorage.setItem("base", userValue);
    }
}

export default function AddNewBase() {

    window.addEventListener("keypress", (event) => {
        if(event.key === "Enter"){
            document.getElementById("add-data-btn").click();
        }
    });

    return (
        <Wrap newBase>
            <Input type="text" placeholder="Enter title" className="input-title" onChange={getInputValue} required/>
            <Input type="text" placeholder="Enter base link" className="input-base-link" onChange={getInputValue} required/>
            <Wrap newBaseButtons>
                <Link to="/" style={{margin: "0 5px 0 0"}} onClick={Delete}><Image src={Cancel} alt="cancel-button" ></Image></Link>
                <Link to="/" onClick={addData} id="add-data-btn"><Image src={Okay} alt="okay-button"/></Link>
            </Wrap>
        </Wrap>
    )
}