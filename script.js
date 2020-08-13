var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/styles/atom-one-dark.min.css';
document.head.appendChild(style);

var font = document.createElement('style');
font.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
code * { font-family: 'Ubuntu Mono', monospace; }`;
document.body.appendChild(font);

var hl = document.createElement('script');
hl.src = '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/highlight.min.js';
document.head.appendChild(hl);

var content = document.querySelector('.discussContentPlain > div');
content.innerHTML = content.innerHTML
    .replace(/&lt;code(\/[a-zA-Z]+)?&gt;\n/g, match => `<pre class="${match.slice(8, -5) ? match.slice(9, -5) : 'plaintext'}"><code>`)
    .replace(/&lt;\/code&gt;/g, '</code></pre>');

hl.addEventListener('load', () => { hljs.initHighlighting() });