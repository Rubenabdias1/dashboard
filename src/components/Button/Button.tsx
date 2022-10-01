import styles from "./button.module.scss";

type ButtonTagProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends ButtonTagProps {
  variant?: "text" | "contained" | "outlined";
  color?: "red" | "blue" | "gray";
  dimension?: "sm" | "md";
}

export const Button: React.FC<ButtonProps> = ({
  color = "gray",
  dimension = "md",
  variant = "text",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[color]} ${styles[dimension]} ${className}`}
      {...props}
    />
  );
};
