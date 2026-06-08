import styles from "./OutlineButton.module.css";

// 1. Props의 타입 정의
interface OutlineButtonProps {
  title: string;
}

function OutlineButton({ title }: OutlineButtonProps) {
  return <button className={styles.outlineBtn}>{title}</button>;
}

export default OutlineButton;
