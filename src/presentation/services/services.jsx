import Cards from "./components/cards"
import servicesData from "./const/services-data"
import styles from "./styles.module.css"

export default function Services() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h1 className={styles.title}>Nuestros Servicios</h1>
                <p className={styles.subtitle}>
                    Ofrecemos soluciones profesionales de detailing para mantener tu vehículo impecable.
                </p>
            </div>

            <div className="container">
                <div className={styles.grid}>
                    {servicesData.map((service) => (
                        <Cards key={service.id} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
