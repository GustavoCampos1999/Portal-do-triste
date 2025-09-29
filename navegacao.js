document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-link:not(.disabled), .nav-link-auth, .tool-card');
    const pages = document.querySelectorAll('.page-content');
    const headerNavLinks = document.querySelectorAll('.main-nav .nav-link'); 

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const targetPageId = link.dataset.page;
            if (!targetPageId) return; 

            const targetPage = document.getElementById(`page-${targetPageId}`);
            const currentPage = document.querySelector('.page-content:not(.hidden)');

            if (!targetPage || currentPage === targetPage) {
                return;
            }

            if (currentPage) {
                currentPage.classList.add('is-hiding');
            }

            setTimeout(() => {
                if (currentPage) {
                    currentPage.classList.add('hidden');
                    currentPage.classList.remove('is-hiding');
                }
                
                targetPage.classList.remove('hidden');
                smoothScrollToY(0, 600);
                
                headerNavLinks.forEach(nav => nav.classList.remove('active'));
                const correspondingHeaderLink = document.querySelector(`.main-nav .nav-link[data-page="${targetPageId}"]`);
                if (correspondingHeaderLink) {
                    correspondingHeaderLink.classList.add('active');
                }

            }, 300);
        });
    });
});