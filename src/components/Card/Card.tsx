import React from 'react';
import cardStyles from '@/styles/Card/Card.module.sass';
import Image, { StaticImageData } from 'next/image';
import { ButtonComponent } from '..';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  price: {
    icon: {
      src: string | StaticImageData;
      alt: string;
    };
    value: number;
  };
  actionButton: {
    text: string;
    action: () => void;
  };
}

export default function CardComponent({ name, description, image, price, actionButton, ...props }: CardProps) {
  return (
    <div className={`${cardStyles.main}`} {...props}>
      <div className={`${cardStyles.image_container}`}>
              <Image src={image.src} alt={image.alt} className={`${cardStyles.image}`}  />
      </div>
      <h3 className={`${cardStyles.heading}`}>{name}</h3>
      <p className={`${cardStyles.description}`}>{description}</p>
      <div className={`${cardStyles.pricing}`}>
        <Image className={`${cardStyles.icon}`} src={price.icon.src} alt={price.icon.alt} width={29} height={29} />
        <span className={`${cardStyles.text}`}>{price.value} ETH</span>
      </div>
      <ButtonComponent onClick={actionButton.action}>{actionButton.text}</ButtonComponent>
    </div>
  );
}