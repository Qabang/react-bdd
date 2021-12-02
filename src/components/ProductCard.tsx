interface products {
  id: number,
  name: string,
  price: number
}
function ProductCard({ id, name, price }: products) {

  // const  id = productData.id
  return (<ul>
    <li>{id}</li>
    <li>{name}</li>
    <li>{price}</li>
  </ul>)
}

export default ProductCard