import Product from "./product";
import "./productList.css"

function ProductList({name1,name2,name3}){

    return (
        <div className="List">
        <Product name={name1} price={20000}/>
        <Product name={name2} price={30000}/>
        <Product name={name3} price={40000}/>
        </div>
    )
}

export default ProductList;