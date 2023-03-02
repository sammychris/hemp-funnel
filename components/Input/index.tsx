import { Field, useFormikContext, ErrorMessage } from "formik";
import styles from "./Input.module.css";

const Input = ({
  label,
  name,
  required,
  type,
}: {
  label: string;
  name: string;
  required: boolean;
  type: string | number;
}) => {
  const { values } = useFormikContext();
  // You can access the form values using the "values" object
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>
        {`${label} : `}
      </label>
      <Field
        defaultValue=""
        className={styles.formControl}
        type={type}
        name={name}
        id={name}
        required={required}
        placeHolder={label}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="req-mark"
        // style={{
        //   position: "absolute",
        //   color: "red",
        //   fontSize: 14,
        //   bottom: -20,
        //   right: 10,
        // }}
      />
    </div>
  );
};

export default Input;
