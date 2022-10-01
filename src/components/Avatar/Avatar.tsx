import styles from "./avatar.module.scss";

export type ImgTagProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const Avatar: React.FC<ImgTagProps> = ({
  src = "",
  alt = "avatar",
  ...props
}) => {
  return (
    <div className={styles.avatar}>
      <img src={src} alt={alt} {...props} />
    </div>
  );
};
