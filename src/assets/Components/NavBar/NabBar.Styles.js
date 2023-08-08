import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 65px;
    padding: 10px;
    width: 99vw;
    background: linear-gradient( 180deg, var(--AzulClaro) 0%, var(--CelesteClaro) 100% );
    color: var(--bgprimario);
    box-shadow: 0px 3px 12px 0px #0099f666;
    -webkit-box-shadow: 0px 3px 12px 0px #0099f666;
    border-bottom: solid 1px var(--AzulClaro);
    transition: 0.7s;
    z-index: 15;

`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const LogoImg = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0;
    font-size: 32px;
    color: var(--Blanco);
    font-family: "Quicksand", sans-serif;

    & img {	
        height: 40px;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: "Roboto Condensed", sans-serif;
        overflow-clip-margin: content-box;
        overflow: clip;
        padding: 0;
    }  

    & span {
        color: var(--AzulOscuro);
        font-weight: 700;
    }
`

export const LinksContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    `

export const NavLinksLiStyled = styled.li`
    position: relative;
    padding: 0;
    
    & a {
        color: var(--Blanco);
        font-size: 30px;
        font-family: "Roboto Condensed", sans-serif;
        cursor: pointer;
    }

    & a::after {
        content: "";
        height: 3px;
        width: 100%;
        background: var(--VerdeAgua);
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease;
    }

    & a:hover {
        text-shadow: var(--AzulClaro) 3px 2px;
        background-color: var(--CelesteClaro);
        border-radius: 10px;
        box-shadow: 0px 3px 12px 0px var(--CelesteClaro);
        -webkit-box-shadow: 0px 0px 15px 12px var(--CelesteClaro);
        transition: all 0.5s ease;
    }

    & a:hover::after {
        transform-origin: bottom left;
        transform: scaleX(1);
    }
`

export const NavLinkStyled = styled.a`
    color: var(--Blanco);
    font-size: 30px;
    font-family: "Roboto Condensed", sans-serif;
    cursor: pointer;

    &::after {
        content: "";
        height: 3px;
        width: 100%;
        background: var(--VerdeAgua);
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease;
    }

    &:hover {
        text-shadow: var(--AzulClaro) 3px 2px;
        background-color: var(--CelesteClaro);
        border-radius: 10px;
        box-shadow: 0px 3px 12px 0px var(--CelesteClaro);
        -webkit-box-shadow: 0px 0px 15px 12px var(--CelesteClaro);
        transition: all 0.5s ease;
    }

    &:hover::after {
        transform-origin: bottom left;
        transform: scaleX(1);
    }
`
export const NavMenuStyled = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--Blanco);
    font-size: 40px;
    cursor: pointer;
    padding: 5px;
    border-radius: 20px;

    &:hover {
        transition: all ease 0.3s;
        text-shadow: var(--GrisClaro) 2px 2px;
        color: var(--CelesteClaro);
        background: linear-gradient(
    180deg,
    var(--Blanco) 0%,
    var(--GrisClaro) 50%,
    var(--Blanco) 100%
    );
        font-weight: 600;
    }
`

export const NavCartStyled = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(215deg, var(--CelesteClaro) 0%, var(--Azul) 50%);
    color: var(--Blanco);
    font-size: 40px;
    border-radius: 20px;
    cursor: pointer;
    padding: 5px;
    margin-right: 20px;

    &:hover {
        background: linear-gradient(
    180deg,
    var(--Blanco) 0%,
    var(--GrisClaro) 50%,
    var(--Blanco) 100%
    );
    transition: all ease 0.3s;
    color: var(--CelesteClaro);
    font-weight: 600;
    }
`


