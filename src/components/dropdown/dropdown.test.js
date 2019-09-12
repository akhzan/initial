import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from './index'

describe('<Dropdown />', () => {
  it('renders without crashing', () => {
    shallow(<Dropdown />)
  })

  it('renders dropdown', () => {
    const wrapper = shallow(<Dropdown />)
    expect(wrapper.find('.dropdown')).toHaveLength(1)
  })

  it('renders the title', () => {
    const wrapper = shallow(<Dropdown title="unique" />)
    expect(wrapper.text()).toContain('unique')
  })

  it('renders only 1 button', () => {
    const wrapper = shallow(<Dropdown />)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('renders 3 button (title and options) when options are available', () => {
    const wrapper = shallow(<Dropdown options={({ USD: 1, IDR: 1 })} />)
    expect(wrapper.find('button')).toHaveLength(3)
  })
})
