import styles from "./card.body.module.scss";

interface CardBodyProps {
  children: React.ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <div className={styles.cardBody}>{children}</div>;
};
