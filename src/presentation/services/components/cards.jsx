import { useState, useEffect } from "react"
import { Link } from "react-router"
import styles from "../styles.module.css"

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY

export default function Cards({ title, subtitle, query, icon, btnText }) {
    const [img, setImg] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let cancelled = false

        async function fetchImage() {
            try {
                const res = await fetch(
                    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=5`,
                    { headers: { Authorization: API_KEY } }
                )
                const data = await res.json()
                if (!cancelled && data.photos?.length > 0) {
                    const random = data.photos[Math.floor(Math.random() * data.photos.length)]
                    setImg(random.src.large2x)
                }
            } catch {
                console.error(`Error fetching image for: ${title}`)
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        fetchImage()
        return () => { cancelled = true }
    }, [query, title])

    return (
        <article className={styles.card}>
            <div className={styles.cardImage}>
                {loading ? (
                    <div className={styles.skeleton} />
                ) : (
                    <img src={img} alt={title} />
                )}
                <div className={styles.cardIcon}>
                    <i className={`bi ${icon}`}></i>
                </div>
            </div>

            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{subtitle}</p>
                <Link to="/contacto" className={styles.cardBtn}>{btnText}</Link>
            </div>
        </article>
    )
}
