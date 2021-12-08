import ProductCard from './ProductCard'
import {Product} from '../models/product'
import { Link } from 'react-router-dom'

function Startview(props: {products:Array<Product>}) {
  const products = props.products
  //products.map((product) => console.log(product))
  return <>
    <h1>Våra produkter</h1>
    <input type="text" />
    {products.map((product, id) => (
    <Link key={product.id} to={`product/${product.id}`}>
      <ProductCard id={product.id} name={product.name} price={product.price} />
      </Link>
    ))}
  </>
}

export default Startview;
