import React, { useState, useEffect, useContext } from "react";
import { imPoweredRequest } from "../lib/request";
import OrderForm from "../components/OrderForm";

// interface FormValues {
//   first_name: string;
//   email: string;
//   phone_no: number;
//   line1: string;
//   state: string;
//   city: string;
//   zip: number;
// }

const OrderFormContainer = () => {
  const [squareCard, setSquareCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const appId = "sandbox-sq0idb-RT3u-HhCpNdbMiGg5aXuVg";
  const locationId = "TC4Z3ZEBKRXRH";
  let isSquareCardAttached;
  let squareCardPayment;

  useEffect(() => {
    if (!window.Square) {
      return;
      // throw new Error("Square.js failed to load properly");
    }
    try {
      const payments = window.Square.payments(appId, locationId);
      initializeSquareCard(payments);
    } catch {
      setStatus("missing-credentials");
      return;
    }
  }, []);

  async function initializeSquareCard(payments) {
    try {
      if (!isSquareCardAttached) {
        isSquareCardAttached = true;
        squareCardPayment = await payments.card();
        await squareCardPayment.attach("#card-container");

        setSquareCard(cardPayment);
      }
    } catch (e) {
      console.error("Initializing Square Card failed", e);
      return;
    }
  }

  // Checkpoint 2.
  async function handleSubmit(values) {
    // event.preventDefault();
    try {
      // disable the submit button as we await tokenization and make a payment request.
      setIsLoading(true);
      const token = await tokenize();
      const paymentResults = await createPayment(token);
      setStatus("is-success");
      console.debug("Payment Success", paymentResults);
    } catch (e) {
      setIsLoading(false);
      setStatus("is-failure");
      console.error(e.message);
    }
  }

  async function createPayment(token) {
    const body = JSON.stringify({
      locationId,
      sourceId: token,
    });

    const paymentResponse = await fetch("/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (paymentResponse.ok) {
      return paymentResponse.json();
    }
    const errorBody = await paymentResponse.text();
    throw new Error(errorBody);
  }

  async function tokenize() {
    const tokenResult = await squareCard.tokenize();
    if (tokenResult.status === "OK") {
      return tokenResult.token;
    } else {
      let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
      if (tokenResult.errors) {
        errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
      }

      throw new Error(errorMessage);
    }
  }

  function cardPayment(prevState) {
    throw new Error("Function not implemented.");
  }

  return (
    <OrderForm
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      status={status}
    />
  );
};

export default OrderFormContainer;
