import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: ${prop => prop.newBase ? "column" : "null"};
    justify-content: ${prop => prop.notmain ? "right" : "null"};
    align-items: ${prop => prop.newBase ? "end" : "center"};
    margin: ${prop => prop.newBaseButtons ? "15px 0 0 0" : "0"};
    padding: ${prop => prop.newBaseButtons ? "null" : "10px"};
    border: ${prop => prop.editBase ? "1px solid #DFFCB5" : null};
    border-radius: ${prop => prop.editBase ? "5px" : null};;
    margin-top: ${prop => prop.editBase ? "30px" : null};;
    background-color: ${prop => prop.editBase ? "#DFFCB530" : null};
    box-shadow: ${prop => prop.editBase ? "0 0 5px #DFFCB580" : null};
`