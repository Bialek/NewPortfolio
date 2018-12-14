import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavWrapper = styled.div`
    min-width: ${props => props.open ? '300px' : '55px'};
    height: 100vh;
    z-index: 2;
    font-size: .9em;
    color: #fff;
    background-color: rgba(26, 82, 118, 0.7);
    padding: ${props => props.open ? '10px' : '0'};
    display: flex;
    flex-direction: column;
    box-shadow: 3px 0px 5px 0px rgba(0,0,0,0.75);
    transition: all ease-out .25s; 
    position:relative;
    padding-top: 80px;
`
export const NavControl = styled.div`
    width: 35px;
    height: 30px;
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 11px;
    cursor: pointer;
    transition: ${props => props.open ? '.2s ease-in-out' : '.1s'} ;
    span {
        width:100%;
        height: 4px;
        background-color: #fff;
        border-radius: 2px;
        position: absolute;
        transform: ${props => props.open ? 'rotate(0deg)' : 'rotate(180deg)'};
        transition: .5s ease-in-out;
    }
    span:nth-child(1) {
        top: ${props => props.open ? '13px' : '0'};
        left: 0px;
        transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    span:nth-child(2) {
        top: 13px;
        left: 0px;
        transform: ${props => props.open ? 'scale(.1)' : 'scale(1)'};
    }
    span:nth-child(3) {
        bottom:0px;
        left: 0px;
        transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
        top: ${props => props.open ? '13px' : 'auto'};
    }
`

export const NavList = styled.ul`
    list-style: none;
    margin-top: 30px;
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
    max-width: 80%;
    margin: 0 auto;
    display: inline-flex;
    &:hover {
        background-size: 100% 2px;
    }
`

export const NavLogo = styled.div`
    display: flex;
    min-width: 266px;
    flex-direction: column;   
    margin-bottom: 15px;
    display: ${props => props.open === false ? 'none' : 'inline-flex'};
    @media screen and (max-height: 600px) {
        display:none;
    }
`

export const NavText = styled.span`
    display: ${props => props.open ? 'block' : 'none '};
    min-width: 171px;
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
    position: absolute;
    bottom: 20px;
    margin: 0 auto;
    left: 0;
    right: 0;
    @media screen and (max-height: 400px) {
        display: ${props => props.open ? 'flex' : 'none'};
    }
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