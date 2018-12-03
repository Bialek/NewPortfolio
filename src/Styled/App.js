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

export const ProjectWrapper = styled.div`

`

export const ProjectImg = styled.img`


`