import './App.css'
// Title component
import Title from "./Title.jsx"
// comment component
import { Description } from './description.jsx'
// Product componenet
import Product from './product.jsx'
import ProductList from './productList.jsx'

function App() {

  return (
    // Each component can return only one Element
    // no extra div created (Recat Fragment).
    <> 
      <ProductList name1="Mobile" name2="Television" name3="Laptop"/>                                   
      <h1>HI Hellooo I Am Nischay</h1>
    </>
  )
}

export default App
