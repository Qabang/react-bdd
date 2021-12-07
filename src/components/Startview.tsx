import ProductCard from './ProductCard'

interface products {
  id: number,
  name: string,
  price: number
}

function Startview() {
  const products: products[] = [
    {
      id: 1,
      name: "Eyeliner",
      price: 199
    },
    {
      id: 2,
      name: "Waterproof Mascara",
      price: 225
    },
    {
      id: 3,
      name: "Mascara",
      price: 205
    },
    {
      id: 4,
      name: "Blush",
      price: 145
    },
    {
      id: 5,
      name: "Powder brush",
      price: 185
    },
    {
      id: 6,
      name: "Eye Palette",
      price: 445
    },
    {
      id: 7,
      name: "Lip Gloss",
      price: 138
    },
    {
      id: 8,
      name: "Makeup Bag",
      price: 285
    },
    {
      id: 9,
      name: "Foundation",
      price: 280
    },
    {
      id: 10,
      name: "Makeup Sponge",
      price: 95
    }
  ]

  //products.map((product) => console.log(product))
  return <>
    <h1>Våra produkter</h1>
    <input type="text" />
    {products.map((product, id) => (
      <ProductCard key={id} id={product.id} name={product.name} price={product.price} />
    ))}
  </>
}

export default Startview

