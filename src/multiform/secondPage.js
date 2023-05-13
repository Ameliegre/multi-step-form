import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import styled from 'styled-components'
import { useState } from 'react'

const PlanWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap:14px;
`

const PlanOption = styled.div`
    border: 1px solid hsl(231,11%,63%);
    width: 30%;
    cursor: pointer;
    border-radius: 12px;
    padding:16px;
    &:hover{
        outline: 1px solid hsl(213,96%,18%);
    }
    &:active{
        background-color: #f0f6ff;
    }
    &:focus {
        outline: 1px solid hsl(243,100%,62%);
        background-color: #f0f6ff;
    }
`

const PriceText = styled.div`
    padding: 0 0 0 0;
    color: #9699ab;
    margin-top:5px;
    margin-bottom:5px;
`

const FreeText = styled.p`
    color: hsl(213, 96%, 18%);
    padding: 0 0 0 0;
    font-size: 12Px;
`

const TitleCard = styled.h3`
    margin-top: 32px;
    font-size:16px;
`

const OptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fafbff;
    align-items: center;
    margin-top:30px;
    border-radius: 5px;
`

const SelectText = styled.p`
    padding:16px 20px;
    font-weight:500;
    &.select {
        color: hsl(213, 96%, 18%);
    }
`

const ToggleWrapper = styled.label`
    width: 54px;
    height: 28px;
    background-color: #02295a;
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: relative;
    display: inline-block;
`

const ToggleBtn = styled.input`
    width: 0;
    height: 0;
    opacity: 0;
    &:checked + .sliderBtn:before{
        transform: translateX(26px);
    }
`

const SliderBtn = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .4s;
    border-radius: 34px;
    &:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 6px;
        bottom: 5px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
   
`

function SecondPage({setStep, step, formValues, setFormValues}) {

    const [priceSelect, setPriceSelect] = useState({price:''})
    const [isChecked, setIsChecked] = useState(false);

    //Permet de changer l'affichage des prix au clic du bouton
    function handleToggle() {
        setIsChecked(!isChecked);
      }

    //Permet d'acceder à la page précédente
    function handlePrevious() {
        setStep(step - 1)
    }

    //Permet de recuperer et stocker les données de la selection du tarif 
    function handleClick(planID){
        const planElement = document.querySelector(`#${planID}`);
        const priceElement = planElement.querySelector('.price').textContent;

        setPriceSelect(({...priceSelect, price : parseInt(priceElement.slice(1))}))
    }

    //Permet d'acceder à la page suivante selon des conditions
    function handleSubmit(){
        if (priceSelect.price === '') {
            alert('Please select your plan before submitting')
            return
        }

        setFormValues(({...formValues, priceSelect}))
        setStep(3)
    }

    return (
        <>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <PlanWrapper>
                <PlanOption id='arcade' onClick={() => handleClick('arcade')}>
                    <img src={arcade} alt='icon'></img>
                    <TitleCard>Arcade</TitleCard>
                    <div>{isChecked? 
                        <div>
                            <PriceText className='price'>$90/yr</PriceText>
                            <FreeText>2 months free</FreeText>
                        </div> : <PriceText  className='price'>$9/mo</PriceText>}
                    </div>
                </PlanOption>
                <PlanOption id='advanced' onClick={() => handleClick('advanced')}>
                    <img src={advanced} alt='icon'></img>
                    <TitleCard>Advanced</TitleCard>
                    <div>{isChecked? 
                        <div>
                            <PriceText className='price'>$120/yr</PriceText>
                            <FreeText>2 months free</FreeText>
                        </div> : <PriceText className='price'>$12/mo</PriceText>}
                    </div>
                </PlanOption>
                <PlanOption id='pro' onClick={() => handleClick('pro')}>
                    <img src={pro} alt='icon'></img>
                    <TitleCard>Pro</TitleCard>
                    <div>{isChecked? 
                        <div>
                            <PriceText className='price'>$150/yr</PriceText>
                            <FreeText>2 months free</FreeText>
                        </div> : <PriceText className='price'>$15/mo</PriceText>}
                    </div>
                </PlanOption>
            </PlanWrapper>
            <OptionWrapper>
                <SelectText className={isChecked ? '' : 'select'}>Monthly</SelectText>
                <ToggleWrapper>
                    <ToggleBtn type='checkbox' checked={isChecked} onChange={handleToggle} className='select-btn'></ToggleBtn>
                    <SliderBtn className='sliderBtn'/>
                </ToggleWrapper>
                <SelectText className={isChecked ? 'select' : ''}>Yearly</SelectText>
            </OptionWrapper>
            <div className='btnWrapper'>
                <button type='button' onClick={handlePrevious} className='button goBackBtn'>Go Back</button>
                <button type='button' onClick={handleSubmit}>Next Step</button>
            </div>
        </>
    )
}

export default SecondPage