import React, { useState } from "react";
import WrapButton from "./styled/WrapButton";
import Button from "./styled/Button";
import trash from "../media/trash.svg";
import edit from "../media/edit.svg";
import okay from "../media/okay-filled.svg";
import cancel from "../media/cancel-filled.svg";
import Input from "./styled/Input";
import Image from "./styled/Image";


export default function Bases() {

    const getSuffix = (event) => {
        let suffix = event.target.value;
    
        localStorage.setItem("suffix", suffix);
    };
    
    const open = (event) => {
        let input = document.getElementById("suffix-field");
    
        if(localStorage.getItem("suffix")){
            window.open(event.target.dataset.value + localStorage.getItem("suffix"), "_blank");
            localStorage.removeItem("suffix");
            input.value = "";
            setShow({
                active: false,
                title: ""
            })
        }
    };

    const removeTab = (event) => {
        let bases = JSON.parse(localStorage.getItem("items"));
        let newArr = [];
        for(let i = 0; i < bases.length; i++){
            if(bases[i].id != event.target.dataset.id) {
                newArr.push(bases[i])
            }
        }

        if(newArr.length > 0){
            localStorage.setItem("items", JSON.stringify(newArr));
            window.location.reload();
        } else {
            localStorage.removeItem("items");
            window.location.reload();
        }
    }

    const changeTab = (event) => {

    }

    const items = JSON.parse(localStorage.getItem("items"));

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
        <WrapButton id="data-buttons">
            {
                items.map( item => {
                    return (
                        <Button key={item.id}>
                            <p onClick={() => setShow({active: !show.active, title: item.title})}>
                                {item.title}
                            </p>

                            <div className="edit-remove" style={{display: show.active && item.title === show.title ? "flex" : "none"}}>
                                <Image src={trash} alt="remove" onClick={removeTab} data-id={item.id} />
                                <Image src={edit} alt="edit" onClick={changeTab} data-id={item.id}/>
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