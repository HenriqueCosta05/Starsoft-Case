import React from 'react'
import styles from '@/styles/Card/Root.module.sass'

interface RootProps {
    children: React.ReactNode
}
export default function RootComponent({children}: RootProps) {
  return (
      <div className={`${styles.card_wrapper}`}>
          {children}
    </div>
  )
}
