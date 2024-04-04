"use client";

import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "@/component/CheckoutForm";
import { Box } from "@chakra-ui/react";

export default function Home() {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

  const options: StripeElementsOptions = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  return (
    <Box border="1px solid red">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </Box>
  );
}
