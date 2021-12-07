import { product } from '../models/product'
interface Props {
  product: product
}

function ProductDetails({ product }: Props) {
  const image = product.image ? (
    <img src={product.image} alt={product.name} />
  ) : (
    'No image found'
  )

  function handleAddToCart() {
    console.log('Handle add to cart.')
    // TODO: Logic for add to cart.
    return true
  }

  return (
    <>
      <h2 data-test="product-title">{product.name}</h2>
      <section data-test="product-image">{image}</section>
      <div>
        Pris: <span data-test="product-price">{product.price}</span>kr
      </div>
      <button data-test="product-add" onClick={handleAddToCart}>Add to cart</button>
    </>
  )
}

export default ProductDetails
