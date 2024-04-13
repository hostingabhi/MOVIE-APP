import React from "react";
import styles from "./Navbar.module.css";

export default class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className={styles.nav}>
                    <div className={styles.title}>Movie App Nav 2</div>
                    <div className={styles.cartContainer}>
                        <img className={styles.cartIcon} alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/3737/3737372.png" />
                        <span className={styles.cartCount} style={{ background: "yellow" }}>0</span>
                    </div>
                </div>
            </>
        )
    }
}
