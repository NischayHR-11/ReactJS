import "./product.css"

function Product({title,features,oldprice,newprice}){

    let list= features.map((feature)=><li>{feature}</li>);
    console.log(list);
    return(
    <div className="product">
    <div className="top">
    <h3>{title}</h3>
    <p>{list}</p>
    </div>
    <div className="bottom">
    <p className="oldprice">{oldprice}</p>
    <p>{newprice}</p>
    </div>
    </div>
    );
}

export default Product;