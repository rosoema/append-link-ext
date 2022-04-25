import styled from "styled-components";

export default styled.img`
    margin: ${prop => prop.navigation ? "0 0 0 10px" : "0"};
    transition: 0.3s;
    &:hover {
        transform: ${prop => prop.icon ? "null" : "scale(1.1)"};
        cursor: pointer;
    }
`