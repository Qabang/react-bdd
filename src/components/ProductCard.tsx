interface products {
  id: number
  name: string
  price: number
}

function ProductCard({ id, name, price }: products) {
  return (
    <ul data-test="resultProduct">
      <li>
        {id} - {name} {price} sek{' '}
      </li>
    </ul>
  )
}

export default ProductCard
