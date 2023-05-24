import styled from 'styled-components'
import FirstPage from './firstPage'
import SecondPage from './secondPage'
import ThirdPage from './thirdPage'
import FourthPage from './fourthPage'
import ThankYou from './thankYou'

const MultiFormWrapper = styled.div`
    width:56%;
    margin-right:6%;
    padding-top:2%;
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 425px) {
        width: 80%;
        position: fixed;
        top: 84px;
        height: 50vh;
        overflow: scroll;
        margin-right:0;
        padding: 20px ;
        border-radius: 0.5rem;
        background-color: hsl(0, 0%, 100%);
        box-shadow: 0 0 1rem #d6d9e6;
    }
    @media (min-width: 426px) and (max-width: 850px) {
        width: 80%;
        position: fixed;
        top: 84px;
        height: 430px;
        overflow: scroll;
        margin-right:0;
        padding: 20px ;
        border-radius: 0.5rem;
        background-color: hsl(0, 0%, 100%);
        box-shadow: 0 0 1rem #d6d9e6;
    }
`

function MultiForm({step, setStep, formValues, setFormValues, handlePrevious}) {

    return(
        <MultiFormWrapper>
            { step === 1 ? <FirstPage setStep={setStep} step={step} formValues={formValues} setFormValues={setFormValues}/>
            : step === 2 ? <SecondPage setStep={setStep} step={step} formValues={formValues} setFormValues={setFormValues} handlePrevious={handlePrevious}/> 
            : step === 3 ? <ThirdPage setStep={setStep}  step={step} formValues={formValues} setFormValues={setFormValues} handlePrevious={handlePrevious}/> 
            : step === 4 ? <FourthPage setStep={setStep} step={step} formValues={formValues} handlePrevious={handlePrevious}/> 
            : step === 5 ? <ThankYou/>
            : null 
            }
        </MultiFormWrapper>
    )
}

export default MultiForm