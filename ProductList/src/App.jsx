import './App.css'
import Product from './product';

function ProductTab({features}){

  const styles= {display:"flex",alignitems:"center",justifyContent:"center",height:"100vh",marginTop:"5rem"}

  return(
  <div className="tab" style={styles}>
    <Product title="Mobile" features={features} oldprice={20000} newprice={10000} />
    <Product title="Laptop" features={features} oldprice={40000} newprice={30000} />
    <Product title="Television" features={features} oldprice={60000} newprice={50000}/>
  </div>
  );
}

function App() {

  const styles ={display:"flex",alignitems:"center",justifyContent:"center",marginTop:"2rem"}
  return (
    <>
     <h1 style={styles} >Blockbuster Deals On Electronic Accessories | shop Now</h1>
     <ProductTab features={["Best","Durable","Low Price"]}/> 
    </>
  )
}

export default App
