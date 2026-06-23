import styles from "./styles.module.css"
export default function Home() {
    return (
        <main className={styles.container}>
            <section>
                <h2 className={styles.text__title_one}>PASIÓN</h2>
                <h2 className={styles.text__title_two}>POR CADA</h2>
                <h2 className={styles.text__title_three}>DETALLE.</h2>
            </section>
            <hr />
            <section className={styles.section__info}>
                <div className={styles.container__info}>
                    <h3 className={styles.text__info}>+200</h3>
                    <p className={styles.text__info_description}>Autos trabajados</p>
                </div>
                <div className={styles.container__info + " "  + styles.info__bar_left}>
                    <h3 className={styles.text__info}>3+</h3>
                    <p className={styles.text__info_description}>Años de experiencia</p>
                </div>
                <div className={styles.container__info + " "  + styles.info__bar_left}>
                    <h3 className={styles.text__info}>100%</h3>
                    <p className={styles.text__info_description}>Clientes satisfechos</p>
                </div>
                <div className={styles.container__info + " "  + styles.info__bar_left}>
                    <h3 className={styles.text__info}>2</h3>
                    <p className={styles.text__info_description}>Especialidades</p>
                </div >
            </section >
    <section>
        <div>
            <p className={styles.text__about_us}>Somos un emprendimiento dedicado al cuidado y estética automotriz.
                Trabajamos cada vehículo como si fuera propio. </p>
        </div>
        <button className={styles.button}>
            <p>CONSULTAR →</p></button>
    </section>
        </main >
    )
}
