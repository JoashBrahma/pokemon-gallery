function Card({ pokemon }) {
  return (
    <div className="w-75 shrink-0">
      <div className="w-full p-2 bg-gray-200"
      style={{
        backgroundColor: `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
        )`
      }}
      >
        <img className="w-3/4 m-auto" src={pokemon.image} alt={pokemon.name + " Image"} />
      </div>
      <p className="text-2xl font-medium capitalize">{pokemon.name}</p>
      <div className="flex gap-2">
        {
          pokemon.types.map(type => <span className="text-md font-medium capitalize">{type}</span>)
        }
      </div>
    </div >
  )
}

export default Card