export default function Cards({ img, title, subtitle, btnText, btnAction }) {
    return (
        <div className="card" style={{
            width: "18rem",
        }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{subtitle}</p>
                <a href="#" className="btn btn-primary" onClick={btnAction}>{btnText}</a>
            </div>
        </div>
    )
}