import { type PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Dev's Corner</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Navbar/>
        <Component />
      </body>
    </html>
  );
}
