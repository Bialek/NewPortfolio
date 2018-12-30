import styled from 'styled-components';

export const Page = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    overflow: hidden;
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
    background-color: rgba(166, 166, 166, 0.7);
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
`
export const HomeWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
        width: 75%;
    }
    @media screen and (max-width: 900px) {
        width: 80%;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
    }
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

