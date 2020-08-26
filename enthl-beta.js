/** ______         _    _    _  _      
 * |  ____|       | |  | |  | || |     
 * | |__    _ __  | |_ | |__| || |     
 * |  __|  | '_ \ | __||  __  || |     
 * | |____ | | | || |_ | |  | || |____ 
 * |______||_| |_| \__||_|  |_||______|
 * 
 * A code highlighting user-script for Entry
 * Developed by Pneuma714.
 */

(() => {
    const themeset = [ 'atom-one-dark', 'atom-one-light', 'solarized-dark', 'solarized-light' ];
    const colorset = [ '#fafafa', '#002b36', '#fdf6e3', '#282c34' ];

    // Style Link
    let style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = '//pneuma714.github.io/EntHL/style.css';
    document.body.appendChild(style);

    // hljs CSS Link
    let hlcss = document.createElement('link');
    hlcss.rel = 'stylesheet';
    hlcss.href = `//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/${themeset[0]}.min.css`;
    document.head.appendChild(hlcss);

    // hljs JS Inject
    let hl = document.createElement('script');
    hl.src = '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.1.2/build/highlight.min.js';
    document.head.appendChild(hl);

    // Content to Codebox
    let content = document.querySelector('.discussContentPlain > div');
    content.innerHTML = content.innerHTML
        .replace(
            /&lt;code(\/[a-zA-Z]+)?&gt;\n/g,
            match => `<pre class="${match.slice(8, -5) ? match.slice(9, -5) : 'plaintext'}"><code><button class="copyButton" title="Copy Code"></button><button class="themeButton" title="Change Theme"></button>`
        )
        .replace(
            /&lt;\/code&gt;/g,
            '</code></pre></div>'
        );

    let index = 0;

    hl.addEventListener('load', () => {
        hljs.initHighlighting();

        const copyButtons = document.querySelectorAll('.copyButton');
        const themeButtons = document.querySelectorAll('.themeButton');

        copyButtons.forEach(button => {            
            button.addEventListener('click', () => {
                button.title = 'Copied!';
                setTimeout(() => { button.title = 'Copy Code'; }, 1500);

                let tempElem = document.createElement('textarea');
                tempElem.value = button.parentElement.innerText;
                document.body.appendChild(tempElem);
            
                tempElem.select();
                document.execCommand("copy");
                document.body.removeChild(tempElem);
            });
        });

        themeButtons.forEach(button => {
            button.style.backgroundColor = colorset[index];
            
            button.addEventListener('click', () => {
                index = (index + 1) % 4;
                themeButtons.forEach(b => { b.style.backgroundColor = colorset[index] });
                style.href = `//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/${themeset[index]}.min.css`;
            });

        });
    });
})();
