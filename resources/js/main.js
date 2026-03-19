import { initSiteHeader } from './modules/header.js';

const init = () => {
    initSiteHeader();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}