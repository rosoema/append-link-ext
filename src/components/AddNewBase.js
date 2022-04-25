import React from "react";
import Wrap from "./styled/Wrap";
import Image from "./styled/Image";
import { Link } from "react-router-dom";
import Cancel from "../media/cancel-button.svg";
import Okay from "../media/okay-button.svg";
import Input from "./styled/Input";
import addData from "./AddData";

export default function AddNewBase() {
    return (
        <Wrap newBase>
            <Input type="text" placeholder="Enter title" className="input-title"/>
            <Input type="text" placeholder="Enter base link" className="input-base-link"/>
            <Wrap newBaseButtons>
                <Link to="/" style={{margin: "0 5px 0 0"}}><Image src={Cancel} alt="cancel-button"></Image></Link>
                <Link to="/" onClick={() => addData}><Image src={Okay} alt="okay-button"/></Link>
            </Wrap>
        </Wrap>
    )
}