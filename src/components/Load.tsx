import React from 'react';
import styles from "./button.module.css";

export default function Load({ setUselen, children }: { setUselen: Function, children: string }) {
    return (

        // The load more button to add five more users to the previous list of displayed users from the total numbers of users.
        <button className={`${styles.load} ${styles.button}`} onClick={() => setUselen((prev: number) => (prev + 5))}>{children}</button>
    );
}
