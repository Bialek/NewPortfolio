import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
display: flex;
`

export const Nav = styled.div`
    width: 20%;
    height: 100vh;
    z-index: 2;
    font-size: .9em;
    color: #fff;
    background-color: rgba(26, 82, 118, 0.7);
`

export const NavList = styled.ul`
    list-style: none;
`

export const NavItem = styled.li`
    text-decoration: none;
`

export const NavLink = styled(Link)`
    text-decoration: none;
`

export const MainPage = styled.div`
    width: 100%;
`