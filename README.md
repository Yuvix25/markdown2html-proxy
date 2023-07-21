# Markdown2HTML Proxy

## Usage
This proxy receives 2 query parameters, `url` and `style`. `url` should contain the URL to the raw markdown file. `style` should contain a URI encoded JSON representing the style to be applied on the `<body>` tag. The default style is:  
```css
body {
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    background-color: #0d1117;
    color: rgb(230, 237, 243);
}

a {
    color: rgb(3, 102, 214);
    text-decoration: none;
}
```

Example:
```js
const markdownUrl = "https://raw.githubusercontent.com/Yuvix25/markdown2html-proxy/main/README.md";

const style = {
    "background-color": "white",
    "color": "black",
}
const styleEncoded = encodeURIComponent(JSON.stringify(style));


const proxyUrl = `https://yuvix25.github.io/markdown2html-proxy?style=${styleEncoded}&url=${markdownUrl}`;
```

You can then embed the result in any of your web apps.
