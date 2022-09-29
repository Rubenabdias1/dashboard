import styles from "./avatar.module.scss";

type Props = {
  src?: string | undefined;
  alt?: string | undefined;
};

export const Avatar: React.FC<Props> = ({ src = "", alt = "avatar" }) => {
  return (
    <div className={styles.avatar}>
      <img src={src} alt={alt} />
    </div>
  );
};
