"use client";

import React from 'react'
import { useSelector } from 'react-redux'
import styles from '@/styles/Navbar/Navbar.module.sass'
import Image from 'next/image'
import logo from '@/images/logo.svg'
import bag from '@/images/Bag.svg'
import Link from 'next/link'
import {selectItemsCount} from "@/redux/cart/cart.selectors"

export default function Navbar() {
  
    const itemsCount = useSelector(selectItemsCount)

  return (
    <header className={`${styles.base}`}>
          {/*Logo*/}
            <Link className={`${styles.logo}`} href="/">
              <Image src={logo} alt="Logo" />
          </Link>
          {/*Cart*/}
            <div className={`${styles.cart}`}>
              <Link href="/checkout">
                  <Image src={bag} alt={"Carrinho de compras"} />
                  <span>{itemsCount}</span>
                </Link>
            </div>
    </header>
  )
}
