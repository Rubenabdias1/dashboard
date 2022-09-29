import styles from "./card.header.module.scss";

interface CardHeaderProps {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className={styles.cardHeader}>{children}</div>;
};
