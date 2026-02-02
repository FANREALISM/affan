const Product = ({nama, harga}) => {
    return(
        <>
            <div className="card h-100" style={{width: "18rem"}}>
                <img src="https://placehold.co/600x400" className="card-img-top" alt={nama} />
                <div className="card-body">
                    <h5 className="card-title">{nama}</h5>
                    <p className="card-text">Rp {harga},-</p>
                </div>
            </div>
        </>
    )
}

export default Product