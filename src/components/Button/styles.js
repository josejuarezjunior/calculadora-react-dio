import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 5px solid #cdcdcd;
    background-color: #000;
    color: #55f;
    font-size: 2em;
    font-weight: 700;
    flex: 1;

    /* & faz referência ao próprio componente! */
    &:hover {
        opacity: 0.6;
    }
`