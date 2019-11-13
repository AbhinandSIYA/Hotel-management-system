$("#room-form").validate({
    rules: {
        roomno: {
            required: true,
            minlength: 3
        }
    },
    messages: {
       roomno : {
            required: "We need your email address to contact you",
            minlength: jQuery.validator.format("At least {0} characters required!")
        }
    }
});