import styled from 'styled-components';
import React, { useState } from 'react';
import SideStep from './sideStep';
import MultiForm from './multiform/multiForm';

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
    @media (max-width: 425px) {
        flex-direction: column;
        width: 77vw;
        z-index: unset;
        align-items: center;
        height:60vh;
        padding: 20px;
        background-color: transparent;
        box-shadow: none;
    }
    @media (min-width: 426px) and (max-width: 850px) {
        flex-direction: column;
        width: 77vw;
        z-index: unset;
        align-items: center;
        padding: 20px;
        background-color: transparent;
        box-shadow: none;
    }
`;

function Container() {
// Initialisation d'un objet vide pour le state qui recevra les valeurs du formulaire
// et state permettant de naviguer entre les pages
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  return (
    <Wrapper>
      <SideStep step={step} setStep={setStep} />
      <MultiForm
        step={step}
        setStep={setStep}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </Wrapper>
  );
}

export default Container;
