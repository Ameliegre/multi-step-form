/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import FirstPage from './firstPage';
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';
import FourthPage from './fourthPage';
import ThankYou from './thankYou';

const MultiFormWrapper = styled.main`
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
`;

function MultiForm({
  step, setStep, formValues, setFormValues,
}) {
  // Logique du bouton 'Go Back'
  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <MultiFormWrapper>
      <AnimatePresence initial={false} mode="wait">
        {step === 1 && (
        <motion.div key="first" initial={{ y: 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} exit={{ y: -500, opacity: 0 }}>
          <FirstPage
            setStep={setStep}
            step={step}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </motion.div>
        )}
        {step === 2 && (
        <motion.div key="second" initial={{ y: 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} exit={{ y: -500, opacity: 0 }}>
          <SecondPage
            setStep={setStep}
            step={step}
            formValues={formValues}
            setFormValues={setFormValues}
            handlePrevious={handlePrevious}
          />
        </motion.div>
        )}
        {step === 3 && (
        <motion.div key="third" initial={{ y: 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} exit={{ y: -500, opacity: 0 }}>
          <ThirdPage
            setStep={setStep}
            step={step}
            formValues={formValues}
            setFormValues={setFormValues}
            handlePrevious={handlePrevious}
          />
        </motion.div>
        )}
        {step === 4 && (
        <motion.div key="fourth" initial={{ y: 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} exit={{ y: -500, opacity: 0 }}>
          <FourthPage
            setStep={setStep}
            step={step}
            formValues={formValues}
            handlePrevious={handlePrevious}
          />
        </motion.div>
        )}
        {step === 5 && (
        <motion.div key="thankyou" initial={{ y: 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} exit={{ y: -500, opacity: 0 }}>
          <ThankYou />
        </motion.div>
        )}
      </AnimatePresence>
    </MultiFormWrapper>
  );
}

export default MultiForm;

MultiForm.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  setFormValues: PropTypes.func.isRequired,
};
