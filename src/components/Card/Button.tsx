import React from "react";
import ButtonComponent from "../Button/Button";

interface ButtonProps {
    action: () => void;
    text: string;
}
export default function CardButtonComponent({ action , text}: ButtonProps) {
  return <ButtonComponent onClick={action}>{text}</ButtonComponent>;
}
