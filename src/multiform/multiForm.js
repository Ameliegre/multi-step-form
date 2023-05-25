/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
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

const variants = {
  enter: (direction) => ({
    y: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    y: direction > 0 ? -500 : 500,
    opacity: 0,
  }),
};

function MultiForm({
  step, setStep, formValues, setFormValues,
}) {
  const [direction, setDirection] = useState(0);

  // Logique du bouton 'Go Back'
  const handlePrevious = () => {
    setDirection(-1);
    setStep(step - 1);
  };
  useEffect(() => {
    setDirection(1);
  }, [step]);

  return (
    <MultiFormWrapper>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        {step === 1 && (
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          key="first"
          custom={direction}
          transition={{ duration: 0.5 }}
        >
          <FirstPage
            setStep={setStep}
            step={step}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </motion.div>
        )}
        {step === 2 && (
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          key="second"
          custom={direction}
          transition={{ duration: 0.5 }}
        >
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
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          key="third"
          custom={direction}
          transition={{ duration: 0.5 }}
        >
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
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          key="fourth"
          custom={direction}
          transition={{ duration: 0.5 }}
        >
          <FourthPage
            setStep={setStep}
            step={step}
            formValues={formValues}
            handlePrevious={handlePrevious}
          />
        </motion.div>
        )}
        {step === 5 && (
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          key="thankyou"
          custom={direction}
          transition={{ duration: 0.5 }}
        >
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
