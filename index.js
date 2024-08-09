import { initSidebarMenu } from './scripts/sidebar.js';
import { displayFooter } from './scripts/footer.js';
import { displayPopup } from './scripts/popup.js';

document.addEventListener('DOMContentLoaded', () => {
    initSidebarMenu();
    displayFooter()
    displayPopup()
});