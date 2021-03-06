import Wrap from "./styled/Wrap";
import Input from "./styled/Input";
import Image from "./styled/Image";
import { Link } from "react-router-dom";
import Cancel from "../media/cancel-button.svg";
import Okay from "../media/okay-edit.svg";
import { Fragment } from "react";
let valid = require("valid-url");

const getInputValue = (event) => {
    let userValue = event.target.value;

    if(event.target == document.getElementById("newtitle")){
        localStorage.setItem("newtitle", userValue)
    } else {
        localStorage.setItem("newbase", userValue);
    }
};

const Delete = () => {
    localStorage.removeItem("newtitle");
    localStorage.removeItem("newbase");
    localStorage.removeItem("id");
}

const newValues = () => {
    let items = JSON.parse(localStorage.getItem("items"));
    let newArr = [];

    if(localStorage.getItem("newtitle") !== "" 
        && localStorage.getItem("newtitle") !== " " 
        && valid.isWebUri(localStorage.getItem("newbase"))){
        for(let i = 0; i < items.length; i++){
            if(items[i].id != localStorage.getItem("id")){
                newArr.push(items[i]);
            } else {
                newArr.push({
                    title: localStorage.getItem("newtitle"),
                    base: localStorage.getItem("newbase"),
                    id: items[i].id
                });
            }
        }

        localStorage.setItem("items", JSON.stringify(newArr));
        Delete();
    } else {
        alert("Inputs invalid.\n\nExample title: New Title \nExample base: http://example.com OR https://example.com");
        Delete();
    }

}

export default function EditBase(){

    document.addEventListener("keypress", (event) => {
        if(event.key === "Enter"){
            document.getElementById("edit-data").click();
        }
    })

    return (
        <Fragment>
            <p id="edit-title">{localStorage.getItem("newtitle")}</p>
            <Wrap newBase editBase>
                <Input type="text" editBase placeholder={localStorage.getItem("newtitle")} id="newtitle" onChange={getInputValue}/>
                <Input type="text" editBase placeholder={localStorage.getItem("newbase")} id="newbase" onChange={getInputValue}/>
                <Wrap newBaseButtons>
                    <Link to="/" style={{margin: "0 5px 0 0"}} onClick={Delete}><Image src={Cancel} alt="cancel-button" ></Image></Link>
                    <Link to="/" id="edit-data" onClick={newValues} ><Image src={Okay} alt="okay-button"/></Link>
                </Wrap>
            </Wrap>
        </Fragment>
    )
};