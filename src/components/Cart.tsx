function Cart(props: {
  products: object[]
  removeFromCart: (index: number) => void
}) {
  const products = props.products
  let sum = 0

  products.map((product: any) => {
    return (sum += product.price)
  })

  return (
    <>
      <section>
        <h2>Kundvagn</h2>
        {products.length > 0 && (
          <ul>
            {products.map((product: any, index: number) => (
              <div key={product.id}>
                <li>{product.name}<span>{product.price}</span></li>
                
                <button
                  data-test="delete-button"
                  onClick={() => {
                    props.removeFromCart(index)
                  }}
                >
                  Tabort
                </button>
              </div>
            ))}
            <div>
              Totalt: <span data-test="cart-items-total">{sum}</span>
            </div>
          </ul>
        )}
        {products.length === 0 && 'Det finns inga produkter här än.'}
      </section>
    </>
  )
}

export default Cart
