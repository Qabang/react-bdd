import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import StartView from '../components/Startview'

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

describe('test for /Startview', () => {
  test('Render Startview component', () => {
    render(<BrowserRouter><StartView products={product} /></BrowserRouter>)
  })

})
