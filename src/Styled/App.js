import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
    object-fit: cover;
    z-index: -999;
`

export const MainContent = styled.div`
    width: 100%;
`

export const Container = styled.div`
    background-color: rgba(166, 166, 166, 0.7);
    height: 100%;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PrimaryHeader = styled.h1`
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.5em;
    font-weight: 900;
`

export const SecondaryHeader = styled.h2`
    color: #fff;
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.3em;
    font-weight: 700;
`

export const Paragraf = styled.p`
    color: #fff;
    margin-bottom: 10px;
    text-decoration: none;
`

export const SkillWrapper = styled.div`
    width: 15%;
    display: inline-block;
    margin: 20px 0 ;
`

export const Certificate = styled.a`
    color: #fff;
    text-decoration: none;
    display: inline-flex;
    flex-direction: column;
    width: 25%;
    
`

export const CertificateImg = styled.img`
    max-width: 110px;
    max-height: 90px;
    margin: 20px auto;
`

export const ProjectsWrapper = styled.div`
    overflow-y: scroll;
    height: 80vh;
    max-width: 100%;
    &::-webkit-scrollbar {
        width: 12px;
    } 
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    } 
    &::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    }
`

export const ProjectSlider = styled(Carousel)`
    width: 300px;
    display: inline-flex;
`

export const Project = styled.div`
    width: 100%;
    display: flex;
    padding: 15px;
    margin: 15px 0;
    border-bottom: 1px #535353 solid;
` 
