import React from 'react'
import styles from '@/styles/Card/Root.module.sass'

interface RootProps {
  children: React.ReactNode
  orientation: 'vertical' | 'horizontal'
}
export default function RootComponent({children, orientation}: RootProps) {
  return (
      <div className={orientation === 'horizontal' ? `${styles.item_wrapper}` : `${styles.card_wrapper}`}>
          {children}
    </div>
  )
}
