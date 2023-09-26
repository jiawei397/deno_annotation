import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

async function handleRequest(request: Request): Promise<Response> {
  const pathname = new URL(request.url).pathname;
  console.log(request.url, ",", pathname);
  if (pathname === "/") {
    return new Response(await Deno.readTextFile("./index.html"), {
      headers: {
        "content-type": "text/html",
      },
    });
  }
  return new Response("Not Found", { status: 404 });
}

console.log("Listening on http://localhost:8000");
serve(handleRequest).catch((err) => console.error(err));
