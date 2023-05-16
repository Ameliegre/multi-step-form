import styled from 'styled-components'


export const AddOnsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #9699ab;
    padding:4px 24px;
    &:hover{
        border: 1px solid #473dff;
    }
`

export const CheckboxWrapperStyle = styled.div`
   
`

export const CheckboxBtnStyle = styled.button`
    background-color: transparent;
    border: 1px solid #9699ab;
    margin:0;
    &:hover {
        background-color: transparent;
    }
`

export const IconStyle = styled.img`
    background-color: #473dff;
    border-radius: 3px;
    height: 18px;
    width:18px;
    position: relative;
    right:2px;
`

export const AddOnsCost = styled.p`
    margin-left: auto;
`