import React from 'react'
import { shallow } from 'enzyme'
import Home from './index'

describe('<Home />', () => {
  it('renders without crashing', () => {
    shallow(<Home />)
  })

  it('renders input', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('renders no target currency', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.small-text')).toHaveLength(1)
  })
})
