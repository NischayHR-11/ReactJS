import Title from "./Title";
import { Description } from './description.jsx';
import "./product.css"
 
function Product({name,price=1,features}){
    
    // Altering The Array Elements With Li.
    const list= features.map((feature)=><li>{feature}</li>);
    // Dynamic Styling with conditions.
    const styles={backgroundColor: price>=30000?"green":null};

    return(
        <div className="product" style={styles}>
            <Title name={name}/>
            <Description price={price}/>
            <p>{list}</p>
            {/* conditional Statements */}
            {price >= 30000?<p>" 5% Discount.."</p>:null}     
        </div>
    )
}

export default Product;