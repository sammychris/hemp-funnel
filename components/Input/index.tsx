import styles from "./Input.module.css";

const Input = ({
  label,
  name,
  required,
  type,
  value,
  onChange,
}: {
  label: string;
  name: string;
  required: boolean;
  type: string;
  value: string | number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}) => {
  // You can access the form values using the "values" object
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>
        {`${label} : `}
      </label>
      <input
        defaultValue=""
        className={styles.formControl}
        type={type}
        name={name}
        id={name}
        required={required}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
