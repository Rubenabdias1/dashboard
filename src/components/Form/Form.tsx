import styles from "./form.module.scss";

type FormTagProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

interface FormProps extends FormTagProps {
  dimension?: "sm" | "md";
}

export const Form: React.FC<FormProps> = ({
  dimension = "md",
  className = "",
  ...props
}) => {
  return (
    <form
      className={`${styles.form} ${styles[dimension]} ${className}`}
      {...props}
    />
  );
};
