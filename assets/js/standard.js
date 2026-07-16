document.addEventListener('DOMContentLoaded', () => {

    const contentEl = document.querySelector('.markdown-body');
    const sidebarButtons = document.querySelectorAll('.sidebar-menu button');

    const docs = {
        '00-constitution': 'standard/00-constitution.md',
        '01-philosophy': 'standard/01-philosophy.md',
        '02-brand': 'standard/02-brand.md',
        '03-security': 'standard/03-security.md',
        '04-web': 'standard/04-web.md',
        '05-git': 'standard/05-git.md',
        '06-infrastructure': 'standard/06-infrastructure.md',
        '07-release': 'standard/07-release.md',
        '08-products': 'standard/08-products.md',
        '09-ethics': 'standard/09-ethics.md'
    };


    let controller = null;


    function getActiveDocKey() {

        const hash =
            window.location.hash.substring(1);

        return docs[hash] ?
            hash :
            '00-constitution';

    }



    function showLoading() {

        if (!contentEl) return;

        contentEl.innerHTML = `
      <div class="spinner-container">
        <div class="spinner"></div>
        <p class="loading-text">
          Indlæser dokumentation...
        </p>
      </div>
    `;

    }



    async function loadDocument(docKey) {

        if (!contentEl) return;


        if (controller) {
            controller.abort();
        }


        controller = new AbortController();


        showLoading();


        const lang =
            localStorage.getItem('fjallrot-lang') || 'da';


        const defaultPath =
            docs[docKey];


        let filePath =
            defaultPath;


        if (lang === 'fo') {
            filePath = `standard/fo/${docKey}.md`;
        }


        if (lang === 'en') {
            filePath = `standard/en/${docKey}.md`;
        }


        try {

            let response =
                await fetch(filePath, {
                    signal: controller.signal
                });


            if (!response.ok && filePath !== defaultPath) {

                console.info(
                    `Translation missing: ${filePath}`
                );

                response =
                    await fetch(defaultPath);

            }


            if (!response.ok) {

                throw new Error(
                    `Document not found: ${filePath}`
                );

            }


            const markdown =
                await response.text();


            contentEl.innerHTML =
                parseMarkdown(markdown);


            updateSidebarUI(docKey);


            if (window.innerWidth > 992) {

                contentEl.scrollIntoView({
                    behavior: 'smooth'
                });

            } else {

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

            }


        } catch (error) {


            if (error.name === 'AbortError') {
                return;
            }


            console.error(error);


            contentEl.innerHTML = `

      <div class="document-error">

        <h2>
          Dokument blev ikke fundet
        </h2>

        <p>
          Der opstod en fejl under indlæsning af dokumentationen.
        </p>

        <button
          class="btn btn-secondary"
          id="reset-document">
          Gå tilbage
        </button>

      </div>

      `;


            document
                .querySelector('#reset-document')
                ?.addEventListener(
                    'click',
                    () => {
                        window.location.hash =
                            '#00-constitution';
                    }
                );

        }

    }




    function updateSidebarUI(activeKey) {


        sidebarButtons.forEach(button => {

            const active =
                button.dataset.doc === activeKey;


            button.classList.toggle(
                'active',
                active
            );


            button.setAttribute(
                'aria-pressed',
                String(active)
            );


        });


        closeMobileMenu();

    }




    function closeMobileMenu() {


        const nav =
            document.querySelector('.nav-links');


        const burger =
            document.querySelector('.burger-menu');


        if (!nav || !burger) {
            return;
        }


        nav.classList.remove('open');


        burger.setAttribute(
            'aria-expanded',
            'false'
        );


        const lines =
            burger.querySelectorAll('.burger-line');


        if (lines.length === 3) {

            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';

        }

    }





    function parseMarkdown(md) {


        const lines =
            md.split('\n');


        let html = '';

        let inList = false;

        let inCode = false;

        let inQuote = false;

        let code = [];



        for (const line of lines) {



            if (line.trim().startsWith('```')) {


                if (inCode) {

                    html +=
                        `<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`;

                    code = [];

                }


                inCode = !inCode;

                continue;

            }



            if (inCode) {

                code.push(line);

                continue;

            }




            if (line.trim() === '---') {

                html += '<hr>';

                continue;

            }




            if (line.startsWith('> ')) {


                if (!inQuote) {

                    html += '<blockquote>';

                    inQuote = true;

                }


                html +=
                    `<p>${parseInline(line.substring(2))}</p>`;


                continue;

            }


            if (inQuote) {

                html += '</blockquote>';

                inQuote = false;

            }





            if (line.startsWith('# ')) {

                html +=
                    `<h1>${parseInline(line.substring(2))}</h1>`;

                continue;

            }



            if (line.startsWith('## ')) {

                html +=
                    `<h2>${parseInline(line.substring(3))}</h2>`;

                continue;

            }



            if (line.startsWith('### ')) {

                html +=
                    `<h3>${parseInline(line.substring(4))}</h3>`;

                continue;

            }





            const list =
                line.match(/^[-*+]\s+(.*)/);



            if (list) {


                if (!inList) {

                    html += '<ul>';

                    inList = true;

                }


                html +=
                    `<li>${parseInline(list[1])}</li>`;


                continue;

            }





            if (inList) {

                html += '</ul>';

                inList = false;

            }





            if (line.trim()) {

                html +=
                    `<p>${parseInline(line)}</p>`;

            }


        }




        if (inCode) {

            html +=
                `<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`;

        }


        if (inList) {

            html += '</ul>';

        }


        if (inQuote) {

            html += '</blockquote>';

        }


        return html;

    }





    function parseInline(text) {


        let output =
            escapeHtml(text);



        output =
            output.replace(
                /\*\*(.*?)\*\*/g,
                '<strong>$1</strong>'
            );



        output =
            output.replace(
                /\*([^*]+)\*/g,
                '<em>$1</em>'
            );



        output =
            output.replace(
                /`([^`]+)`/g,
                '<code>$1</code>'
            );



        output =
            output.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                (_, text, url) => {


                    try {

                        const safeUrl =
                            new URL(
                                url,
                                window.location.origin
                            );


                        if (
                            safeUrl.protocol !== 'https:' &&
                            safeUrl.protocol !== 'http:' &&
                            !url.startsWith('#')
                        ) {

                            return text;

                        }


                        return `
              <a href="${safeUrl.href}"
                 rel="noopener noreferrer">
                 ${text}
              </a>
            `;


                    } catch {

                        return text;

                    }

                }
            );



        return output;

    }





    function escapeHtml(text) {

        return text
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');

    }





    sidebarButtons.forEach(button => {


        button.addEventListener(
            'click',
            () => {

                window.location.hash =
                    button.dataset.doc;

            }
        );


    });





    window.addEventListener(
        'hashchange',
        () => {
            loadDocument(getActiveDocKey());
        }
    );





    window.addEventListener(
        'fjallrot-lang-change',
        () => {
            loadDocument(getActiveDocKey());
        }
    );





    loadDocument(
        getActiveDocKey()
    );


});
