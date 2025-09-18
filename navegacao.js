document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link:not(.disabled), .nav-link-auth');
    const pages = document.querySelectorAll('.page-content');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            const targetPageId = link.dataset.page;
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
                
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }, 300);
        });
    });
});