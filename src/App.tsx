import { Grid, GridItem, Show } from '@chakra-ui/react'


import Navbar from './components/NavBar.tsx'
import './App.css'
import GameGrid from './components/GameGrid.tsx'
import GenreList from './components/GenreList.tsx'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`, // 1024px
    }}>

      <GridItem area='nav'><Navbar /></GridItem>
      <Show above="lg">
        <GridItem area="aside"><GenreList /></GridItem>
      </Show>
      <GridItem area="main"><GameGrid /></GridItem>
    </Grid>
  )
}

export default App
