import { Link } from "react-router";
import styles from "./styles.module.css"
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container__links}>
            
            <Link className={styles.container__link} target="_blank" to={"https://wa.me/5491140634484"}><i class={`bi bi-whatsapp`}></i>
                WhatsApp</Link>
            <Link className={styles.container__link} target="_blank" to={"https://www.instagram.com/vgesteticavehicular"}><i class={` bi bi-instagram`}></i>Instagram</Link>
            </div>
            <p className={styles.text__copy}>&copy; 2026 Todos los derechos reservados.</p>
        </footer>
    )
}