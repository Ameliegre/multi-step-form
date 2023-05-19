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