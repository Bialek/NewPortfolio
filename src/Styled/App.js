import styled from 'styled-components';

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

export const Header = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`

export const Paragraf = styled.p`
    color: #fff;
    margin-bottom: 10px;
`