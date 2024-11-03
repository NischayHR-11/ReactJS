import Title from "./Title";
import { Description } from './description.jsx';
import "./product.css"
 
function Product(){

    return(

        <div className="product">
            <Title/>
            <Description/>
        </div>
    )
}

export default Product;