
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
    });
});

// Close the menu when clicked outside
window.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    // Check if the click was outside the menu or the hamburger menu
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});


const images = document.querySelectorAll('.collage-image');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');

// Open the modal when an image is clicked
images.forEach(image => {
    image.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImage.src = this.src;  // Set the modal image to the clicked image
        caption.textContent = this.alt;  // Set the caption to the image alt text
    });
});

// Close the modal when the close button is clicked
function closeModal() {
    modal.style.display = 'none';
}

// Close the modal when the user clicks outside the modal image
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});
