import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const ProjectsWrapper = styled.div`
    overflow-y: scroll;
    height: calc(100vh - 100px);
    max-width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 40px;
    @media screen and (max-width: 1200px){
        grid-template-columns: auto auto;
    }
    @media screen and (max-width: 900px) {
        grid-template-columns: auto;
    }
`

export const ProjectSlider = styled(Carousel)`
    width: 300px;
    margin-right: 15px;
    margin-bottom: 50px;
    @media screen and (max-width: 500px) {
        width: auto;
    }
    img {
        min-width: 300px;
        @media screen and (max-width: 500px) {
            min-width: auto;
            width: 100%;
        }
    }
`

export const Project = styled.div`
    width: 100%;
    display: block;
    padding: 15px;
    margin: 15px 0;
    border-bottom: 1px #535353 solid;
` 
export const ProjectContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ProjectLink = styled.a`
    display: inline-flex;
    justify-content: space-between;
    margin: 20px;
    box-shadow: inset 0 0 6px rgba(255,255,255,0.3); 
    padding: 13px 20px;
    color: rgba(255,255,255,255.6);
    text-decoration: none;
    font-size: 1.3em;
    border-radius: 20px;
    transition: all ease-in-out .2s;
    svg {
        margin-left: 15px;
    }
    &:hover {
        box-shadow: inset 0 0 6px rgba(255,255,255,255.7);
        color: rgba(255,255,255,1);
    }
    
`