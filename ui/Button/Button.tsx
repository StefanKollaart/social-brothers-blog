interface ButtonProps {
  type?: "small";
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ type, children, onClick }: ButtonProps) {
  let classes = "rounded-xl text-white";

  if (type === "small") {
    classes += " bg-darker-grey text-xxs py-1 px-3";
  } else {
    classes += " bg-social-brothers-orange text-xs font-bold px-12 py-3";
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
