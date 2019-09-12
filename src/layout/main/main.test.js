import React from 'react'
import { shallow } from 'enzyme'
import Main from './index'

describe('<Dropdown />', () => {
  it('renders without crashing', () => {
    shallow(<Main />)
  })

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Main>
        <div className="unique" />
      </Main>
    ))
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  })
})
