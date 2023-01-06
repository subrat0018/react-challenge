import * as React from 'react'
import { shallow } from 'enzyme'
import Favourites, { Props } from './Favourites'

describe('<Favourites />', () => {
  const mockProps = {
    favourites: [
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10832.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_10982.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_11006.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_11172.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_11182.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_1126.jpg',
      'https://images.dog.ceo/breeds/hound-afghan/n02088094_1128.jpg',
    ],
    addFavourites: (
      event: React.MouseEvent<HTMLImageElement, MouseEvent>,
      dogImageLink: string,
    ) => {
      console.log(event, dogImageLink)
    },
  }

  it('renders without crashing', () => {
    shallow(<Favourites {...mockProps} />)
  })

  it('renders the correct icon', () => {
    const wrapper = shallow(<Favourites {...mockProps} />)
    expect(wrapper.prop('addFavourites')).toBe(mockProps.addFavourites)
  })
})
