// frontend/ssr/server.tsx

import { Application } from "https://deno.land/x/oak@v7.3.0/mod.ts";
import { router } from "./routes/index.tsx";

const app = new Application();
const port: number = 8080;

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port });
console.log(`server is running on port: ${port}`);
