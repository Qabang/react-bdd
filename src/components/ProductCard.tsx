interface products {
  id: number,
  name: string,
  price: number
}
interface Props {

}

function ProductCard({ id, name, price }: products) {
  function showProduct(props: Props) {
    let id = props

    console.log(id)
  }
  return (<ul onClick={() => showProduct(id)} >
    <li>{id} - {name} {price} sek </li>

  </ul>)
}

export default ProductCard