/**
 * CAPTAIN PAUL WATSON FOUNDATION - ITALY
 * init.js - Orchestratore dei moduli JS
 */

import { initSiteHeader } from './modules/header.js'; // Nome file aggiornato
import { initEmbeds } from './modules/embeds.js';    // Gestione Video/Iframe

/**
 * Inizializza i moduli necessari
 */
export const init = () => {
    // 1. Moduli Globali (Eseguiti su ogni pagina)
    // Abbiamo rimosso window.ctx perché la gestione modali/scroll
    // è ora incapsulata in modo più sicuro dentro initSiteHeader.

    initSiteHeader();
    initEmbeds();

    // 2. Moduli Specifici per Pagina
    // Utilizziamo il dataset.page per caricare logiche extra solo dove serve
    const page = document.body.dataset.page;
    if (!page) return;

    switch (page) {
        case 'home':
            // Se in futuro avrai un carosello o animazioni specifiche per la home
            // initHomeSlider();
            break;

        case 'campagne':
            // Logiche per filtri campagne
            break;

        default:
            break;
    }
};

// Avvio al caricamento del DOM (Standard Moderno)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}