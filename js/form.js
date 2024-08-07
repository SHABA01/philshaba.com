$(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Commented out the existing code to disable form submission
        /*
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('bg-danger');
            $(formMessages).addClass('bg-success');

            // Set the message text.
            $(formMessages).text('Your message was successfully sent.');

            // Clear the form.
            $('#name, #email, #message').val('');            
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('bg-success');
            $(formMessages).addClass('bg-danger');

            // Set the message text.
            $(formMessages).text('Oops! An error occurred and your message could not be sent. Kindly send a mail instead.');
        });
        */

        // New code to disable the form submission and show a message
        e.preventDefault(); // Stop the form from submitting
        $(formMessages).removeClass('bg-success bg-danger'); // Remove existing classes
        $(formMessages).addClass('bg-warning'); // Add a warning class
        $(formMessages).text('Function not yet implemented'); // Set the message text
    });
});