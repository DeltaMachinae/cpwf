/**
 * c-embed.js - Privacy-First Video Loader
 * Carica l'iframe solo quando l'utente clicca sul pulsante.
 */

const loadEmbed = (wrapper) => {
    // Recuperiamo l'HTML dell'iframe salvato nel data-attribute
    const embedHtml = wrapper.getAttribute('data-embed-html');

    if (embedHtml) {
        // Sostituiamo il placeholder con il video reale
        wrapper.innerHTML = embedHtml;
        wrapper.classList.add('is-loaded');
    }
};

export const initEmbeds = () => {
    // Usiamo la delegazione degli eventi per gestire tutti i video presenti e futuri
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.c-embed__button');
        if (!btn) return;

        const wrapper = btn.closest('.c-embed');
        if (wrapper) {
            e.preventDefault();
            loadEmbed(wrapper);
        }
    });
};