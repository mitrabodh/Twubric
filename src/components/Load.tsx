import React from 'react'
import styles from "./button.module.css"

export default function Load({ setUselen, children }: { setUselen: Function, children: string }) {
    return (
        <button className={`${styles.load} ${styles.button}`} onClick={() => setUselen((prev: number) => (prev + 5))}>{children}</button>
    )
}
