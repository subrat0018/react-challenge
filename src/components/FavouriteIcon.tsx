import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

interface Props {
  icon: string
  alt: string
  onFavourite?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

const Favourite: FC<Props> = ({ onFavourite, icon, alt }) => {
  return <FavouriteIcon onClick={onFavourite} src={icons[icon]} alt={alt} />
}

const FavouriteIcon = styled.img({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  width: '17px',
  height: '15px',
})

export default Favourite
