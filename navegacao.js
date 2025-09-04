document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link:not(.disabled)');
    const pages = document.querySelectorAll('.page-content');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const targetPageId = link.dataset.page;

            pages.forEach(page => page.classList.add('hidden'));
            
            const targetPage = document.getElementById(`page-${targetPageId}`);
            if (targetPage) {
                targetPage.classList.remove('hidden');
            }

            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});