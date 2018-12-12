import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavWrapper = styled.div`
    width: 350px;
    height: 100vh;
    z-index: 2;
    font-size: .9em;
    color: #fff;
    background-color: rgba(26, 82, 118, 0.7);
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.75);
`
export const NavControl = styled.div`
    width: 30px;
    height: 30px;
    position: relative;
    transition: .1s;
    margin: 10px 10px;
    cursor: pointer;
    display: inline-block;
    span {
        width: 5px;
        height: 5px;
        background-color: #fff;
        display: block;
        border-radius: 50%;
    }
    &:hover span {
        transform: scale(1.3);
        transition: 350ms cubic-bezier(.8, .5, .2, 1.4);
        box-shadow: 0px 2px 3px rgba(0,0,0,.4); 
    }
    span:nth-child(1) {
        position: absolute;
        left: 0;
        top: 0;
    }
    span:nth-child(2) {
        position: absolute;
        left: 12px;
        top: 0;

    }
    span:nth-child(3) {
        position: absolute;
        right: 0;
        top: 0;
    }
    span:nth-child(4) {
        position: absolute;
        left: 0;
        top: 12px;
    }
    span:nth-child(5) {
        position: absolute;
        left: 12px;
        top: 12px;
    }
    span:nth-child(6) {
        position: absolute;
        right: 0px;
        top: 12px;
    }
    span:nth-child(7) {
        position: absolute;
        left: 0px;
        bottom: 0px;
    }
    span:nth-child(8) {
        position: absolute;
        left: 12px;
        bottom: 0px;
    }
    span:nth-child(9) {
        position: absolute;
        right: 0px;
        bottom: 0px;
    }
`

export const NavList = styled.ul`
    list-style: none;
`

export const NavItem = styled.li`
    text-decoration: none;
    text-align: center;
    margin-bottom: 15px;
`

export const NavLink = styled(Link)`
    font-size: 1.5em;
    text-decoration: none;
    color: #fff;
    background-image: linear-gradient(to bottom, #fff 0%, #fff 100%);
    background-repeat: no-repeat;
    background-size: 0 2px;
    background-position: 0 100%;
    padding-bottom: 10px;
    transition: all ease-in-out .3s;
    display: flex;
    width: 80%;
    margin: 0 auto;
    &:hover {
        background-size: 100% 2px;
    }
`

export const NavLogo = styled.div`
    display: flex;
    flex-direction: column;   
    margin-bottom: 15px;  
`

export const NavImg = styled.img`
    width: 183px;
    height: 183px;
    border-radius: 50%;
    object-position: top;
    object-fit: cover;
    margin: 0 auto 10px;
`

export const NavContact = styled.div`
    display: flex;
    justify-content: space-around;
`

export const NavIcon = styled.a`
    color:  rgb(26, 82, 118);
    width: 40px;
    height: 40px;
    display: flex;
    background-color: #fff;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    transition: all ease-in-out .3s;
    border: none;
    &:hover {
        color: #fff;
        background-color: rgb(26, 82, 118);
    }
`