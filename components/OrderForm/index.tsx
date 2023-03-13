import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CreditCard, PaymentForm, Ach } from "react-square-web-payments-sdk";
import {
  TokenResult,
  VerifyBuyerResponseDetails,
} from "@square/web-payments-sdk-types";
import Input from "@/components/Input";
import styles from "./OrderForm.module.css";

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  line1: string;
  state: string;
  city: string;
  zip: string;
};

type BillingValues = {
  line1: "";
  line2: "";
  city: "";
  state: "";
  zip: "";
  country: "";
};

// const validationSchema = Yup.object({
//   first_name: Yup.string().required("Name is required! "),
//   last_name: Yup.string().required("Name is required! "),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required! "),
//   line1: Yup.string().required("Address is required"),
//   state: Yup.string().required("State is required"),
//   city: Yup.string().required("City is required"),
//   zip: Yup.number().required("Zip code is required"),
// });

interface OrderProps {
  handleSubmit: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  isFormValid: boolean;
  formData: FormValues;
  billing: BillingValues;
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  isSuccess: boolean;
}

const OrderForm: React.FC<OrderProps> = ({
  handleSubmit,
  isLoading,
  isFormValid,
  formData,
  billing,
  handleInputChange,
  isSuccess,
}) => {
  // const [billing, setBilling] = useState<any>({} as any);

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setBilling({
  //     ...billing,
  //     country: ("" + event.target.value) as
  //       | ""
  //       | "US"
  //       | "BR"
  //       | "UK"
  //       | "CA"
  //       | "NG"
  //       | "MX",
  //   });
  // };

  // const options: any[] = [
  //   { value: "", label: "SELECT OPTION" },
  //   { value: "US", label: "United States" },
  //   { value: "BR", label: "Brazil" },
  //   { value: "UK", label: "United Kingdom" },
  //   { value: "CA", label: "Canada" },
  //   { value: "NG", label: "Nigeria" },
  //   { value: "MX", label: "Mexico" },
  // ];

  const locationID = process.env.NEXT_PUBLIC_SQR_LOCATION as string;
  const sqr_form = ""; // + styles.col +  " " + styles.squareSettings;
  // const initialValues: FormValues = {
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   line1: "",
  //   state: "",
  //   city: "",
  //   zip: 0,
  // };

  return (
    <div className={styles.formCard} id="FORM_ONE">
      <form id="payment-form">
        {isSuccess ? (
          <div
            style={{
              color: "#a4d659",
              fontWeight: "bold",
              fontSize: 22,
              padding: 40,
              textAlign: "center",
            }}
          >
            Thank you for your payment! Your transaction has been processed
            successfully.
          </div>
        ) : (
          <>
            <fieldset className={styles.formSection}>
              <legend>Contact Info</legend>
              <Input
                label="First Name"
                name="first_name"
                required
                type="text"
                value={formData.first_name}
                onChange={handleInputChange}
              />
              <Input
                label="Last Name"
                name="last_name"
                required
                type="text"
                value={formData.last_name}
                onChange={handleInputChange}
              />
              <Input
                label="Email"
                name="email"
                required
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </fieldset>
            <fieldset
              className={styles.formSection}
              style={{ margin: "15px auto" }}
            >
              <legend>Shipping Address</legend>
              <Input
                label="Address Name"
                name="line1"
                required
                type="text"
                value={formData.line1}
                onChange={handleInputChange}
              />
              <Input
                label="City"
                name="city"
                required
                type="text"
                value={formData.city}
                onChange={handleInputChange}
              />
              <Input
                label="State"
                name="state"
                required
                type="text"
                value={formData.state}
                onChange={handleInputChange}
              />
              <Input
                label="Zip Code"
                name="zip"
                required
                type="number"
                value={formData.zip}
                onChange={handleInputChange}
              />
            </fieldset>
            <fieldset className={styles.formSection}>
              <legend>Payment</legend>
              {/* <Input label="Address Name" name="line1" required type="text" />
          <Input label="City" name="city" required type="text" />
          <Input label="State" name="state" required type="text" />
          <Input label="Zip Code" name="zip" required type="number" /> */}
              <div className={styles.adjustWidth}>
                <div id="payment-element">
                  <PaymentForm
                    applicationId={process.env.NEXT_PUBLIC_SQR_APP_ID as string}
                    cardTokenizeResponseReceived={(
                      token: TokenResult,
                      verifiedBuyer?:
                        | VerifyBuyerResponseDetails
                        | null
                        | undefined
                    ) => {
                      if (isFormValid) {
                        handleSubmit(token.token as string);
                        console.info("Token:", token);
                        console.info("Verified Buyer:", verifiedBuyer);
                      } else {
                        console.log("complete all fields!");
                      }
                    }}
                    formProps={{
                      className: sqr_form,
                    }}
                    createVerificationDetails={() => ({
                      // `CHARGE` or `STORE`
                      intent: "STORE",
                      billingContact: {
                        addressLines: [
                          billing.line1 ? billing.line1 : "",
                          billing.line2 ? billing.line2 : "",
                        ],
                        familyName: "",
                        givenName: "",
                        email: "",
                        country: billing.country ? billing.country : "US",
                        phone: "",
                        region: "",
                        city: billing.city ? billing.city : "",
                      },
                    })}
                    locationId={locationID}
                  >
                    <CreditCard>Submit</CreditCard>
                  </PaymentForm>
                  {!isFormValid ? (
                    <div
                      style={{
                        color: "red",
                        paddingTop: 20,
                        textAlign: "center",
                      }}
                    >
                      All fields must be field before payment can be submitted!
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </fieldset>
          </>
        )}
      </form>
      <div id="payment-status-container" className="status"></div>
    </div>
  );
};

export default OrderForm;
