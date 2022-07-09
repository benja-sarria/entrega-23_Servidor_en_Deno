import { Router } from "https://deno.land/x/oak@v7.3.0/mod.ts";
import { ReactDOMServer, React } from "../../dep.ts";
import ReactApp from "../../components/App.tsx";

export const router = new Router();

router.get("/", (context) => {
    context.response.body = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
    <title>Entrega n° 23</title>
</head>
<body >
    <div id="root">${ReactDOMServer.renderToString(<ReactApp />)}
    </div>
</body>
</html>`;
});
