import styled from 'styled-components'
import SideStep from './sideStep'
import MultiForm from './multiform/multiForm'
import { useState } from 'react'

const Wrapper = styled.div`
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0 0 1rem #d6d9e6;
    border-radius: 0.5rem;
    height:500px;
    width:800px;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    z-index:0;
    position: relative;
`

function Container(){

    // Initialisation d'un objet vide pour le state qui recevra les valeurs du formulaire et state permettant de naviguer entre les pages
    const [step , setStep] = useState(1)
    const [formValues, setFormValues] = useState({})

    console.log(formValues)
    return(
        <Wrapper>
            <SideStep step={step} setStep={setStep}/>
            <MultiForm step={step} setStep={setStep} formValues={formValues} setFormValues={setFormValues}/>
        </Wrapper>
    )
}

export default Container