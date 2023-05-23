import { useState } from 'react'
import { BtnMobileWrapper, ErrorStyle, FormStyle, InputStyle, LabelStyle, MessageStyle, MobileWrapper, TextMobileStyle } from '../styled/firstPage.styled'

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
const PHONE_REGEX = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/

function FirstPage({setStep, step, formValues, setFormValues}) {

    //State pour stocker les valeurs inscrites dans les inputs
    const [input, setInput] = useState({
        name:formValues?.name ?? '',
        email:formValues?.email ?? '',
        number:formValues?.number ?? ''
    })

    //State permettant de gerer les erreurs d'affichage
    const [error, setError] = useState(null)
    
    //Fonction de soumission des inputs avec conditions de format 
    //Si pas d'erreur alors passe à la page suivante et stock les données dans le state FormValue
    function handleSubmit(e) {
        e.preventDefault()
        const emailResult = EMAIL_REGEX.test(input.email)
        const phoneResult = PHONE_REGEX.test(input.number)

        setError(null)
        if (!input.name || !input.email || !input.number) {
            setError('This field is required')
            return
        }

        if (!emailResult || !phoneResult) {
            alert('incorrect fields')
            return
        }
        setStep(step + 1)
        setFormValues(input)
    }

    return (
        <>
            <h1>Personal info</h1>
            <TextMobileStyle>Please provide your name, email address, and phone number.</TextMobileStyle>
            <FormStyle onSubmit={handleSubmit}>
                <MobileWrapper>
                    <MessageStyle>
                        <LabelStyle htmlFor="name">Name</LabelStyle> 
                        <ErrorStyle>{error && input.name === '' && (<span>{error}</span>)}</ErrorStyle>    
                    </MessageStyle>
                    <InputStyle type="text" id="name" name='name' className={error && input.name === '' ? 'error' : '' } placeholder='e.g. Stephen King' value={input.name} onChange={(e) =>  setInput({...input, [e.target.name] : e.target.value})}/>
                    <MessageStyle>
                        <LabelStyle htmlFor="email">Email Address</LabelStyle>
                        <ErrorStyle>{error && input.email === '' && (<span>{error}</span>)}</ErrorStyle> 
                    </MessageStyle>
                    <InputStyle type="text" id="email" name='email' className={error && input.email === '' ? 'error' : '' } placeholder='e.g. stephen.king@lorem.com' value={input.email} onChange={(e) =>  setInput({...input, [e.target.name] : e.target.value})}/>
                    <MessageStyle>
                        <LabelStyle htmlFor="number">Phone Number</LabelStyle>
                        <ErrorStyle>{error && input.number === '' && (<span>{error}</span>)}</ErrorStyle>
                    </MessageStyle>
                    <InputStyle type="text" id="number" name='number' className={error && input.number === '' ? 'error' : '' } placeholder='e.g. +1 234 567 890' value={input.number} onChange={(e) =>  setInput({...input, [e.target.name] : e.target.value})}/>
                </MobileWrapper>
                <BtnMobileWrapper>
                    <button type='submit'>Next Step</button>
                </BtnMobileWrapper>
            </FormStyle>
        </>
    )
}

export default FirstPage