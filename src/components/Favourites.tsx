import styled from '@emotion/styled'
import React, { FC } from 'react'
import Favourite from './FavouriteIcon'
import Heart from './Heart'

export type Props = {
  favourites: string[]
  addFavourites: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    dogImageLink: string,
  ) => void
}

const Favourites: FC<Props> = ({ favourites, addFavourites }) => {
  return (
    <Container>
      <Header>
        <Heart icon="redHeartIcon" alt="red heart icon" />
        <Title>Favourites</Title>
      </Header>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ImageContainer>
          {favourites &&
            favourites.map((favourite) => (
              <ImageDiv>
                {' '}
                <img key={favourite} src={favourite} />
                <Favourite
                  onFavourite={(e) => addFavourites(e, favourite)}
                  icon="redHeartIcon"
                  alt="red heart icon"
                />
              </ImageDiv>
            ))}
        </ImageContainer>
      </div>
    </Container>
  )
}

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  textAlign: 'left',
})

const Header = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginLeft: '10px',
})

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
  marginLeft: '10px',
})

const ImageContainer = styled.div({
  marginTop: '20px',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  gap: '30px',
})

const ImageDiv = styled.div({
  position: 'relative',
  width: '150px',
  height: '150px',
})

export default Favourites
