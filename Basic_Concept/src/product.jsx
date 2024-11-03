import Title from "./Title";
import { Description } from './description.jsx';
import "./product.css"
 
function Product({name,price=1}){

    return(

        <div className="product">
            <Title name={name}/>
            <Description price={price}/>
        </div>
    )
}

export default Product;