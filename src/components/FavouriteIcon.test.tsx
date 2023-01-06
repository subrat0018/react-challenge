import * as React from 'react'
import { shallow } from 'enzyme'
import Heart from './Heart'
import Favourite from './FavouriteIcon'

describe('<Favourite />', () => {
  const mockProps = {
    icon: 'redHeartIcon',
    alt: 'My fake alt text',
  }

  it('renders without crashing', () => {
    shallow(<Favourite {...mockProps} />)
  })

  it('renders the correct icon', () => {
    const wrapper = shallow(<Heart {...mockProps} />)
    expect(wrapper.prop('alt')).toBe(mockProps.alt)
  })
})
