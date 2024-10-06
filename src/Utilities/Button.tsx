import React from "react";

interface ButtonProps {
  id: string;
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ id, onClick, text }) => {
  return (
    <button id={id} onClick={onClick} className="py-2 px-4 border-solid border-2 rounded border-white bg-white text-slate-950 hover:text-white hover:bg-slate-700 hover:border-slate-700">
      {text}
    </button>
  );
};

export default Button;