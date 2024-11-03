import React from "react";
import ButtonComponent from "../Button/Button";

interface ButtonProps {
    onClick: () => void;
    text: string;
}
export default function CardButtonComponent({ onClick , text}: ButtonProps) {
  return <ButtonComponent onClick={onClick}>{text}</ButtonComponent>;
}
