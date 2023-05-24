/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import {
  AddOnsListNameStyle,
  AddOnsListPriceStyle,
  AddOnsListStyle, ChangeWordStyle,
  PlanSelectPriceStyle, PlanSelectStyle,
  PlanSelectWrapperStyle, SummaryWrapperStyle,
  TotalStyle, TotalWrapperStyle,
} from '../styled/fourthPage.styled';

function FourthPage({
  setStep, step, formValues, handlePrevious,
}) {
  const handleClick = () => {
    setStep(step - 2);
  };

  function handleSubmit() {
    setStep(step + 1);
  }

  const addOnsList = Object.values(formValues.addOns).map((addon) => (
    <AddOnsListStyle key={addon.id}>
      <AddOnsListNameStyle>{addon.name}</AddOnsListNameStyle>
      <AddOnsListPriceStyle>
        +$
        {addon.price}
        /
        {formValues.periode === 'yearly' ? 'yr' : 'mo'}
      </AddOnsListPriceStyle>
    </AddOnsListStyle>
  ));

  const priceAddonsArr = Object.values(formValues.addOns).map((addon) => addon.price);
  const SumAddons = priceAddonsArr.reduce((a, b) => a + b, 0);

  return (
    <>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        <SummaryWrapperStyle>
          <PlanSelectWrapperStyle>
            <div>
              <PlanSelectStyle>
                {formValues.planName}
                {' '}
                (
                {formValues.periode}
                )
              </PlanSelectStyle>
              <ChangeWordStyle onClick={handleClick}>Change</ChangeWordStyle>
            </div>
            <PlanSelectPriceStyle>
              $
              {formValues.price}
              /
              {formValues.periode === 'yearly' ? 'yr' : 'mo'}
            </PlanSelectPriceStyle>
          </PlanSelectWrapperStyle>
          {addOnsList}
        </SummaryWrapperStyle>
        <TotalWrapperStyle>
          <p>{formValues.periode === 'yearly' ? 'Total (per year)' : 'Total (per month)' }</p>
          <TotalStyle>
            +$
            {SumAddons + formValues.price}
            /
            {formValues.periode === 'yearly' ? 'yr' : 'mo'}
          </TotalStyle>
        </TotalWrapperStyle>

      </div>
      <div className="btnWrapper">
        <button type="button" onClick={handlePrevious} className="button goBackBtn">Go Back</button>
        <button type="button" onClick={handleSubmit}>Confirm</button>
      </div>
    </>
  );
}

export default FourthPage;

FourthPage.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  formValues: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    number: PropTypes.string,
    price: PropTypes.number,
    planName: PropTypes.string,
    periode: PropTypes.string,
    addOns: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
      }),
    ),
  }).isRequired,
  handlePrevious: PropTypes.func.isRequired,
};
