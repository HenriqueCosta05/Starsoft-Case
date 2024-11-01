import React from "react";
import styles from "@/styles/Card/Image.module.sass";
import Image, { StaticImageData } from "next/image";

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
}
export default function ImageComponent({ src, alt }: ImageProps) {
  return (
    <div className={`${styles.card_image_container}`}>
      <Image src={src} alt={alt} className={`${styles.card_image}`} />
    </div>
  );
}
