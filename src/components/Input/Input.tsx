import styles from "./input.module.scss";

type InputTagProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface InputProps extends InputTagProps {
  variant?: "text" | "contained" | "outlined";
  dimension?: "sm" | "md";
}

export const Input: React.FC<InputProps> = ({
  dimension = "md",
  variant = "text",
  className = "",
  ...props
}) => {
  return (
    <input
      className={`${styles.input} ${styles[variant]} ${styles[dimension]} ${className}`}
      {...props}
    />
  );
};
