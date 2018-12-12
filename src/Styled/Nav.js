import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavWrapper = styled.div`
    min-width: ${props => props.open ? '320px' : '55px'};
    height: 100vh;
    z-index: 2;
    font-size: .9em;
    color: #fff;
    background-color: rgba(26, 82, 118, 0.7);
    padding: ${props => props.open ? '10px' : '0'};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.75);
    transition: all ease-in-out .3s; 
`
export const NavControl = styled.div`
    align-self: flex-end;
    width: 30px;
    height: 30px;
    position: relative;
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: ${props => props.open ? '.2s ease-in-out' : '.1s'} ;
    span {
        width: 5px;
        height: 5px;
        background-color: #fff;
        display: block;
        border-radius: 50%;
        transform: ${props => props.open ? 'rotate(0deg)' : 'rotate(180deg)'};
        transition: .5s ease-in-out;
    }
    span:nth-child(1) {
        position: absolute;
        left: 0;
        top: 0;
    }
    span:nth-child(2) {
        position: absolute;
        left: ${props => props.open ? '6px' : '12px'};
        top: ${props => props.open ? '6px' : '0'};
    }
    span:nth-child(3) {
        position: absolute;
        right: 0;
        top: 0;
    }
    span:nth-child(4) {
        position: absolute;
        left: ${props => props.open ? '6px' : '0'};
        top: ${props => props.open ? '18px' : '12px'};
    }
    span:nth-child(5) {
        position: absolute;
        left: 12px;
        top: 12px;
    }
    span:nth-child(6) {
        position: absolute;
        right: ${props => props.open ? '6px' : '0'};
        top: ${props => props.open ? '6px' : '12px'};
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
        left: ${props => props.open ? '18px' : '12px'};
        bottom: ${props => props.open ? '6px' : '0'};
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
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    display: ${props => props.open === false ? 'none' : 'flex'};
    &:hover {
        background-size: 100% 2px;
    }
`

export const NavLogo = styled.div`
    display: flex;
    flex-direction: column;   
    margin-bottom: 15px;
    transform: ${props => props.open ? 'translate(0%)' : 'translate(-100%)'};
    transition: all ease-in-out .3s; 
`

export const NavText = styled.span`
    display: ${props => props.open ? 'flex' : 'none '};
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
    flex-direction: ${props => props.open ? 'row' : 'column'};
    height: ${props => props.open ? '50px' : '250px' };
    padding: 7px;
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