document.addEventListener('DOMContentLoaded', async function() {
  const converter = new showdown.Converter();

  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get('url');
  if (url == undefined) {
    document.body.innerHTML = 'No URL specified';
    return;
  }
  const style = urlParams.get('style') == undefined ? {} : JSON.parse(decodeURIComponent(urlParams.get('style')));

  let content = await (await fetch(url)).text();


  // Replace all badge links with images
  content = content.replace(/\[!\[(.*)\]\((.*)\)\]\((.*)\)/g, '<a href="$3"><img src="$2" alt="$1"></a>');
  content = content.replace(/!\[(.*)\]\((.*)\)/g, '<a href="$3"><img src="$2" alt="$1"></a>');


  const html = converter.makeHtml(content);

  document.body.innerHTML = html;
  for (const key in style) {
    document.body.style[key] = style[key];
  }
});
