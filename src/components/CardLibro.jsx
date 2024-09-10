function CardLibro({...data}) {
    const {name,description}= data.data

    return (
        <div className="col">
            <div className="card h-100">
                <img src="https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder-300x300.png" style={{maxHeight: '250px',  objectFit: 'cover'}} className="card-img-top" alt="..."/>
                <div className="card-body"  style={{overflowY: 'auto', maxHeight: '300px'}}>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardLibro;