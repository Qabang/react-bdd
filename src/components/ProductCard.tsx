interface products {
  id: number,
  name: string,
  price: number
}
function ProductCard({ id, name, price }: products) {

  return (<ul>
    <li>{id}</li>
    <li>{name}</li>
    <li>{price}</li>
  </ul>)
}

export default ProductCard