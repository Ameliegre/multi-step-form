import { AddOnsCost, AddOnsWrapper, CheckboxBtnStyle, IconStyle, TextStyle } from "./styled/thirdPage.styled"
import checkmark from '../assets/images/icon-checkmark.svg'
import { useState } from "react"


function ThirdPage({setStep, step, formValues, setFormValues}) {

    //State permettant de cocher la case selectionnée par Add-ons
    const [addOns, setAddOns] = useState([])

    function handleClickAddOns(name, price) {
        const addOnExists = addOns.some((addOn) => addOn.name === name);

        if (addOnExists) {
        // Si l'add-on existe déjà, on le supprime du tableau
        setAddOns(addOns.filter((addOn) => addOn.name !== name));
        } else {
        // Sinon, l'ajoute au tableau
        setAddOns([...addOns, { name, price }]);
        }
    }

    function handlePrevious() {
        setStep(step - 1)
    }

    function handleSubmit(){
        setFormValues({...formValues, addOns})
        
        setStep(step + 1)
    }

    return(
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <AddOnsWrapper className={addOns.some((addOn) => addOn.name === 'online service') ? 'active' : ''}>
                <CheckboxBtnStyle type='checkbox' checked={addOns} onClick={() => {
                    handleClickAddOns('online service', formValues.periode === 'monthly' ? 1 : 10 )
                    }}>
                    <IconStyle src={checkmark} className={addOns.some((addOn) => addOn.name === 'online service') ? 'active' : ''} alt='icon'/>
                </CheckboxBtnStyle>
                <div>
                    <h3>Online Service</h3>
                    <TextStyle>Access to multiplayer games</TextStyle>
                </div>
                <AddOnsCost>{formValues.periode === 'monthly' ? '+$1/mo' : '+$10/yr' }</AddOnsCost>
            </AddOnsWrapper>
            <AddOnsWrapper className={addOns.some((addOn) => addOn.name === 'larger storage') ? 'active' : ''}>
                <CheckboxBtnStyle type='checkbox' checked={addOns} onClick={() => {
                    handleClickAddOns('larger storage', formValues.periode === 'monthly' ? 2 : 20)
                    }}>
                    <IconStyle src={checkmark} className={addOns.some((addOn) => addOn.name === 'larger storage') ? 'active' : ''} alt='icon'/>
                </CheckboxBtnStyle>
                <div>
                    <h3>Larger storage</h3>
                    <TextStyle>Extra 1TB of cloud save</TextStyle>
                </div>
                <AddOnsCost>{formValues.periode === 'monthly' ? '+$2/mo' : '+$20/yr' }</AddOnsCost>
            </AddOnsWrapper>
            <AddOnsWrapper className={addOns.some((addOn) => addOn.name === 'customizable profile') ? 'active' : ''}>
                <CheckboxBtnStyle type='checkbox' checked={addOns} onClick={() => {
                    handleClickAddOns('customizable profile', formValues.periode === 'monthly' ? 2 : 20)
                    }}>
                    <IconStyle src={checkmark} className={addOns.some((addOn) => addOn.name === 'customizable profile') ? 'active' : ''} alt='icon'/>
                </CheckboxBtnStyle>
                <div>
                    <h3>Customizable Profile</h3>
                    <TextStyle>Custom theme on your profile</TextStyle>
                </div>
                <AddOnsCost>{formValues.periode === 'monthly' ? '+$2/mo' : '+$20/yr' }</AddOnsCost>
            </AddOnsWrapper>
            <div className='btnWrapper'>
                <button type='button' onClick={handlePrevious} className='button goBackBtn'>Go Back</button>
                <button type='button' onClick={handleSubmit}>Next Step</button>
            </div>
        </>
    )
}

export default ThirdPage