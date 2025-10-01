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
     const pixCopyBtn = document.getElementById('pix-copy-btn');

    if (pixCopyBtn) {
        const pixKey = '00020126460014BR.GOV.BCB.PIX0124portaldotriste@gmail.com5204000053039865802BR5901N6001C62180514PortaldoTriste63044AE9';

        pixCopyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(pixKey).then(() => {
                const originalText = pixCopyBtn.textContent;
                pixCopyBtn.textContent = 'Copiado!';
                pixCopyBtn.disabled = true;

                setTimeout(() => {
                    pixCopyBtn.textContent = originalText;
                    pixCopyBtn.disabled = false;
                }, 2000);

            }).catch(err => {
                console.error('Erro ao copiar a chave Pix:', err);
                alert('Não foi possível copiar a chave Pix.');
            });
        });
    }
});

 