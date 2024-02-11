document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;

    // Here you can perform further validation or send the data to a server
    // For simplicity, let's just display a confirmation message
    var confirmation = document.getElementById('confirmation');
    confirmation.textContent = `Appointment booked for ${name} on ${date}. Check your email (${email}) for confirmation.`;
});
