import styled from 'styled-components'

export const PlanWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap:14px;
    @media (max-width: 425px) {
        flex-direction: column;
    }
`

export const PlanOption = styled.div`
    border: 1px solid hsl(231,11%,63%);
    width: 30%;
    cursor: pointer;
    border-radius: 12px;
    padding:16px;
    &:hover{
        outline: 1px solid hsl(243,100%,62%);
    }
    &.active {
        outline: 1px solid hsl(243,100%,62%);
        background-color: #f0f6ff;
    }
    @media (max-width: 850px) {
        width: 90%;
        display:flex;
        flex-direction: row;
        margin-top:12px;
        align-items: flex-start;
        border-radius: 8px;
        padding : 14px 16px
    }
    @media (min-width: 426px) and (max-width: 850px){
        padding : 12px 16px 0 16px;
    }
`

export const PriceText = styled.div`
    padding: 0 0 0 0;
    color: #9699ab;
    margin-top:5px;
    margin-bottom:5px;
`

export const FreeText = styled.p`
    color: hsl(213, 96%, 18%);
    padding: 0 0 0 0;
    font-size: 12Px;
    @media (max-width: 850px) {
        margin-left: auto;
    }
`

export const TitleCard = styled.h3`
    margin-top: 32px;
    font-size:16px;
    @media (max-width: 850px) {
        margin-top: 0;
    }
`

export const OptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fafbff;
    align-items: center;
    margin:0px;
    margin-top: 20px;
    margin-bottom:36px;
    border-radius: 5px;
    @media (max-width: 425px) {
        margin-bottom:0;
    }
`

export const SelectText = styled.p`
    padding:16px 20px;
    font-weight:500;
    &.select {
        color: hsl(213, 96%, 18%);
    }
`

export const ToggleWrapper = styled.label`
    width: 54px;
    height: 28px;
    background-color: #02295a;
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: relative;
    display: inline-block;
`

export const ToggleBtn = styled.input`
    width: 0;
    height: 0;
    opacity: 0;
    &:checked + .sliderBtn:before{
        transform: translateX(26px);
    }
`

export const SliderBtn = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .4s;
    border-radius: 34px;
    &:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 6px;
        bottom: 5px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
   
`

export const MobileWrapper = styled.div`
    @media (max-width: 850px) {
        display:flex
        flex-direction: column;
        padding-left: 18px;
    }
`

export const MobileTextWrapper = styled.div`
    @media (max-width: 425px) {
        display:flex;
        flex-direction: row;
        width:214px;
    }
`