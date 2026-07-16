document.addEventListener('DOMContentLoaded', () => {

    /*
     * ==========================================
     * Mobile Navigation
     * ==========================================
     */

    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const headerContainer = document.querySelector('.header-container');

    function openMenu() {
        if (!burgerMenu || !navLinks) return;

        navLinks.classList.add('open');
        burgerMenu.setAttribute('aria-expanded', 'true');

        const lines = burgerMenu.querySelectorAll('.burger-line');

        if (lines.length === 3) {
            lines[0].style.transform = 'translateY(7px) rotate(45deg)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        }
    }


    function closeMenu() {
        if (!burgerMenu || !navLinks) return;

        navLinks.classList.remove('open');
        burgerMenu.setAttribute('aria-expanded', 'false');

        const lines = burgerMenu.querySelectorAll('.burger-line');

        if (lines.length === 3) {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    }


    if (burgerMenu && navLinks) {

        burgerMenu.addEventListener('click', (event) => {
            event.stopPropagation();

            const isOpen = navLinks.classList.contains('open');

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });


        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });


        document.addEventListener('click', (event) => {

            if (
                navLinks.classList.contains('open') &&
                headerContainer &&
                !headerContainer.contains(event.target)
            ) {
                closeMenu();
            }

        });


        document.addEventListener('keydown', (event) => {

            if (event.key === 'Escape') {
                closeMenu();
            }

        });

    }


    /*
     * ==========================================
     * Header Scroll Effect
     * ==========================================
     */

    const header = document.querySelector('header');

    if (header) {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 20) {

                header.style.boxShadow =
                    'var(--shadow-neon), var(--shadow-card)';

                header.style.borderColor =
                    'rgba(20, 241, 217, 0.15)';

            } else {

                header.style.boxShadow = 'none';
                header.style.borderColor = 'var(--border-glass)';

            }

        });

    }


    /*
     * ==========================================
     * Language Switcher
     * ==========================================
     */

    if (headerContainer && !document.querySelector('.lang-switcher')) {

        const langSwitcher = document.createElement('div');

        langSwitcher.className = 'lang-switcher';

        langSwitcher.innerHTML = `
      <button data-lang="en">EN</button>
      <button data-lang="da">DA</button>
      <button data-lang="fo">FO</button>
    `;


        const burger = headerContainer.querySelector('.burger-menu');

        if (burger) {
            headerContainer.insertBefore(langSwitcher, burger);
        } else {
            headerContainer.appendChild(langSwitcher);
        }

    }


    function updateLanguage(lang) {

        if (typeof translations === 'undefined') {
            console.warn(
                'Translations dictionary not loaded yet.'
            );
            return;
        }


        const dictionary = translations[lang];

        if (!dictionary) return;


        document.documentElement.lang = lang;


        document
            .querySelectorAll('[data-i18n]')
            .forEach(element => {

                const key = element.getAttribute('data-i18n');

                if (dictionary[key]) {

                    element.textContent = dictionary[key];

                }

            });


        document
            .querySelectorAll('.lang-switcher button')
            .forEach(button => {

                const active =
                    button.dataset.lang === lang;

                button.classList.toggle(
                    'active',
                    active
                );

            });


        window.dispatchEvent(
            new CustomEvent(
                'fjallrot-lang-change', {
                    detail: { lang }
                }
            )
        );

    }


    function detectLanguage() {

        const saved =
            localStorage.getItem('fjallrot-lang');

        if (saved) return saved;


        const browser =
            navigator.language ||
            navigator.userLanguage ||
            'da';


        if (browser.startsWith('fo')) {
            return 'fo';
        }


        if (browser.startsWith('da')) {
            return 'da';
        }


        return 'en';

    }


    if (typeof translations !== 'undefined') {

        const currentLang = detectLanguage();

        localStorage.setItem(
            'fjallrot-lang',
            currentLang
        );


        updateLanguage(currentLang);


        document
            .querySelectorAll('.lang-switcher button')
            .forEach(button => {

                button.addEventListener('click', () => {

                    const lang =
                        button.dataset.lang;


                    localStorage.setItem(
                        'fjallrot-lang',
                        lang
                    );


                    updateLanguage(lang);

                });

            });

    }


    /*
     * ==========================================
     * Progressive Web App
     * ==========================================
     */

    if (
        'serviceWorker' in navigator &&
        window.location.protocol !== 'file:'
    ) {

        window.addEventListener('load', () => {

            navigator.serviceWorker
                .register('/sw.js')
                .then(registration => {

                    console.log(
                        'Fjallrót ServiceWorker registered:',
                        registration.scope
                    );

                })
                .catch(error => {

                    console.warn(
                        'ServiceWorker registration failed:',
                        error
                    );

                });

        });

    }

});