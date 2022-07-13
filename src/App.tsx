import { useEffect, useState } from 'react'
import { CardList } from './components/CardList/CardList'
import './App.css'
import { CardProps } from './components/Card/Card'

import axios from 'axios'

function App() {
  const [cards, setCards] = useState<Array<CardProps>>([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0").then(response => {
      console.log(response.data)
      const pokemonList = response.data.results;
      setCards([...pokemonList])
    }).catch(error => { console.error(error) })
  }, [])

  return (
    <div className="App">
      <CardList cards={cards} />
    </div>
  )
}

export default App
