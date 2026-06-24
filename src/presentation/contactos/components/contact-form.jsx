export default function ContactForm() {
    return (
        <form>
            <h2>Contacto</h2>

            <div>
                <label htmlFor="name">Nombre</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Tu email"
                />
            </div>

            <div>
                <label htmlFor="message">Mensaje</label>
                <textarea
                    id="message"
                    placeholder="Escribí tu mensaje"
                />
            </div>

            <button type="submit">
                Enviar
            </button>
        </form>
    );
}