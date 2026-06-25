import { useState, useEffect, useCallback } from "react"
import styles from "./styles.module.css"

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY

export default function Gallery() {
    const [images, setImages] = useState([])
    const [current, setCurrent] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let cancelled = false

        async function fetchImages() {
            try {
                const res = await fetch(
                    "https://api.pexels.com/v1/search?query=car+detailing&per_page=6",
                    { headers: { Authorization: API_KEY } }
                )
                const data = await res.json()
                if (!cancelled && data.photos?.length > 0) {
                    setImages(data.photos)
                }
            } catch {
                console.error("Error fetching gallery images")
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        fetchImages()
        return () => { cancelled = true }
    }, [])

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % images.length)
    }, [images.length])

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length)
    }, [images.length])

    useEffect(() => {
        if (images.length === 0) return
        const timer = setInterval(next, 4000)
        return () => clearInterval(timer)
    }, [images.length, next])

    if (loading) {
        return (
            <section className={styles.section}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Galería</h2>
                    <p className={styles.subtitle}>Conocé algunos de nuestros trabajos</p>
                </div>
                <div className={styles.skeletonCarousel} />
            </section>
        )
    }

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Galería</h2>
                <p className={styles.subtitle}>Conocé algunos de nuestros trabajos</p>
            </div>

            <div className={styles.carousel}>
                <div className={styles.viewport}>
                    <div
                        className={styles.track}
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {images.map((photo) => (
                            <div key={photo.id} className={styles.slide}>
                                <img src={photo.src.large2x} alt={photo.alt || "Detailing"} />
                            </div>
                        ))}
                    </div>

                    <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev}>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next}>
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>

                <div className={styles.dots}>
                    {images.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
