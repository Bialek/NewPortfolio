import styled from 'styled-components';

import { rotateLoader, movingSkyAnimation, shootingStarAnimation } from './Keyframes';

export const Page = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(to bottom,#020107 0%,#201b46 70%);
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 94vh;  
    overflow-y: auto;
    @media screen and (max-width: 500px) {
        height: 99vh;
        display: block;
    }
`

export const MainContent = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 3vh;
    padding-right: 0 !important;
    @media screen and (max-width: 500px) {
        padding: 1vh;
    }
`

export const PrimaryHeader = styled.h1`
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    font-size: 2em;
    font-weight: 900;
`

export const SecondaryHeader = styled.h2`
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
`

export const Paragraf = styled.p`
    color: #fff;
    font-size: 1.2em;
    margin-bottom: 10px;
    text-decoration: none;
    margin: ${props => props.contact ? '0 0 0 20px' : '0 0 10px'};
`
export const HomeWrapper = styled.div`
    padding: 0 20%;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
        padding: 0 15%;
    }
    @media screen and (max-width: 900px) {
        padding: 0 7%;
    }
    @media screen and (max-width: 500px) {
        padding: 0 2%;   
    }
`
export const HomeImg = styled.img`
    width: 183px;
    height: 183px;
    border-radius: 50%;
    object-position: top;
    object-fit: cover;
    margin: 0 auto 10px;
`

export const SkillWrapper = styled.div`
    width: 15%;
    display: inline-block;
    margin: 20px 0 ;
    @media screen and (max-width: 900px) {
        width: 30%;
    }
    @media screen and (max-width: 900px) {
        width: 50%;
    }
`

export const Certificate = styled.a`
    color: #fff;
    text-decoration: none;
    display: inline-flex;
    flex-direction: column;
    width: 25%;
    @media screen and (max-width: 900px) {
        width: 50%;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`

export const CertificateImg = styled.img`
    max-width: 110px;
    max-height: 90px;
    margin: 20px auto;
`

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`
export const Loader = styled.div`
    display: inline-block;
    color: rgb(26,82,118);
    width: 100px;
    height: 100px;
    font-size: 80px;
    margin: 0 auto;
    animation: ${rotateLoader} 1s ease-in-out infinite; 
`


function createStars(starNumber) {
    let stars = '726px 927px #fff';
    for (let i = 1; i < starNumber; i++) {
        stars +=`, ${Math.floor((Math.random() * 2000))}px ${Math.floor((Math.random() * 1000))}px #fff`
    }
    return stars;
}

export const Stars = styled.span`
	z-index: 10;
	width: ${props => props.starSize};
	height: ${props => props.starSize};
	border-radius: 50%;
	background-color: transparent;
    box-shadow: ${props => createStars(props.starNumber)};
    animation: ${movingSkyAnimation} 150s linear infinite;
	position: absolute;
    &:after {
        content: " ";
        top: -300px;
        left: -300px;
        width: ${props => props.starSize};
        height: ${props => props.starSize};
        border-radius: 50%;
        position: absolute;
        background-color: transparent;
        box-shadow: ${props => createStars(props.starNumber)};
    }
    &:before {
        content: " ";
        bottom: -300px;
        right: -300px;
        width: ${props => props.starSize};
        height: ${props => props.starSize};
        border-radius: 50%;
        position: absolute;
        background-color: transparent;
        box-shadow: ${props => createStars(props.starNumber)};
    }
` 
export const ShotingStars = styled.span`
    z-index: 10;
	width: 5px;
	height: 85px;
	border-top-left-radius: 50%;
	border-top-right-radius: 50%;
	position: absolute;
	bottom: 0;
	right: 0;
	background: linear-gradient(to top, rgba(255, 255, 255, 0), white);
	animation: ${shootingStarAnimation} 10s linear infinite;
`
