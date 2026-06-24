// 1. Props의 타입 정의
interface TextButtonProps {
  title: string;
}

function TextButton({ title }: TextButtonProps) {
  const baseStyles =
    "font-primary text-16 border-none bg-none p-0 font-medium text-white transition-opacity duration-200";
  const hoverStyles = "hover:opacity-70 ";
  const activeStyles =
    "active:underline active:decoration-2 active:underline-offset-4 active:decoration-accent";
  return (
    <button className={`${baseStyles} ${hoverStyles} ${activeStyles}`}>
      {title}
    </button>
  );
}

export default TextButton;
