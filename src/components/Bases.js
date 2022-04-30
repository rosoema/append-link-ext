import React, { useState } from "react";
import WrapButton from "./styled/WrapButton";
import Button from "./styled/Button";

export default function Bases() {

    const items = JSON.parse(localStorage.getItem("items"))

    const show = useState(false);

    return (
        <WrapButton>
            {
                items.map( item => {
                    return (
                        <Button key={item.title}>
                            {item.title}
                        </Button>
                    )
                })
            }
        </WrapButton>
    )
}