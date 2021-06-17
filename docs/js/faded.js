$('#gform').on('submit', function(e){
    $('#gform *').fadeOut(1000);
    $('#gform').prepend('Your message has been sent. I will get back to you as soon as possible.');
    window.location.replace("#Contact");
})