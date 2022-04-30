import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: ${prop => prop.newBase ? "column" : "null"};
    justify-content: ${prop => prop.notmain ? "right" : "null"};
    align-items: ${prop => prop.newBase ? "end" : "center"};
    margin: 0;
    padding: ${prop => prop.newBaseButtons ? "null" : "10px"};
`