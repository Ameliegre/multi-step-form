import styled from 'styled-components'


export const AddOnsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #9699ab;
    padding:4px 24px;
    margin-bottom:16px;
    &:hover{
        border: 1px solid #473dff;
        cursor:pointer;
    }
    &.active{
        border: 1px solid #473dff;
        background-color: #f0f6ff;
    }
    @media (max-width: 850px) {
        margin-top: 10px;
        margin-bottom:5px;
        padding: 4px 15px;
    }
`

export const CheckboxBtnStyle = styled.button`
    background-color: transparent;
    border: 1px solid #9699ab;
    border-radius: 3px;
    margin:0;
    padding:0;
    margin-right: 20px;
    width:25px;
    height: 25px;
    align-self:center;
    &:hover {
        background-color: transparent;
    }
    @media (max-width: 425px) {
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }
    
`

export const IconStyle = styled.img`
    opacity: 0;
    transition: opacity 0.3s ease-in;
    &.active {
        display: block;
        background-color: #473dff;
        border-radius: 3px;
        height: 16px;
        width:16px;
        position: relative;
        cursor: pointer;
        padding:4px;
        opacity: 1;
        @media (max-width: 425px) {
            height: 10px;
            width: 10px;
        } 
    }
   
`

export const AddOnsCost = styled.p`
    margin-left: auto;
    color: #473dff;
    @media (max-width: 425px) {
        padding: 0;
        font-size:13px;
    }
    @media (min-width: 426px) and (max-width: 850px){
        padding: 0;
    }
`

export const TextStyle = styled.p `
    padding: 0 0 10px 0;
    @media (max-width: 425px) {
        font-size:13px;
    }
`