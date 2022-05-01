import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin: 0;
        cursor: pointer;
    }

    .edit-remove {
        position: relative;
        margin-left: 155px;
        margin-top: -18px;

        a{
            height: 16px;
        }

        img {
            width: 16px;
            margin-left: 5px;

            &:hover {
                cursor: pointer;
                filter: drop-shadow(0 0 4px #32E0C4);
            }
        }
    }

    .input-field {
        input {
            width: 97%;
        }

        .buttons-field {
            text-align: end;
            margin-top: 8px;

            img {
                margin-left: 7px;
                width: 20px;

                &:hover {
                    cursor: pointer;
                    filter: drop-shadow(0 0 4px #32E0C490);
                }
            }
        }
    }
`