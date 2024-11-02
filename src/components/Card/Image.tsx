import React from "react";
import styles from "@/styles/Card/Image.module.sass";
import Image, { StaticImageData } from "next/image";

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  background_color?: string;
}
export default function ImageComponent({ src, alt, background_color}: ImageProps) {
  return (
    <div className={`${styles.card_image_container}`} style={{backgroundColor: background_color}}>
      <Image src={src} alt={alt} className={`${styles.card_image}`} sizes='100vw' width={0} height={0} priority />
    </div>
  );
}
