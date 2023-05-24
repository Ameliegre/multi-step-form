/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';
import {
  PlanWrapper, PlanOption, TitleCard, PriceText,
  FreeText, OptionWrapper, SelectText, ToggleWrapper,
  ToggleBtn, SliderBtn, MobileWrapper, MobileTextWrapper,
} from '../styled/secondPage.styled';

function SecondPage({
  setStep, step, formValues, setFormValues, handlePrevious,
}) {
  // State pour stocker les valeurs du plan selectionnées
  const [planName, setPlanName] = useState(formValues?.planName);
  const [price, setPrice] = useState(formValues?.price);
  const [periode, setPeriode] = useState(formValues?.periode);

  // Gere la logique d'affichage du bouton toggle ainsi
  // que la maj des states de chq plans selectionné
  const handleToggle = () => {
    setPeriode(periode === 'yearly' ? 'monthly' : 'yearly');

    if (periode === 'yearly') {
      if (planName === 'arcade') {
        setPrice(9);
        setPeriode('monthly');
      } else if (planName === 'advanced') {
        setPrice(12);
        setPeriode('monthly');
      } else if (planName === 'pro') {
        setPrice(15);
        setPeriode('monthly');
      }
    } else if (planName === 'arcade') {
      setPrice(90);
      setPeriode('yearly');
    } else if (planName === 'advanced') {
      setPrice(120);
      setPeriode('yearly');
    } else if (planName === 'pro') {
      setPrice(150);
      setPeriode('yearly');
    }
  };

  // Permet de recuperer et stocker les données de la selection du tarif au clic sur le plan
  function handleClick(planID, priceValue, periodeValue) {
    setPlanName(planID);
    setPrice(priceValue);
    setPeriode(periodeValue);
  }

  // Accède à la plage suivante si un plan est selectionné
  // dans ce cas les informations du plan sont envoyées vers le state Form
  // retourne une erreur si aucun plan n'est selectionné
  function handleSubmit() {
    if (!planName) {
      alert('Please select your plan before submitting');
      return;
    }

    setFormValues(({
      ...formValues,
      planName,
      price,
      periode,
    }));

    setStep(step + 1);
  }

  return (
    <>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <PlanWrapper>
        <PlanOption
          className={planName === 'arcade' ? 'active' : ''}
          onClick={() => {
            handleClick('arcade', periode === 'yearly' ? 90 : 9, periode === 'yearly' ? 'yearly' : 'monthly');
          }}
        >
          <img src={arcade} alt="icon" />
          <MobileWrapper>
            <TitleCard>Arcade</TitleCard>
            <MobileTextWrapper>
              <PriceText>{periode === 'yearly' ? '$90/yr' : '$9/mo'}</PriceText>
              <FreeText>{periode === 'yearly' ? '2 months free' : <>&nbsp;</>}</FreeText>
            </MobileTextWrapper>
          </MobileWrapper>
        </PlanOption>
        <PlanOption
          className={planName === 'advanced' ? 'active' : ''}
          onClick={() => {
            handleClick('advanced', periode === 'yearly' ? 120 : 12, periode === 'yearly' ? 'yearly' : 'monthly');
          }}
        >
          <img src={advanced} alt="icon" />
          <MobileWrapper>
            <TitleCard>Advanced</TitleCard>
            <MobileTextWrapper>
              <PriceText>{periode === 'yearly' ? '$120/yr' : '$12/mo'}</PriceText>
              <FreeText>{periode === 'yearly' ? '2 months free' : <>&nbsp;</>}</FreeText>
            </MobileTextWrapper>
          </MobileWrapper>
        </PlanOption>
        <PlanOption
          className={planName === 'pro' ? 'active' : ''}
          onClick={() => {
            handleClick('pro', periode === 'yearly' ? 150 : 15, periode === 'yearly' ? 'yearly' : 'monthly');
          }}
        >
          <img src={pro} alt="icon" />
          <MobileWrapper>
            <TitleCard>Pro</TitleCard>
            <MobileTextWrapper>
              <PriceText>{periode === 'yearly' ? '$150/yr' : '$15/mo'}</PriceText>
              <FreeText>{periode === 'yearly' ? '2 months free' : <>&nbsp;</>}</FreeText>
            </MobileTextWrapper>
          </MobileWrapper>
        </PlanOption>
      </PlanWrapper>
      <OptionWrapper>
        <SelectText className={periode === 'yearly' ? '' : 'select'}>Monthly</SelectText>
        <ToggleWrapper>
          <ToggleBtn type="checkbox" checked={periode === 'yearly'} onChange={handleToggle} className="select-btn" />
          <SliderBtn className="sliderBtn" />
        </ToggleWrapper>
        <SelectText className={periode === 'yearly' ? 'select' : ''}>Yearly</SelectText>
      </OptionWrapper>
      <div className="btnWrapper">
        <button type="button" onClick={handlePrevious} className="button goBackBtn">Go Back</button>
        <button type="button" onClick={handleSubmit}>Next Step</button>
      </div>
    </>
  );
}

export default SecondPage;

SecondPage.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    number: PropTypes.string,
    price: PropTypes.number,
    planName: PropTypes.string,
    periode: PropTypes.string,
  }).isRequired,
  setFormValues: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
};
