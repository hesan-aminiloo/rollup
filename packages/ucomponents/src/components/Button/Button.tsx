import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="p-2 bg-amber-300 rounded-md">{props.label}</button>;
};

export default Button;