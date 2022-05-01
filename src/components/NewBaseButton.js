import React, { Fragment } from "react";
import Wrap from "./styled/Wrap";
import Image from "./styled/Image";
import image from "../media/add-button.svg";
import { Link } from "react-router-dom";
import Text from "./styled/Text";
import Bases from "./Bases";

export default function NewBaseButton() {
    return (
        <Fragment>
            {
                localStorage.getItem("items") !== null ?
                <Bases/>
                : null
            }
            <Wrap notmain>
                <Text>Add new base link</Text>
                <Link to="/new-base-link"><Image src={image} alt="add-button" navigation/></Link>
            </Wrap>
        </Fragment>
    )
}