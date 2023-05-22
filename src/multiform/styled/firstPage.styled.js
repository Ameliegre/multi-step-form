import styled from 'styled-components'

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
`

export const LabelStyle = styled.label`
    color: #02295a;
    font-weight: 400;
    margin: 16px 0;
`

export const InputStyle = styled.input`
    border: 1px solid hsl(231,11%,63%);
    padding:12px;
    border-radius: 8px;
    cursor:pointer;
    &:focus {
        outline: 1px solid hsl(228, 100%, 84%);
    }
    &.error {
        border-color: hsl(354, 84%, 57%);
    }
`

export const MessageStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ErrorStyle = styled.div`
    color: hsl(354, 84%, 57%);
    margin:0;
    font-weight:400;
`