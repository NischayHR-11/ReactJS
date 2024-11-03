import Product from "./product";
import "./productList.css"

function ProductList({name1,name2,name3}){

    let options=["hi-tech","Durable","Electronical"];
    return (
        <div className="List">
        <Product name={name1} price={20000} features={options}/>
        <Product name={name2} price={30000} features={options}/>
        <Product name={name3} price={40000} features={options}/>
        </div>
    )
}

export default ProductList;