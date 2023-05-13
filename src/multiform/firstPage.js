import { useState } from 'react'
import styled from 'styled-components'

const FormSyle = styled.form`
    display: flex;
    flex-direction: column;
`

const LabelStyle = styled.label`
    color: #02295a;
    font-weight: 400;
    margin: 16px 0;
`

const InputStyle = styled.input`
    border: 1px solid hsl(231,11%,63%);
    padding:12px;
    border-radius: 8px;
    &:focus {
        outline: 1px solid hsl(228, 100%, 84%);
    }
    &.error {
        border-color: hsl(354, 84%, 57%);
    }
`

const Message = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Error = styled.div`
    color: hsl(354, 84%, 57%);
    margin:0;
    font-weight:400;
`

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
const PHONE_REGEX = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/

function FirstPage({setStep, setFormValues}) {

    const [input, setInput] = useState({
        name:'',
        email:'',
        number:''
    })

    const [error, setError] = useState(null)
    
    function handleSubmit(e) {
        e.preventDefault()
        const emailResult = EMAIL_REGEX.test(input.email)
        const phoneResult = PHONE_REGEX.test(input.number)

        setError(null)
        if (input.name === '' || input.email === '' || input.number === '') {
            setError('This field is required')
            return
        }

        if (!emailResult || !phoneResult) {
            alert('incorrect fields')
            return
        }
        setStep(2)
        setFormValues(input)
    }

    return (
        <>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <FormSyle onSubmit={handleSubmit}>
                <Message>
                    <LabelStyle htmlFor="name">Name</LabelStyle> 
                    <Error>{error && input.name === '' && (<span>{error}</span>)}</Error>    
                </Message>
                <InputStyle type="text" id="name" name='name' className={error && input.name === '' ? 'error' : '' } placeholder='e.g. Stephen King' value={input.name} onChange={(e) =>  setInput({...input, [e.target.name] : e.target.value})}/>
                <Message>
                    <LabelStyle htmlFor="email">Email Address</LabelStyle>
                    <Error>{error && input.email === '' && (<span>{error}</span>)}</Error> 
                </Message>
                <InputStyle type="text" id="email" name='email' className={error && input.email === '' ? 'error' : '' } placeholder='e.g. stephen.king@lorem.com' value={input.email} onChange={(e) =>  setInput({...input, [e.target.name] : e.target.value})}/>
                <Message>
                    <LabelStyle htmlFor="number">Phone Number</LabelStyle>
                    <Error>{error && input.number === '' && (<span>{error}</span>)}</Error>
                </Message>
                <InputStyle type="text" id="number" name='number' className={error && input.number === '' ? 'error' : '' } placeholder='e.g. +1 234 567 890' value={input.number} onChange={(e) =>  setInput({...input, [e.target.name] : e.target.value})}/>
                <button type='submit'>Next Step</button>
            </FormSyle>
        </>
    )
}

export default FirstPage