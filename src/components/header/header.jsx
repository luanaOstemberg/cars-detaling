import { NavLink } from "react-router";
import linksHeader from "./const/links-header";
import styles from "./styles.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                CARS DETALING
            </h1>
            <nav className={styles.nav}>
                {
                    linksHeader.map((v, i) => (
                        <div key={i} className={styles.container__link}>
                            <NavLink
                                className={({ isActive }) => isActive ? styles.link__active : styles.link}
                                to={v.path}
                            >
                                {({ isActive }) =>
                                (
                                    <>
                                        {v.text}
                                        <div className={isActive ? styles.bar : ""}></div>
                                    </>
                                )}
                            </NavLink>
                        </div>
                    ))
                }
            </nav>
        </header>
    );
}