const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.galModal');
const modalIn = document.querySelector('.modalIn');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        document.querySelector('.navBar').style.zIndex = '3';
        document.querySelector('.menuBtn').style.zIndex = '3';
        const imgCards = modalIn.querySelectorAll('.imgCard');
        imgCards.forEach(card => {
            const modalImg = card.querySelector('img');
            if (modalImg.src === img.src) {
                scrollToCard(card);
            }
        });
    });
});

function scrollToCard(card) {
    const modalRect = modalIn.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset = cardRect.top - modalRect.top + modalIn.scrollTop;
    modalIn.scrollTo({
        top: offset,
        behavior: 'instant'
    });
}

function closeModal() {
    modal.style.display = 'none';
    document.querySelector('.navBar').style.zIndex = '500';
    document.querySelector('.menuBtn').style.zIndex = '600';
}