import React, { useState } from "react";
import WrapButton from "./styled/WrapButton";
import Button from "./styled/Button";

export default function Bases() {

    const items = JSON.parse(localStorage.getItem("items"))

    const [show, setShow] = useState({
        active: false,
        title: ""
    });

    return (
        <WrapButton>
            {
                items.map( item => {
                    return (
                        <Button key={item.title} onClick={() => setShow({active: !show.active, title: item.title})}>
                            {item.title}

                            {
                                show.active && item.title === show.title ?
                                <p>Boo!</p>
                                : null
                            }
                        </Button>
                    )
                })
            }
        </WrapButton>
    )
}