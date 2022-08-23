import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

async function handleRequest(_request: Request): Promise<Response> {
  return new Response(await Deno.readTextFile("./index.html"), {
    headers: {
      "content-type": "text/html",
    },
  });
}

console.log("Listening on http://localhost:8000");
serve(handleRequest).catch((err) => console.error(err));
