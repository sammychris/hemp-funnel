import React, { useState, useEffect, useContext } from "react";
import { imPoweredRequest } from "../lib/request";
import OrderForm from "../components/OrderForm";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  line1: string;
  state: string;
  city: string;
  zip: string;
  billing_zip: string;
};

type BillingValues = {
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

const OrderFormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormValues>({
    first_name: "",
    last_name: "",
    email: "",
    line1: "",
    city: "",
    state: "",
    zip: "",
    billing_zip: "",
  });

  const [billing, setBilling] = useState<BillingValues>({
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isFormValid =
    formData.first_name !== "" &&
    formData.last_name !== "" &&
    formData.email !== "" &&
    formData.line1 !== "" &&
    formData.city !== "" &&
    formData.state !== "" &&
    formData.zip !== "" &&
    formData.billing_zip !== "";

  const createPayment = async (token: string) => {
    const body = {
      cus_uuid: "",
      source_id: token,
      name: {
        first_name: formData.first_name,
        last_name: formData.last_name,
      },
      customer: {
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
      },
      shipping: {
        type: "BOTH",
        line1: formData.line1,
        line2: "",
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        country: "US",
        name: "TEST_ORDER",
        title: "Home",
      },
      product: {
        variant_id: 41397647507628,
        product_id: "",
        url: "",
        high_risk: true,
        title: "Bronze Entries ($60 Value) / M",
        sku: "SO-8938022",
        price: 4500,
        compare_at_price: 0,
        handle: "",
        options1: "Bronze Entries ($60 Value)",
        options2: "M",
        options3: "",
        weight: 0.0125,
        quantity: 1,
        external_id: 41397647507628,
        external_type: "SHOPIFY",
      },
      external: "SHOPIFY",
      bump: true,
      high_risk: true,
      funnel_uuid: "fun_7626c00357",
    };

    console.log(body);
    console.log("TOKEN ==> " + token);
    // console.log("BODY ==> " + body);

    const paymentResponse = await imPoweredRequest(
      "POST",
      "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/checkout/quick",
      body
    );

    console.log("RESPONSE => ");
    console.log(paymentResponse);

    if (paymentResponse) {
      setIsSuccess(true);
      return paymentResponse;
    }
  };

  return (
    <OrderForm
      handleSubmit={createPayment}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      isFormValid={isFormValid}
      formData={formData}
      handleInputChange={handleInputChange}
      billing={billing}
      isSuccess={isSuccess}
    />
  );
};

export default OrderFormContainer;
