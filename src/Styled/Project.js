import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const ProjectsWrapper = styled.div`
    overflow-y: scroll;
    height: 80vh;
    max-width: 100%;
    &::-webkit-scrollbar {
        width: 12px;
    } 
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    } 
    &::-webkit-scrollbar-thumb {
       box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    }
`

export const ProjectSlider = styled(Carousel)`
    width: 300px;
    margin-right: 15px;
    img {
        min-width: 300px;
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
`

export const ProjectLink = styled.a`
    display: inline-flex;
    justify-content: space-between;
    margin: 20px;
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    padding: 13px 20px;
    color: rgba(0,0,0,0.6);
    text-decoration: none;
    border-radius: 20px;
    transition: all ease-in-out .2s;
    svg {
        margin-left: 15px;
    }
    &:hover {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.7);
        color: rgba(0,0,0,1);
    }
    
`