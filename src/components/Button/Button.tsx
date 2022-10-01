import styles from "./button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "text" | "contained" | "outlined";
  color?: "red" | "blue" | "gray";
  size?: "sm" | "md";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  color = "gray",
  size = "md",
  variant = "text",
  className,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[color]} ${styles[size]} ${className}`}
    >
      {children}
    </button>
  );
};
