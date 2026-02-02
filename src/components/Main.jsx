import Product from "./Product";
function Main(){
    return(
        <>
        <main>
        <h1>Product</h1>
        
        <div className="product-list">
        <Product nama="Kursi gaming Fantech" harga="2.350.000" />
        <Product nama="Poco X6 Pro" harga="4.999.000" />
        <Product nama="SSD Seagate 1TB Gen 4" harga="2.450.000" />
        </div>
        
        </main>
        </>
    )
}

export default Main