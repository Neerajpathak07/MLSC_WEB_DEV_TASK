document.addEventListener('DOMContentLoaded', () => {
    console.log("Amazon Clone Layout Loaded");

    let currentHeroImage = 1;
    const heroImagePlaceholder = document.querySelector('.hero-image-placeholder');
    const totalHeroImages = 3;

    function rotateHeroImage() {
        heroImagePlaceholder.classList.remove('hero-image-2', 'hero-image-3');
        
        if (currentHeroImage === 2) {
            heroImagePlaceholder.classList.add('hero-image-2');
        } else if (currentHeroImage === 3) {
            heroImagePlaceholder.classList.add('hero-image-3');
        }
        
        currentHeroImage = currentHeroImage === totalHeroImages ? 1 : currentHeroImage + 1;
    }

    setInterval(rotateHeroImage, 5000);

    const accountTool = document.querySelector('.nav-tool.account');
    if (accountTool) {
        accountTool.addEventListener('mouseover', () => {
            console.log("Account & Lists dropdown triggered.");
        });
        accountTool.addEventListener('mouseout', () => {
        });
    }

    document.querySelectorAll('.explore-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cardTitle = link.closest('.product-card').querySelector('h2').textContent;
            console.log(`Navigating to: ${cardTitle}`);
        });
    });
});