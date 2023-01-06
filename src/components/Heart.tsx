import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

interface Props {
  icon: string
  alt: string
  onFavourite?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

const Heart: FC<Props> = ({ onFavourite, icon, alt }) => {
  return <HeartIcon src={icons[icon]} alt={alt} />
}

const HeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
})

export default Heart
