import {Handlers, PageProps} from "$fresh/server.ts";
import { parse } from "https://deno.land/std@0.203.0/yaml/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import {  GameReviewMeta } from "../types/types.ts";
import GameCard from "../components/GameCard.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const files = [...Deno.readDirSync("./data")].filter((f) => f.name.endsWith(".md"));
    const reviews: GameReviewMeta[] = [];

    for (const file of files) {
      const content = await Deno.readTextFile(join("./data", file.name));
      const [metaRaw] = content.split("---").slice(1);
      const meta = parse(metaRaw) as GameReviewMeta;
      reviews.push(meta);
    }

    return ctx.render(reviews);
  },
};

export default function Home({data}: PageProps<GameReviewMeta[]>) {
  console.log(data)
  return (
    <main class="px-4 py-8 mx-auto h-[100dvh] bg-[--clair-color]">
      <section class="max-w-screen mx-20 flex flex-col items-center justify-center">
        <h1 class="text-3xl font-bold my-4 text-[--obscur-color]">Todas las reseñas</h1>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {data.map((review: GameReviewMeta) => (
            <GameCard metaData={review} key={review.slug} />
          ))}
        </ul>
      </section>
    </main>
  );
}
