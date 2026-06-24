interface FullButtonProps {
  title: string;
}

function FullButton({ title }: FullButtonProps) {
  return (
    <button className="bg-accent font-primary rounded-12 text-14 px-28 py-20 font-bold text-black">
      {title}
    </button>
  );
}

export default FullButton;
