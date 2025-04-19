
(function() {
    // Initialize EmailJS with your user ID
    emailjs.init(config.EMAIL_PUBLIC_KEY);

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Show loading state
        const btn = this.querySelector('button');
        const originalText = btn.textContent;
        btn.textContent = 'Sending...';
        btn.disabled = true;

        emailjs.sendForm(config.EMAIL_SERVICE_ID, config.EMAIL_TEMPLATE_ID, this)
            .then(() => {
                // Show success message
                alert('Message sent successfully!');
                this.reset();
            })
            .catch((error) => {
                // Show error message
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            })
            .finally(() => {
                // Reset button state
                btn.textContent = originalText;
                btn.disabled = false;
            });
    });
})();