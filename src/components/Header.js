import React from "react";
import icon from "../media/icon.svg";
import Wrap from "./styled/Wrap";
import Heading from "./styled/Heading";
import Image from "./styled/Image";

export default function Header() {
    return (
        <Wrap>
            <Image src={icon} alt="link-appender-logo" icon/>
            <Heading>Link Appender</Heading>
        </Wrap>
    )
}