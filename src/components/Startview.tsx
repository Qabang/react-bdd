import ProductCard from './ProductCard'
import { Product } from '../models/product'
import { Link } from 'react-router-dom'
import SearchBox from './search/SearchBox'
import { useState } from 'react'

function Startview(props: { products: Array<Product> }) {
  const products = props.products
  const [searchText, setSearchText] = useState('')
  const filteredProducts = products.filter((product) =>
    product.name.includes(searchText)
  )
  return (
    <>
      <h1>Våra produkter</h1>
      <SearchBox
        searchValue={searchText} setSearchValue={setSearchText} />
      {filteredProducts.map((product, id) => (
        <Link key={product.id} to={`product/${product.id}`} >
          <ProductCard
            id={product.id}
            name={product.name}
            price={product.price}
          />
        </Link>
      ))}
    </>
  )
}

export default Startview
