import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./components/Card.jsx"

function App() {
  const [limit, setLimit] = useState(12)
  const [offset, setOffset] = useState(0)
  const [pokemonArr, setPokemonArr] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

      const pokemonData = await Promise.all(
        res.data.results.map(async (pokemon) => {
          const r = await axios(pokemon.url)
          return {
            name: pokemon.name,
            image: r.data.sprites.other["official-artwork"].front_default
          }
        })
      )

      setPokemonArr(pokemonData)
    }
    getData()
  }, [offset])

  return (
    <>
      <div className="p-2 bg-white flex flex-col justify-center items-center flex-wrap gap-2 sm:flex-row">
        {
          pokemonArr.map(({ name, image }, idx) => <Card key={idx} name={name} image={image} />)
        }
      </div>
      <div className="flex items-center justify-center gap-4 p-4">
        <button
          className="
            w-25
            p-2
            text-xl font-medium
            text-white
            bg-green-700
            rounded-sm
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
          disabled={offset === 0}
          onClick={() => { if (offset > 0) setOffset(offset - limit) }}
        >
          Prev
        </button>

        <span className="w-25 text-md font-medium text-center">
          Page no {(offset / limit) + 1}
        </span>

        <button
          className="
            w-25
            p-2
            text-xl font-medium
            text-white
            bg-green-700
            rounded-sm
          "
          onClick={() => setOffset(offset + limit)}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default App