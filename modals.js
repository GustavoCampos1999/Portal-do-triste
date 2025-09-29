document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contact-link');
    const pixLink = document.getElementById('pix-link');
    const contactModal = document.getElementById('contact-modal');
    const pixModal = document.getElementById('pix-modal');

    const openModal = (modal) => {
        if (modal) {
            modal.classList.remove('hidden');
        }
    };

    const closeModal = (modal) => {
        if (modal) {
            modal.classList.add('hidden');
        }
    };

    if (contactLink) {
        contactLink.addEventListener('click', (event) => {
            event.preventDefault();
            openModal(contactModal);
        });
    }

    if (pixLink) {
        pixLink.addEventListener('click', (event) => {
            event.preventDefault();
            openModal(pixModal);
        });
    }

    [contactModal, pixModal].forEach(modal => {
        if (modal) {
            const closeBtn = modal.querySelector('.modal-close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    closeModal(modal);
                });
            }

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal(modal);
                }
            });
        }
    });
});

 