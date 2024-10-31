import React from 'react';
import cardStyles from '@/styles/Card/Card.module.sass';
import Image, { StaticImageData } from 'next/image';
import { ButtonComponent } from '..';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  shortDescription: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
  price: {
    icon: {
      src: StaticImageData;
      alt: string;
    };
    value: string;
  };
  actionButton: {
    text: string;
    action: () => void;
  };
}

export default function CardComponent({ title, shortDescription, image, price, actionButton, ...props }: CardProps) {
  return (
    <div className={`${cardStyles.main}`} {...props}>
      <div className={`${cardStyles.image_container}`}>
              <Image src={image.src} alt={image.alt} className={`${cardStyles.image}`}  />
      </div>
      <h3 className={`${cardStyles.heading}`}>{title}</h3>
      <p className={`${cardStyles.short_description}`}>{shortDescription}</p>
      <div className={`${cardStyles.pricing}`}>
        <Image className={`${cardStyles.icon}`} src={price.icon.src} alt={price.icon.alt} width={29} height={29} />
        <span className={`${cardStyles.text}`}>{price.value}</span>
      </div>
      <ButtonComponent onClick={actionButton.action}>{actionButton.text}</ButtonComponent>
    </div>
  );
}