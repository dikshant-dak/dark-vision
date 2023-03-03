import styled from "styled-components";

export const AboutContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
        display: flex;
        /* justify-content: center; */
        
    }
    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const AboutH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    margin-top: 90px;

    @media screen and (max-width: 768px) {
        margin-top: 20px;
        display: flex;
        justify-items: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const AboutH2 = styled.h2`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 40px;
    margin-top: 30px;

    @media screen and (max-width: 768px) {
        margin-top: 15px;
        display: flex;
        justify-items: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

export const AboutWrapper = styled.div`
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15.82%,1fr));;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    /* box-sizing: border-box; */

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const AboutCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 100%;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    /* flex: 16.66%; */
    
    @media screen and (max-width: 768px) {
        height: auto;
        max-width: 100%;
        display: inline-flex;
        margin-bottom: 10px;
        /* justify-content: center; */
        
    }
    @media screen and (max-width: 480px) {
        height: auto;
        max-width: 100%;
        display: inline-flex;
        margin-bottom: 10px;
        /* justify-content: center; */
        
    }
`;

export const AboutIcon = styled.img`
    height: 20.875rem;
    width: 14.3125rem;
    margin-bottom: 10px;
    transform: scaleX(1);
    border: 5px solid #fff;
    filter: brightness(130%);

    @media screen and (max-width: 768px) {
        height: 20rem;
        width: 12rem;
        display: flex;
        transform: scaleX(1);
        filter: brightness(130%);
        /* justify-content: center; */
        
    }
    @media screen and (max-width: 480px) {
        height: 20rem;
        width: 12rem;
        display: flex;
        transform: scaleX(1);
        filter: brightness(130%);
        /* justify-content: center; */
        
    }

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        filter: brightness(130%);
    }
`;

export const AboutP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
    font-style: italic;
    font-weight: 550;
`;