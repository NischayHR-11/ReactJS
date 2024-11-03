import Product from "./product";
import "./productList.css"

function ProductList(){

    return (
        <div className="List">
        <Product/>
        <Product/>
        <Product/>
        </div>
    )
}

export default ProductList;