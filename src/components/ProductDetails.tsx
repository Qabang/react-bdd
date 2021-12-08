import { useEffect, useState } from 'react'
import { Product } from '../models/product'
import { useParams } from 'react-router-dom'

function ProductDetails(props: {
  products: Array<Product>
  addToCart: (product: Product) => any //TODO should probably not be any...
}) {
  const { id } = useParams()
  const [image, setImage]: any = useState('No image found')
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
  })

  useEffect(() => {
    props.products.map((item) => {
      if (item.id.toString() === id) {
        const prod = {
          id: item.id,
          name: item.name,
          price: item.price,
          description: item.description,
          image: item.image,
        }

        if (item.image) {
          setImage(<img src={item.image} alt={item.name} />)
        }
        return setProduct(prod)
      }
    })
  }, [id])

  function handleAddToCart() {
    console.log('Handle add to cart:', product)
    // Pass product to app.tsx.
    return props.addToCart(product)
  }

  return (
    <>
      <h2 data-test="product-title">{product.name}</h2>
      <section data-test="product-image">{image}</section>
      <div>
        Pris: <span data-test="product-price">{product.price}</span>kr
      </div>
      <button data-test="product-add" onClick={handleAddToCart}>
        Add to cart
      </button>
    </>
  );
}

export default ProductDetails;
