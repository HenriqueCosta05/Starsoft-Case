import React from 'react'
import styles from '@/styles/Navbar/Navbar.module.sass'
import Image from 'next/image'
import logo from '@/images/logo.svg'
import bag from '@/images/Bag.svg'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className={`${styles.base}`}>
          {/*Logo*/}
            <div className={`${styles.logo}`}>
              <Image src={logo} alt="Logo" />
          </div>
          {/*Cart*/}
            <div className={`${styles.cart}`}>
              <Link href="/checkout">
                  <Image src={bag} alt={"Carrinho de compras"} />
                  <span>0</span>
                </Link>
            </div>
    </header>
  )
}
