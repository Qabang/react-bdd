import { useState } from 'react'

function Checkout(props: { products: object[],  sendOrder: (msg: string) => void, msg:string }) {
  const [customerValues, setCustomerValues]: any = useState({
    firstname: 'Test',
    lastname: 'Person',
    adress: 'Example Street',
    zip: '12345',
    city: 'Göteborg',
  })

  let sum = 0

  props.products.map((product: any) => {
    return (sum += product.price)
  })

  return (
    <>
      {!props.msg && (
        <>
          <h2>Checkout</h2>
          <div>
            adress info:
            <ul>
              <li>
                {customerValues.firstname + ' ' + customerValues.lastname}
              </li>
              <li>{customerValues.adress}</li>
              <li>{customerValues.zip + ' ' + customerValues.city}</li>
            </ul>
          </div>
          <div>
            dina varor:
            {props.products.map((product: any) => (
              <div key={product.id}>
                <li>
                  {product.name}
                  <span>{product.price}</span>
                </li>
              </div>
            ))}
          </div>
          frakt: 49kr <br />
          summa: {sum + 49} kr
          <button
            onClick={() => {
              props.sendOrder(`Din order har lagts. Tack för ditt köp!`)
            }}
            data-test="submit-order"
          >
            Bekräfta köp
          </button>
        </>
      )}
      {props.msg &&  props.msg }
    </>
  )
}

export default Checkout
