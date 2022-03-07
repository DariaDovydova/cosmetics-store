function Buttons({filteredButtons}) {
    return (
        <div className="container-btn">
            <button className="btn" onClick={() => filteredButtons("hair")}>Волосы</button>
            <button className="btn" onClick={() => filteredButtons("face")}>Лицо</button>
            <button className="btn" onClick={() => filteredButtons("body")}>Тело</button>
        </div>
    )
}

export default Buttons;