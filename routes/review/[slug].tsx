import { Handlers, PageProps } from "$fresh/server.ts";
import { parse } from "https://deno.land/std@0.203.0/yaml/mod.ts";
import { join } from "https://deno.land/std@0.203.0/path/mod.ts";

interface Review {
  title: string;
  date: string;
  image?: string;
  rate: number;
  content: string;
}

export const handler: Handlers = {
  async GET(_, ctx) {
    const { slug } = ctx.params;
    const filePath = join("data", `${slug}.md`);

    try {
      const raw = await Deno.readTextFile(filePath);
      const match = raw.match(/^---\s*([\s\S]+?)\s*---\s*([\s\S]*)$/);


      if (!match) {
        throw new Error("Invalid frontmatter format");
      }

      const [, yamlRaw, content] = match;
      const meta = parse(yamlRaw) as Omit<Review, "content">;

      return ctx.render({
        ...meta,
        content,
      });
    } catch (err) {
      console.error(err);
      return new Response("Not found", { status: 404 });
    }
  },
};

export default function ReviewPage({ data }: PageProps<Review>) {

  return (
    <section class="h-[100dvh] p-5 flex flex-col bg-[--clair-color] text-[--clair-color]">
      <article class="p-4 bg-[--obscur-color] rounded-lg shadow-md shadow-[--obscur-color]">
        {data.image && <img src={data.image} alt={data.title} class="my-4" />}
        <h1 class="text-3xl font-bold mb-2">{data.title}</h1>
        <p class="text-gray-500">
          {data.date} – Puntaje: {data.rate}/100
        </p>
        <hr class="my-4" />
        <p class="whitespace-pre-wrap">{data.content}</p>
      </article>
      <a href="/" class="mt-5 font-bold text-[--obscur-color] hover:underline">Volver atrás</a>
    </section>
  );
}
