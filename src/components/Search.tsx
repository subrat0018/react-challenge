import React, { useState } from 'react'
import styled from '@emotion/styled'
import Favourite from './FavouriteIcon'
import Favourites from './Favourites'
import Heart from './Heart'

const Search = () => {
  const [keyword, setKeyword] = useState<string>('')
  const [dogs, setDogs] = useState<string[]>([])

  const [favourites, setfavourites] = useState<string[]>([])

  const handleSubmit = async () => {
    const breeds: string[] = await fetch(`https://dog.ceo/api/breeds/list/all`)
      .then((response) => response.json())
      .then((data) => Object.keys(data.message))

    if (breeds.includes(keyword)) {
      await fetch(`https://dog.ceo/api/breed/${keyword}/images`)
        .then((response) => response.json())
        .then((data) => setDogs(data.message.slice(0, 10)))
    } else {
      setDogs([])
    }
  }

  const addFavourites = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    dogImageLink: string,
  ) => {
    event.preventDefault()

    const isDogPresent: boolean = favourites.includes(dogImageLink)

    if (!isDogPresent) {
      setfavourites([...favourites, dogImageLink])
    } else {
      setfavourites(favourites.filter((favourite) => favourite !== dogImageLink))
    }
  }

  return (
    <Container>
      <Wrapper>
        <Input
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          id="search"
          name="search"
          value={keyword}
          placeholder="Search..."
        />
        <SearchButton onClick={handleSubmit}>
          <Heart icon="searchIcon" alt="Search" />
          <span style={{ marginLeft: '5px' }}>Search</span>
        </SearchButton>
      </Wrapper>
      <ImageContainer>
        {dogs.length > 0 ? (
          dogs.map((dog) => (
            <ImageDiv>
              {' '}
              <img key={dog} src={dog} />
              <Favourite
                onFavourite={(e) => addFavourites(e, dog)}
                icon={favourites.includes(dog) ? 'redHeartIcon' : 'whiteHeartIcon'}
                alt={favourites.includes(dog) ? 'Favourite Dog' : 'Not Favorite Dog'}
              />
            </ImageDiv>
          ))
        ) : (
          <Title>Enter a Breed in search box</Title>
        )}
      </ImageContainer>
      <Divider />
      <Favourites favourites={favourites} addFavourites={addFavourites} />
    </Container>
  )
}

const Container = styled.div({
  width: '100%',
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const Wrapper = styled.div({
  width: '100%',
  display: 'flex',
  borderRadius: '10%',
})

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '20px',
  lineHeight: '33px',
  textAlign: 'left',
})

const Input = styled.input({
  width: '100%',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '5px',
  paddingRight: '5px',
  borderRadius: '1%',
  backgroundColor: '#F7F7F7',
  border: 'none',
  '&:focus': {
    border: 'none',
  },
})

const SearchButton = styled.button({
  paddingLeft: '10px',
  paddingRight: '10px',
  backgroundColor: '#0794E3',
  border: 'none',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
})

const ImageContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  gap: '30px',
  marginTop: '50px',
})

const ImageDiv = styled.div({
  position: 'relative',
  width: '180px',
  height: '180px',
})

const Divider = styled.div({
  width: '100%',
  marginTop: '100px',
  marginBottom: '20px',
  borderTop: '2px solid #DADADA',
})

export default Search
