import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Search from './Search'

const App: FC = () => {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '50%',
  paddingTop: '60px',
})

export default App
