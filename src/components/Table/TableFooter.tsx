import styles from "./table.footer.module.scss";

interface TableFooterProps {
  children: React.ReactNode;
}

export const TableFooter: React.FC<TableFooterProps> = ({ children }) => {
  return <tfoot className={styles.tableFooter}>{children}</tfoot>;
};
