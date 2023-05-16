import { AddOnsCost, AddOnsWrapper, CheckboxBtnStyle, IconStyle, CheckboxWrapperStyle } from "./styled/thirdPage.styled"
import checkmark from '../assets/images/icon-checkmark.svg'
import { useState } from "react"


function ThirdPage({setStep, step, formValues, setFormValues}) {

    const [isAddOns, setIsAddOns] = useState(false)

    function handleAddOns() {

    }

    function handlePrevious() {
        setStep(step - 1)
    }

    function handleSubmit(){
        setStep(step + 1)
    }

    return(
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <AddOnsWrapper>
                <CheckboxWrapperStyle>
                    <CheckboxBtnStyle type='checkbox' checked={isAddOns} onChange={handleAddOns}/>
                    <IconStyle src={checkmark} alt='icon'/>
                </CheckboxWrapperStyle>
                <div>
                    <h3>Online Service</h3>
                    <p>Access to multiplayer games</p>
                </div>
                <AddOnsCost>+$1/mo</AddOnsCost>
            </AddOnsWrapper>
            <div className='btnWrapper'>
                <button type='button' onClick={handlePrevious} className='button goBackBtn'>Go Back</button>
                <button type='button' onClick={handleSubmit}>Next Step</button>
            </div>
        </>
    )
}

export default ThirdPage