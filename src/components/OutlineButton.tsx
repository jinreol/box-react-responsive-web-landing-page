// 1. Props의 타입 정의
interface OutlineButtonProps {
  title: string;
}

function OutlineButton({ title }: OutlineButtonProps) {
  const baseStyles =
    "font-primary text-white border border-accent rounded-12 border-solid px-20 py-12 bg-transparent font-bold text-14";
  const activeStyles = "active:text-black active:bg-accent";
  return <button className={`${baseStyles} ${activeStyles}`}>{title}</button>;
}

export default OutlineButton;
