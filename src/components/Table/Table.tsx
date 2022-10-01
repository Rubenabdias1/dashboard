import styles from "./table.module.scss";

interface TableProps {
  children: React.ReactNode;
  style?: React.HTMLAttributes<HTMLTableElement>["style"];
}

export const Table: React.FC<TableProps> = ({ children, style }) => {
  return (
    <table style={style} className={styles.table}>
      {children}
    </table>
  );
};
