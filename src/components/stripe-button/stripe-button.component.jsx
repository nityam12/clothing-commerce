import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Gyjr5Kn8O3hQLyYO1CVmWe7rGjGkcTE07TP2iIXdJbUBLD4pMHJ3HBNN5YzZLrscE5BEj3Xt64meaq5X2Ryx1dD00lqFj6LHW";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="MANGLOCART"
      shippingAddress
      billingAddress
      currency="INR"
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
