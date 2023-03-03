import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 800px;
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
` 

export const ServicesWrapper = styled.div`
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 100%;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        height: auto;
        max-width: 100%;
        display: inline-flex;
        margin-bottom: 10px;
        /* justify-content: center; */
        
    }

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        
    }
`

export const ServicesIcon = styled.img`
    height: 22.875rem;
    width: 14.3125rem;
    margin-bottom: 10px;
    transform: scaleX(2);

    @media screen and (max-width: 768px) {
        height: 20rem;
        width: 12rem;
        display: flex;
        transform: scaleX(1);
        /* justify-content: center; */
        
    }
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {
        margin-top: 20px;
        display: flex;
        justify-items: center;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    /* font-weight: 900; */
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    font-weight: 550;
`