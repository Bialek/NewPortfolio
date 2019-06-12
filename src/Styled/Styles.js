import styled from 'styled-components';
import Slider from 'react-slick'
import { rotateLoader, movingSkyAnimation, shootingStarAnimation } from './Keyframes';

export const Page = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(to bottom,#020107 0%,#201b46 70%);
    text-align: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding: ${props => props.home ? '0 20%' : ''};
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
        padding: ${props => props.home ? '0 15%' : ''};
    }
    @media screen and (max-width: 900px) {
        padding: ${props => props.home ? '0 15%' : ''};
    }
    @media screen and (max-width: 500px) {
        padding: ${props => props.home ? '0 2%' : ''};
    }
`
export const Button = styled.button`
    border: none;
    background: transparent;
    position: absolute;
    right: 10px;
    top: 10px;
    .svg-inline--fa.fa-w-11 {
        width: 40px;
        height: 40px;
        color: #fff;
    }
`

export const MainContent = styled.div`
    width: calc(100vw - 55px);
    height: 100%;
    text-align: center;
`

export const PrimaryHeader = styled.h1`
    color: #fff;
    margin-bottom: ${props => props.home ? '0' : '20px' };
    text-align: center;
    font-size: 2em;
    font-weight: 900;
`
export const SecondaryHeader = styled.h2`
    color: #fff;
    margin: 20px 0;
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
`

export const Paragraf = styled.p`
    color: #fff;
    font-size: 1.2em;
    margin-bottom: ${props => props.home ? '0' : '10px'};
    text-decoration: none;
    margin: ${props => props.contact ? '0 0 0 20px' : ''};
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
    img {
        margin: 0 auto;
    }
`
export const SliderSlick = styled(Slider)`
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
        touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    .slick-list {
        position: relative;
        display: block;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }
    .slick-list:focus {
        outline: none;
    }
    .slick-list.dragging {
        cursor: pointer;
        cursor: hand;
    }
    .slick-slider .slick-track,
    .slick-slider .slick-list {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
    }
    .slick-track {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .slick-track:before,
    .slick-track:after {
        display: table;
        content: '';
    }
    .slick-track:after {
        clear: both;
    }
    .slick-loading .slick-track {
        visibility: hidden;
    }

    .slick-slide {
        float: left;
        height: 100%;
        min-height: 1px;
    }
    [dir='rtl'] .slick-slide {
        float: right;
    }
    .slick-slide img {
        display: block;
    }
    .slick-slide.slick-loading img {
        display: none;
    }
    .slick-slide.dragging img {
        pointer-events: none;
    }
    .slick-initialized .slick-slide {
        display: block;
    }
    .slick-loading .slick-slide {
        visibility: hidden;
    }
    .slick-vertical .slick-slide {
        display: block;
        height: auto;
        border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
        display: none;
    }
    .slick-arrow {
        position: absolute;
        top: 0;
        bottom: 0;
        background-color: transparent;
        border: none;
        z-index: 999;
        svg {
            width: 40px;
            height: 40px;
            color: rgba(255,255,255,0.3);
            transition: all ease-in-out .4s;
            cursor: pointer;
            :hover {
                color: rgba(255,255,255,0.8);
            }
        }
    }
    .slick-next {
        right: 0;
    }
    .slick-left {
        left: 0;
    }
    .slick-dots {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -40px;
        display: flex !important;
        justify-content: center;
        list-style-type: none;
        li {
            button {
                border-radius: 50%;
                width: 20px;
                height: 20px;
                margin: 0 20px;
                font-size: 0;
                border: none;
                background-color: rgba(255,255,255,0.4);
            }
            &.slick-active {
                button {
                    background-color: rgba(255,255,255,0.9);
                }
            }
        }
    }
`

export const Certificate = styled.div`
    color: #fff;
    text-decoration: none;
    cursor: pointer;
`

export const CertificateImg = styled.img`
    margin: 20px auto;
`
export const ContactWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px 0;
`

export const ContactItem = styled.div`
    display: inline-flex;
    width: 36%;
    justify-content: left;
    align-items: center;
    margin-bottom: 40px;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
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
