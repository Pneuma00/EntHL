var styleset = [ 'atom-one-dark', 'atom-one-light', 'solarized-dark', 'solarized-light' ];
var colorset = [ '#fafafa', '#002b36', '#fdf6e3', '#282c34' ];

var style = document.createElement('link');
style.rel = 'stylesheet';
style.href = `//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/${styleset[0]}.min.css`;
document.head.appendChild(style);

var font = document.createElement('style');
font.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');
code * { font-family: 'Ubuntu Mono', monospace; position: relative; }`;
document.body.appendChild(font);

var hl = document.createElement('script');
hl.src = '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/highlight.min.js';
document.head.appendChild(hl);

var content = document.querySelector('.discussContentPlain > div');
content.innerHTML = content.innerHTML
    .replace(
        /&lt;code(\/[a-zA-Z]+)?&gt;\n/g,
        match => `<pre class="${match.slice(8, -5) ? match.slice(9, -5) : 'plaintext'}"><code><button class="themeButton" value="dark"></button>`
    )
    .replace(
        /&lt;\/code&gt;/g,
        '</code></pre></div>'
    );

var styleindex = 0;

hl.addEventListener('load', () => {
    hljs.initHighlighting();

    var buttons = document.querySelectorAll('.themeButton');

    buttons.forEach(button => {
        button.style = `position: absolute; margin-bottom: 8px; margin-left: 658px; width: 8px; height: 8px; border-style: none; border-radius: 50%; background-color: ${colorset[styleindex]};`;
        button.addEventListener('click', () => {
            styleindex = (styleindex + 1) % 4;
            buttons.forEach(b => { b.style.backgroundColor = colorset[styleindex] });
            style.href = `//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/${styleset[styleindex]}.min.css`;
        });
    });
});
