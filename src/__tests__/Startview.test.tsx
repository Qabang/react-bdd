import { render } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import StartView from '../components/Startview';

describe('test for /Startview', () => {
  test('Render Startview component', () => {
    render(<StartView />)
  })
  test('Component renders 1 SearchBox', () => {
    const wrapper = shallow(<StartView />);
    expect(wrapper.find('SearchBox').length).toBe(1)
  })
  test('Search "Mascara", should render 2 products', () => {
    const wrapper = mount(<StartView />);
    const serchText = 'Mascara'
    const serachField = wrapper.find('[data-test="searchProduct"]')

    serachField.simulate('change', { target: { value: serchText } })
    expect(wrapper.find('[data-test="resultProduct"]').length).toBe(2)
  })
})