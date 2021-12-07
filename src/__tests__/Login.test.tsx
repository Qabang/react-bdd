import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';

import Login from '../components/Login';

describe('test for /login', () => {
  test('Render login component', () => {
    render(<Login />)
  })

  test('Component renders text Användarnamn', () => {
    render(<Login />)
    const stringValue = screen.getByText(/Användarnamn/i)
    expect(stringValue).toBeInTheDocument()
  })

  test('Component renders text Lösenord', () => {
    render(<Login />)
    const stringValue = screen.getByText(/Lösenord/i)
    expect(stringValue).toBeInTheDocument()
  })

  test('Component renders 2 input fields', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(2)
  })

  test('Component renders a button element with id loginBtn', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('#loginBtn').length).toBe(1)
  })

  test('Submit login with with no username and password, should create/display error string', () => {
    const expectedText = 'Fel användarnamn eller lösenord'
    const wrapper = shallow(<Login />)
    const button = wrapper.find('#loginBtn')
    expect(button.length).toBe(1)
    button.simulate('click')
    expect(wrapper.text().includes(expectedText)).toBe(true)
  })

  test('Submit login with wrong username and password, should create/display error string', () => {
    const expectedText = 'Fel användarnamn eller lösenord'

    const wrongUsername = 'username'
    const wrongPassword = 'supersafepassword'
    const wrapper = shallow(<Login />)

    const inputUsername = wrapper.find('#inputUsername')
    const inputPassword = wrapper.find('#inputPassword')

    expect(inputPassword.length).toBe(1)
    expect(inputUsername.length).toBe(1)

    inputUsername.simulate('change', { target: { value: wrongUsername } })
    inputPassword.simulate('change', { target: { value: wrongPassword } })

    wrapper.find('#loginBtn').simulate('click')
    expect(wrapper.text().includes(expectedText)).toBe(true)
  })

  test('Submit login with correct username and password.', () => {
    const expectedText = 'Välkommen Niclas'
    const correctUsername = 'Niclas'
    const correctPassword = 'Niclas123'
    const wrapper = shallow(<Login />)

    const inputUsername = wrapper.find('#inputUsername')
    const inputPassword = wrapper.find('#inputPassword')

    expect(inputPassword.length).toBe(1)
    expect(inputUsername.length).toBe(1)

    inputUsername.simulate('change', { target: { value: correctUsername } })
    inputPassword.simulate('change', { target: { value: correctPassword } })

    wrapper.find('#loginBtn').simulate('click')
    expect(wrapper.text().includes(expectedText)).toBe(true)
  })



})

