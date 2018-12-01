import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.div`
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
    padding-bottom: 5px;
    transition: all ease-in-out .3s;
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

export const NavHeader = styled.h1`
    margin-bottom: 10px;
    text-align: center;
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