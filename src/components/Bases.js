import React, { useState } from "react";
import WrapButton from "./styled/WrapButton";
import Button from "./styled/Button";
import trash from "../media/trash.svg";
import edit from "../media/edit.svg";
import okay from "../media/okay-filled.svg";
import cancel from "../media/cancel-filled.svg";
import Input from "./styled/Input";
import Image from "./styled/Image";

const getSuffix = (event) => {
    let suffix = event.target.value;

    localStorage.setItem("suffix", suffix);
}

const open = (event) => {
    let input = document.getElementById("suffix-field");

    if(localStorage.getItem("suffix")){
        window.open(event.target.dataset.value + localStorage.getItem("suffix"), "_blank");
        localStorage.removeItem("suffix");
        input.value = "";
    }
}


export default function Bases() {

    const items = JSON.parse(localStorage.getItem("items"))

    const [show, setShow] = useState({
        active: false,
        title: ""
    });

    window.addEventListener("keypress", (event) => {
        if(event.key === "Enter" && show.active){
            document.getElementById("open-btn").click();
        }
    });

    return (
        <WrapButton>
            {
                items.map( item => {
                    return (
                        <Button key={item.title}>
                            <p onClick={() => setShow({active: !show.active, title: item.title})}>
                                {item.title}
                            </p>

                            <div className="edit-remove" style={{display: show.active && item.title === show.title ? "flex" : "none"}}>
                                <Image src={trash} alt="remove"/>
                                <Image src={edit} alt="edit"/>
                            </div>

                            {
                                show.active && item.title === show.title ?
                                <div className="input-field">
                                    <Input type="text" placeholder="Enter link suffix" onChange={getSuffix}  required id="suffix-field"/>
                                    <div className="buttons-field">
                                        <Image src={cancel} onClick={() => setShow({active: false, title: ""})} alt="cancel"/>
                                        <Image src={okay} alt="confirm" onClick={open} data-value={item.base} id="open-btn"/>
                                    </div>
                                </div>
                                : null
                            }
                        </Button>
                    )
                })
            }
        </WrapButton>
    )
}