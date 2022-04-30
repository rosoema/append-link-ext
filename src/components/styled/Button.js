import styled from "styled-components";

export default styled.div`
    width: 90%;
    margin-left: 20px;
    margin-top: 15px;
    box-sizing: border-box;
    padding: 10px 20px;
    border: 1px solid #32E0C4;
    border-radius: 5px;
    box-shadow: 0 0 5px #32E0C460;
    transition: .3s;

    &:hover {
        background-color: #32E0C440;
        box-shadow: 0 0 5px #32E0C4;
    }
`