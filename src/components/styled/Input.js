import styled from "styled-components";

export default styled.input`
    margin-top: 15px;
    height: 30px;
    width: 94%;
    background: transparent;
    border: ${prop => prop.editBase ? "#F2FA5A solid" : "#32E0C4 solid"};
    border-width: 0 0 1px 0;
    &:focus {
        outline: none;
        border-width: 0 0 1px 0;
    }
    font-family: "Montserrat";
    color: #FFF;
    font-size: 14px;
    font-weight: 400;
`