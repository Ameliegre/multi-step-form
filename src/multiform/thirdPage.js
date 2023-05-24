import { AddOnsCost, AddOnsWrapper, CheckboxBtnStyle, IconStyle, TextStyle } from "../styled/thirdPage.styled"
import checkmark from '../assets/images/icon-checkmark.svg'
import { useState } from "react"


function ThirdPage({setStep, step, formValues, setFormValues, HandlePrevious}) {

    //State permettant de cocher la case selectionnée par Add-ons
    const [addOns, setAddOns] = useState(formValues?.addOns ?? [])

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

    //fonction qui met à jour les prix des add-ons en fonction de la période sélectionnée et met à jour les valeurs du formulaire
    function handleSubmit() {
        //Crée une copie du tableau addOns
        let updatedAddOns = [...addOns];

        //Cet objet associe chaque add-on à son prix pour chaque période possible (mensuelle et annuelle).
        const addOnMapping = {
            'online service': { monthly: 1, yearly: 10 },
            'larger storage': { monthly: 2, yearly: 20 },
            'customizable profile': { monthly: 2, yearly: 20 }
          };
        
        //Extraction du nom de l'add-on, utilisation du nom de l'add-on et de la période sélectionnée pour accéder au prix correspondant dans l'objet addOnMapping. 
        //Ce prix est ensuite assigné à la propriété price de l'add-on.
        updatedAddOns.forEach((addOn) => {
        const { name } = addOn;
        const price = addOnMapping[name][formValues.periode];
        addOn.price = price;
        });

        setFormValues({ ...formValues, addOns: updatedAddOns });
        setStep(step + 1)
    }

    return(
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <AddOnsWrapper className={addOns?.some((addOn) => addOn.name === 'online service') ? 'active' : ''}>
                <CheckboxBtnStyle type='checkbox' checked={addOns} onClick={() => {
                    handleClickAddOns('online service', formValues.periode === 'monthly' ? 1 : 10 )
                    }}>
                    <IconStyle src={checkmark} className={addOns.some((addOn) => addOn.name === 'online service') ? 'active' : ''} alt='icon'/>
                </CheckboxBtnStyle>
                <div>
                    <h3>Online service</h3>
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
                    <h3>Customizable profile</h3>
                    <TextStyle>Custom theme on your profile</TextStyle>
                </div>
                <AddOnsCost>{formValues.periode === 'monthly' ? '+$2/mo' : '+$20/yr' }</AddOnsCost>
            </AddOnsWrapper>
            <div className='btnWrapper'>
                <button type='button' onClick={HandlePrevious} className='button goBackBtn'>Go Back</button>
                <button type='button' onClick={handleSubmit}>Next Step</button>
            </div>
        </>
    )
}

export default ThirdPage