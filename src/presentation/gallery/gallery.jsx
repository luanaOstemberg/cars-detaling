import { useState } from "react"
import styles from "./styles.module.css"

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY

export default function Gallery() {
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchRandomImage() {
        setLoading(true)
        try {
            const res = await fetch(
                "https://api.pexels.com/v1/search?query=car+interior&per_page=30",
                { headers: { Authorization: API_KEY } }
            )
            const data = await res.json()
            const random = data.photos[Math.floor(Math.random() * data.photos.length)]
            setImage(random.src.large2x)
        } catch {
            console.error("Error al obtener imagen de Pexels")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="container py-5 text-center">
            <h2 className="mb-4">Galería</h2>

            <button className="btn btn-primary mb-4" onClick={fetchRandomImage} disabled={loading}>
                {loading ? (
                    <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" />
                        Cargando...
                    </>
                ) : (
                    "Obtener imagen aleatoria"
                )}
            </button>

            {image && (
                <div className={styles.imageWrapper}>
                    <img src={image} alt="Interior de vehículo" className={styles.image} />
                </div>
            )}
        </section>
    )
}
