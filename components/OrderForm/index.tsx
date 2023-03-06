import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "@/components/Input";
import styles from "./OrderForm.module.css";

interface FormValues {
  first_name: string;
  email: string;
  phone_no: number;
  line1: string;
  state: string;
  city: string;
  zip: number;
}

const validationSchema = Yup.object({
  first_name: Yup.string().required("Name is required! "),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required! "),
  phone_no: Yup.number().required("Phone Num is required! "),
  line1: Yup.string().required("Address is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  zip: Yup.number().required("Zip code is required"),
});

interface OrderProps {
  handleSubmit: (value: FormValues) => void;
  status: string;
  isLoading: boolean;
}

const OrderForm: React.FC<OrderProps> = ({
  handleSubmit,
  status,
  isLoading,
}) => {
  const initialValues: FormValues = {
    first_name: "",
    email: "",
    phone_no: 0,
    line1: "",
    state: "",
    city: "",
    zip: 0,
  };

  return (
    <div className={styles.formCard} id="FORM_ONE">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          handleSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        <Form id="payment-form">
          <fieldset className={styles.formSection}>
            <legend>Contact Info</legend>
            <Input label="First Name" name="first_name" required type="text" />
            <Input label="Email" name="email" required type="email" />
            <Input label="Phone No" name="phone_no" required type="number" />
          </fieldset>
          <fieldset
            className={styles.formSection}
            style={{ margin: "15px auto" }}
          >
            <legend>Shipping Address</legend>
            <Input label="Address Name" name="line1" required type="text" />
            <Input label="City" name="city" required type="text" />
            <Input label="State" name="state" required type="text" />
            <Input label="Zip Code" name="zip" required type="number" />
          </fieldset>
          <fieldset className={styles.formSection}>
            <legend>Payment</legend>
            <div className={styles.adjustWidth}>
              <div id="card-container">
                <div id="card-element"></div>
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isLoading}
                id="card-button"
              >
                {isLoading ? "Loading . . ." : "Submit Payment"}
              </button>
            </div>
          </fieldset>
        </Form>
      </Formik>
      <div id="payment-status-container" className={status}></div>
    </div>
  );
};

export default OrderForm;
