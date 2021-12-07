import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import StartView from '../components/Startview';

describe('test for /Startview', () => {
  test('Render Startview component', () => {
    render(<StartView />)
  })
  test('Component renders 1 input field', () => {
    const wrapper = shallow(<StartView />);
    expect(wrapper.find('input').length).toBe(1)
  })
})