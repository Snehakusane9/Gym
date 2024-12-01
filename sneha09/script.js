// Smooth scrolling function for "Learn More" button
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission (basic alert for now)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert(`Thank you for contacting us, ${name}! We will respond to your message shortly.`);
        // You can add more logic here to send data to a server or store it.
    } else {
        alert('Please fill out all fields.');
    }
});
