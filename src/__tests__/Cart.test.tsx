
import { render, screen } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import Cart from '../components/Cart'

const mockRemoveFromCart = jest.fn()

const products = [
  {
    id: 1,
    name: 'Bahama Mama Bronzer',
    price: 149,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, illo eum ducimus, sunt deserunt qui esse facilis dolore perferendis autem necessitatibus aspernatur cumque molestiae distinctio numquam quaerat, velit dolores corporis?',
    image: '',
  },
  {
    id: 2,
    name: 'React logo',
    price: 9999,
    description: 'Rare collectors edition',
    image: '/logo192.png',
  },
]

describe('Test for Cart', ()=> {
  test('Should Render Cart component', ()=>{
    render(<Cart products={products} removeFromCart={mockRemoveFromCart}/>)
  })

  test('Should Render the text "Kundvagn"', ()=>{
    render(<Cart products={products} removeFromCart={mockRemoveFromCart}/>)
    expect(screen.getByText(/Kundvagn/i)).toBeInTheDocument()
  })
  
  test('Should Render the text "Inga produkter" if there is no items in the cart', ()=>{
    render(<Cart products={[]} removeFromCart={mockRemoveFromCart}/>)
    expect(screen.getByText(/Inga produkter/i)).toBeInTheDocument()
  })
  
  test('Should Render the item\'s names when there is 2 items in the cart', ()=>{
    render(<Cart products={products} removeFromCart={mockRemoveFromCart}/>)
    expect(screen.getByText(/Bahama mama bronzer/i)).toBeInTheDocument()
    expect(screen.getByText(/React logo/i)).toBeInTheDocument()
  })

  test('Should Render the items in an unordered list', ()=>{
    const wrapper = shallow(<Cart products={products} removeFromCart={mockRemoveFromCart}/>)
    expect(wrapper.find('li').length).toBe(2)
  })

  test('Should Render a delete "button" to each item in the cart', ()=>{
    const wrapper = shallow(<Cart products={products} removeFromCart={mockRemoveFromCart}/>)
    expect(wrapper.find('[data-test="delete-button"]').length).toBe(2)
  })

  test('Should Render the total sum of the products.', ()=>{
    const wrapper = shallow(<Cart products={products} removeFromCart={mockRemoveFromCart}/>)
    const total = products[0].price + products[1].price
    expect(wrapper.find('[data-test="cart-items-total"]').text()).toBe(total.toString())
  })

  test('Trigger the delete function on the first item in the cart, It should return the index of the item about to be deleted.', () => {
    const wrapper = mount(<Cart products={products} removeFromCart={mockRemoveFromCart}/>)
    const btn = wrapper.find('button[data-test="delete-button"]').first()
    btn.simulate('click')
    expect(mockRemoveFromCart.mock.calls.length).toBe(1)
    expect(mockRemoveFromCart.mock.calls[0][0]).toEqual(0)
  })
})
