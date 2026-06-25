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
        // Simular envío
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setStatus("sent")
        setForm(initialForm)
    }

    if (status === "sent") {
        return (
            <div className={styles.success}>
                <i className="bi bi-check-circle-fill fs-1"></i>
                <h3 className="mt-3">¡Mensaje enviado!</h3>
                <p className="text-secondary">Te responderemos a la brevedad.</p>
                <button className="btn btn-outline-primary mt-2" onClick={() => setStatus("idle")}>
                    Enviar otro
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Tu email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    placeholder="Escribí tu mensaje"
                    value={form.message}
                    onChange={handleChange}
                />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={status === "sending"}>
                {status === "sending" ? (
                    <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" />
                        Enviando...
                    </>
                ) : (
                    "Enviar"
                )}
            </button>
        </form>
    )
}
