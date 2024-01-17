import { h } from "./jsxFactory"

declare global {
    namespace JSX {
      interface IntrinsicElements {
        [elemName: string]: any
      }
    }
  }  

  export const content: any[] = [
    '<!DOCTYPE html>',
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MiniMax</title>
      </head>
      <body>
        <div>
          <h1>Hello, World 44</h1>
          <article>
            <h3>Test v</h3>
          </article>
        </div>
      </body>
    </html>,
  ];