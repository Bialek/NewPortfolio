import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
    display: flex;
    position: relative;
`

export const PageBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const Nav = styled.div`
    width: 25%;
    height: 100vh;
    z-index: 2;
    font-size: .9em;
    color: #fff;
    background-color: rgba(26, 82, 118, 0.7);
    padding: 10px;
    display: flex;
    flex-direction: column;
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
    text-decoration: none;
    color: #fff;
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

export const MainContent = styled.div`
    width: 100%;
`
