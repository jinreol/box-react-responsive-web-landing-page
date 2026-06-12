import styles from "@/components/FullButton.module.css";

// 1. Props의 타입 정의
interface FullButtonProps {
  title: string;
}

function FullButton({ title }: FullButtonProps) {
  return <button className={styles.fullButton}>{title}</button>;
}

export default FullButton;
