import styles from "@/components/TextButton.module.css";

// 1. Props의 타입 정의
interface TextButtonProps {
  title: string;
}

function TextButton({ title }: TextButtonProps) {
  return <button className={styles.textBtn}>{title}</button>;
}

export default TextButton;
