// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.querySelector('.md\\:flex');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        mobileMenu.classList.toggle('flex-col');
        mobileMenu.classList.toggle('absolute');
        mobileMenu.classList.toggle('bg-black');
        mobileMenu.classList.toggle('w-full');
        mobileMenu.classList.toggle('left-0');
        mobileMenu.classList.toggle('px-4');
        mobileMenu.classList.toggle('py-6');
        mobileMenu.classList.toggle('space-y-4');
        mobileMenu.classList.toggle('top-16');
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efeitos de hover: carros e cards-clientes
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});
