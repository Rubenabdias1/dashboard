import styles from "./card.body.module.scss";

interface CardBodyProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, style }) => {
  return (
    <div className={styles.cardBody} style={style}>
      {children}
    </div>
  );
};
