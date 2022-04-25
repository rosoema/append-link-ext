import React from "react";
import Wrap from "./styled/Wrap";
import Image from "./styled/Image";
import { Link } from "react-router-dom";
import Cancel from "../media/cancel-button.svg";
import Okay from "../media/okay-button.svg";
import Input from "./styled/Input";
import addData from "./AddData";

const getInputValue = (event) => {
    let userValue = event.target.value;

    if(event.target.classList.contains("input-title")){
        localStorage.setItem("title", userValue)
    } else {
        localStorage.setItem("base", userValue);
    }
}

export default function AddNewBase() {
    return (
        <Wrap newBase>
            <Input type="text" placeholder="Enter title" className="input-title" onChange={getInputValue} required/>
            <Input type="text" placeholder="Enter base link" className="input-base-link" onChange={getInputValue} required/>
            <Wrap newBaseButtons>
                <Link to="/" style={{margin: "0 5px 0 0"}}><Image src={Cancel} alt="cancel-button"></Image></Link>
                <Link to="/" onClick={addData}><Image src={Okay} alt="okay-button"/></Link>
            </Wrap>
        </Wrap>
    )
}