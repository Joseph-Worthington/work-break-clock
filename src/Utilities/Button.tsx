import React from "react";

interface ButtonProps {
  id: string;
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ id, onClick, text }) => {
  return (
    <button id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;