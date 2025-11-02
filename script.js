document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');
    const heroImage = document.querySelector('.hero-image');

    const banners = [
        {
            image: 'img/t-shirts.jpg',
            alt: 'Gun Massager Deal',
            text: 'Starting ₹799 Gun massager'
        },
        {
            image: 'img/makeup.png',
            alt: 'New Sale Alert',
            text: 'Big Billion Day Sale is LIVE!'
        },
        {
            image: 'img/cloths.jpg',
            alt: 'Electronics Deal',
            text: 'Flat 50% off on Electronics'
        }
    ];

    let currentBannerIndex = 0;

    // Function to update the hero content
    function updateHeroBanner() {
        const nextBanner = banners[currentBannerIndex];
        
        // Update the image source and alt text
        heroImage.src = nextBanner.image;
        heroImage.alt = nextBanner.alt;
        
        // (Optional: If you add an H2 element to the HTML, you can update the text)
        // const heroText = document.querySelector('.hero-text');
        // if (heroText) {
        //     heroText.textContent = nextBanner.text;
        // }

        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    }

    // Set an interval for automatic carousel transition (e.g., every 5000ms or 5 seconds)
    setInterval(updateHeroBanner, 2000);

    // Initial load
    updateHeroBanner();
});