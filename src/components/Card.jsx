function Card({ image, name }) {
  return (
    <div className="w-75 shrink-0">
      <div className="w-full p-2 bg-gray-200">
        <img className="w-3/4 m-auto" src={image} alt={name + " Image"} />
      </div>
      <p className="text-2xl font-medium capitalize">{name}</p>
    </div >
  )
}

export default Card