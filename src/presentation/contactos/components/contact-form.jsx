import { useState } from "react"
import styles from "../styles.module.css"

const initialForm = { name: "", email: "", message: "" }

export default function ContactForm() {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState("idle")

    function handleChange(e) {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    function validate() {
        const newErrors = {}
        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio"
        if (!form.email.trim()) {
            newErrors.email = "El email es obligatorio"
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Email inválido"
        }
        if (!form.message.trim()) newErrors.message = "El mensaje es obligatorio"
        return newErrors
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const validationErrors = validate()
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) return

        setStatus("sending")
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setStatus("sent")
        setForm(initialForm)
    }

    if (status === "sent") {
        return (
            <div className={styles.success}>
                <i className="bi bi-check-circle-fill"></i>
                <h3>¡Mensaje enviado!</h3>
                <p>Te responderemos a la brevedad.</p>
                <button className={styles.successBtn} onClick={() => setStatus("idle")}>
                    Enviar otro mensaje
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className={styles.field}>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? styles.inputError : ""}
                />
                <label htmlFor="name">Nombre</label>
                {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <div className={styles.field}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Tu email"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? styles.inputError : ""}
                />
                <label htmlFor="email">Email</label>
                {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.field}>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Escribí tu mensaje"
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? styles.inputError : ""}
                />
                <label htmlFor="message">Mensaje</label>
                {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>
        </form>
    )
}
