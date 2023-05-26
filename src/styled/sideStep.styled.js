import styled from 'styled-components';

export const SelectSide = styled.section`
    max-height:100%;
    position: relative;
    @media (max-width: 850px) {
        position: relative;
        z-index: -9999;
        top: -22vh;
        width: 130%;
    }
    @media (min-width: 426px) and (max-width: 850px) {
        top: -32vh;
    }
`;

export const Imgstyle = styled.img`
    height:100%;
    z-index:1;
    position: relative;
    @media (max-width: 850px) {
        width:100%;
    }
`;

export const StepWrapper = styled.div`
    position: relative;
    z-index:2;
    top: -100%;
    @media (max-width: 850px) {
        display: flex;
        flex-direction: row;
        position: absolute;
        top: 22%;
        left: 27%;
    }
    @media (min-width: 426px) and (max-width: 850px) {
        display : none;
    }
`;

export const StepStyle = styled.div`
    display: flex;
    flex-direction: row;
    z-index:2;
    position: relative;
    gap:15px;
    padding:24px;
    padding-bottom: 0;
    @media (max-width: 425px) {
        padding: 0 20px 0 0;
    }
`;

export const StepNumber = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid hsl(229,24%,87%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
        background-color: #bfe2fd;
        color: #02295a;
    }
`;

export const StepMobileStyle = styled.div`
    @media (max-width: 850px) {
        display: none;
    }
`;

export const StepText = styled.div`
    color: #adbeff;
    font-weight: 400;
    font-size: 12px;
    margin:0;
`;
