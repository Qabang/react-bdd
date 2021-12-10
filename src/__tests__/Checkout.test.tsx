import { render, screen } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import Checkout from '../components/Checkout'

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

const mockSubmitorder = jest.fn()

describe('Test for Checkout', ()=> {
  test('Should render Checkout component', ()=>{
    render(<Checkout products={products} sendOrder={mockSubmitorder} msg=''/>)
  })

  test('Should render the text "Checkout"', ()=>{
    render(<Checkout products={products} sendOrder={mockSubmitorder} msg=''/>)
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument()
  })

  
  test('Check if sendOrder has been called after click.', () => {
    const expected = 'Din order har lagts. Tack för ditt köp!'
    const wrapper = mount(
      <Checkout products={products} sendOrder={mockSubmitorder} msg=''/>
    )
    const btn = wrapper.find('button[data-test="submit-order"]')
    btn.simulate('click')
    expect(mockSubmitorder.mock.calls.length).toBe(1)
    expect(mockSubmitorder.mock.calls[0][0]).toEqual(expected)
  })
})
