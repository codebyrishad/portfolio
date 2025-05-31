document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        sendMail();
    });
    
    function sendMail() {
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        const params = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        const serviceID = 'service_mv56seg';
        const templateID = 'template_litfk75';
        
        emailjs.send(serviceID, templateID, params)
            .then(res => {
                // Reset form fields
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
                
                // Show success message
                alert('Your message has been sent successfully!');
                
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            })
            .catch(err => {
                console.error('Error sending email:', err);
                alert('Failed to send message. Please try again later.');
                
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            });
    }
});