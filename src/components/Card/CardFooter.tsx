import styles from "./card.footer.module.scss";

interface CardFooterProps {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <div className={styles.cardFooter}>{children}</div>;
};
