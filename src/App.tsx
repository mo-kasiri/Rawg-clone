import { Grid, GridItem, Show } from '@chakra-ui/react'


import Navbar from './components/NavBar.tsx'
import './App.css'
import GameGrid from './components/GameGrid.tsx'
import GenreList from './components/GenreList.tsx'
import { useState } from 'react'

import { Genre } from './components/GenreList'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`, // 1024px
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr', // 2 column layout (first column 200px, second column takes the remaining space)
      }}
    >

      <GridItem area='nav'><Navbar /></GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX='5px'><GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} /></GridItem>
      </Show>
      <GridItem area="main"><GameGrid selectedGenre={selectedGenre} /></GridItem>
    </Grid>
  )
}

export default App
