import ContactForm from "./components/contact-form"
import styles from "./styles.module.css"

export default function Contactos() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h1 className={styles.title}>Contacto</h1>
                <p className={styles.subtitle}>
                    Estamos listos para ayudarte. Escribinos y te respondemos a la brevedad.
                </p>
            </div>

            <div className="container">
                <div className={styles.grid}>
                    <ContactForm />

                    <div className={styles.info}>
                        <h3 className={styles.infoTitle}>También podés contactarnos por</h3>

                        <a
                            href="https://wa.me/5491140634484"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.infoCard}
                        >
                            <i className="bi bi-whatsapp"></i>
                            <div>
                                <strong>WhatsApp</strong>
                                <span>11 4063-4484</span>
                            </div>
                        </a>

                        <a
                            href="https://www.instagram.com/vgesteticavehicular"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.infoCard}
                        >
                            <i className="bi bi-instagram"></i>
                            <div>
                                <strong>Instagram</strong>
                                <span>@vgesteticavehicular</span>
                            </div>
                        </a>

                        <div className={styles.infoCard}>
                            <i className="bi bi-envelope-fill"></i>
                            <div>
                                <strong>Email</strong>
                                <span>vgesteticavehicular@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
