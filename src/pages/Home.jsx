import pikachuImage from "../../public/pikachu.png"

function Home() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div>
        <div className="mb-2">
          <img
            className="w-40 mx-auto"
            src={pikachuImage}
            alt="Pikachu"
          />
        </div>
        <h1 className="text-xl font-medium text-center">
          Welcome to the Pokémon Gallery!
        </h1>
      </div>
    </div>
  )
}


export default Home