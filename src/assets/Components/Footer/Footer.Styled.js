import styled from 'styled-components';

export const FooterContainer = styled.footer`
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    border-top: solid 1px var(--AzulOscuro);
    background: linear-gradient(
        180deg,
        rgba(4, 63, 110, 1) 0%,
        rgba(7, 18, 43, 1) 100%
    );
    color: var(--bgprimario);
    font-size: 20px;
    height: 70px;
    max-width: 1200px

    & b {
        color: var(--Gris2);
    text-shadow: #02050e 1px 1px;
    font-family: "Quicksand", sans-serif;
    }

    & b span {
        color: var(--Celeste);
    }
`