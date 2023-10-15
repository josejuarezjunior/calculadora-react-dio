import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #aba9ff;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 75px;
        background-color: #000000;
        border: 5px solid #cdcdcd;
        display: flex;
        flex-direction: column;
        text-align: right;
        padding: 0 10px;
        font-size: 2em;
        font-weight: 700;
        color: #5f5;
    }
`