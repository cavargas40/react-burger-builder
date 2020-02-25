import React from 'react';

import './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = props => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={() => {}}>
        Cancel
      </Button>
      <Button btnType="Danger" clicked={() => {}}>
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
