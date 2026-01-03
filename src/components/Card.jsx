function Card({ pokemon }) {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
  }
  return (
    <div className="max-w-75 shrink-0">
      <div className="w-full"
        style={{ backgroundColor: randomColor() }}
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