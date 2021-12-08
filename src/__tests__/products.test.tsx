import { render, screen } from '@testing-library/react'
import ProductDetails from '../components/ProductDetails'
import { mount, shallow } from 'enzyme'

// Mock a single product[0].
const product = [
  {
    id: 1,
    name: 'Bahama Mama Bronzer',
    price: 149,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, illo eum ducimus, sunt deserunt qui esse facilis dolore perferendis autem necessitatibus aspernatur cumque molestiae distinctio numquam quaerat, velit dolores corporis?',
    image: '',
  },
]

// Mock a single product with an image.
const productWithImage = [
  {
    id: 1,
    name: 'React logo',
    price: 9999,
    description: 'Rare collectors edition',
    image: '/logo192.png',
  },
]

const mockAddToCart = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '1',
  }),
  useRouteMatch: () => ({ url: '/product/1' }),
}))

describe('tests for detail view of products', () => {
  test('Should render ProductDetails component, (smoke-test)', () => {
    render(<ProductDetails products={product} addToCart={mockAddToCart} />)
  })

  // Blackbox tests
  test('Product should render the product name "Bahama Mama Bronzer"', () => {
    render(<ProductDetails products={product} addToCart={mockAddToCart} />)
    expect(screen.getByText(product[0].name)).toBeInTheDocument()
  })

  test('Product should render the price label', () => {
    render(<ProductDetails products={product} addToCart={mockAddToCart} />)
    expect(screen.getByText(/Pris:/)).toBeInTheDocument()
  })

  test('Product should render the price value', () => {
    render(<ProductDetails products={product} addToCart={mockAddToCart} />)
    expect(
      screen.getByText(product[0].price, { exact: false })
    ).toBeInTheDocument()
  })

  test('Product price should not be less than 0', () => {
    expect(product[0].price).not.toBeLessThan(0)
  })

  //Whitebox tests
  test('product title should be rendered in an h2 element', () => {
    const wrapper = shallow(
      <ProductDetails products={product} addToCart={mockAddToCart} />
    )
    expect(wrapper.find('h2[data-test="product-title"]').length).toBe(1)
  })

  test('if product has no image it should render text "No image Found"', () => {
    const wrapper = shallow(
      <ProductDetails products={product} addToCart={mockAddToCart} />
    )
    expect(wrapper.find('[data-test="product-image"]').length).toBe(1)
    expect(wrapper.find('[data-test="product-image"]').text()).toEqual(
      expect.stringMatching(/No image found/i)
    )
  })

  test('if product has an image it should render it in an img element"', () => {
    const wrapper = mount(
      <ProductDetails products={productWithImage} addToCart={mockAddToCart} />
    )
    expect(
      wrapper.find('[data-test="product-image"]').childAt(0).type()
    ).toEqual('img')
  })

  test('Check if "add to cart" button exists', () => {
    const wrapper = shallow(
      <ProductDetails products={product} addToCart={mockAddToCart} />
    )
    expect(wrapper.find('button[data-test="product-add"]').length).toBe(1)
  })

  test('Check if HandleAddToCart has been called after click.', () => {
    // TODO make better!

    const wrapper = mount(
      <ProductDetails products={product} addToCart={mockAddToCart} />
    )

    const btn = wrapper.find('button[data-test="product-add"]')
    btn.simulate('click')
    expect(mockAddToCart.mock.calls.length).toBe(1)
    expect(mockAddToCart.mock.calls[0][0]).toEqual(product[0])
  })
})
