/**
 * Captain Paul Watson Foundation - Site Header Logic
 * Gestisce: Scroll state, Mobile Menu, Body Scroll Lock.
 */

const header = document.querySelector('.c-header');
const navToggle = document.getElementById('nav-toggle');
const body = document.body;
let scrollPosition = 0;

/**
 * Blocca lo scroll del body quando il menu è aperto (Fix per iOS)
 */
const lockBodyScroll = () => {
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';
};

/**
 * Sblocca lo scroll del body
 */
const unlockBodyScroll = () => {
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
};

/**
 * Cambia l'aspetto dell'header in base allo scroll
 */
const handleHeaderScroll = () => {
    if (!header) return;
    // Aggiungiamo la classe dopo 20px di scroll per un feeling più fluido
    header.classList.toggle('is-scrolled', window.scrollY > 20);
};

export const initSiteHeader = () => {
    // 1. Inizializzazione Scroll Header
    handleHeaderScroll();
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // 2. Gestione Menu Mobile
    if (navToggle && header) {
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();

            const isOpen = header.classList.contains('is-open');

            if (isOpen) {
                header.classList.remove('is-open');
                unlockBodyScroll();
            } else {
                header.classList.add('is-open');
                lockBodyScroll();
            }
        });
    }

    // 3. Chiudi il menu se l'utente clicca su un link (utile per le ancore)
    const navLinks = document.querySelectorAll('.c-nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('is-open');
            unlockBodyScroll();
        });
    });
};