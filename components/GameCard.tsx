import {GameReviewMeta } from "../types/types.ts"
const GameCard = ({metaData}: {metaData: GameReviewMeta}) => {
  const game = metaData;
  return (
    <article class="flex flex-col items-center justify-center bg-[--obscur-color] text-[--clair-color] rounded-xl shadow-md shadow-[--obscur-color] hover:shadow-lg transition-shadow duration-300">
      {game.image && (
        <img src={game.image} alt={game.title} class="w-full h-48 object-cover rounded-t-lg mb-4"/>
      )}
      <h2 class="text-2xl font-bold mb-1">{game.title}</h2>
      <p class="text-gray-600 mb-2">{game.date}</p>
      <div class={ `flex items-center justify-center w-16 p-5 ${game.rate <= 4 ? 'bg-red-700' : game.rate <=7 ? 'bg-yellow-600' : 'bg-green-500'} rounded-full` }>
        <p class="text-white font-bold text-2xl">{game.rate}</p>
      </div>
      <div class="flex flex-col items-center justify-center rounded-2xl bg-[--mid-color] text-[--obscur-color] px-2 my-3">
        <a href={`/review/${game.slug}`} class="hover:underline">Ver reseña</a>
      </div>
    </article>
  )
}

export default GameCard
