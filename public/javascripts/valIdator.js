$().ready(function () {


    $("#room-form").validate({

        modules : 'toggleDisabled',
        disabledFormFilter : 'form.toggle-disabled',

        rules: {
            _roomno: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            _roomno : {
                required: "We need your email address to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            }
        }
    });


    $("#customer-form").validate({

        modules : 'toggleDisabled',
        disabledFormFilter : 'form.toggle-disabled',

        rules: {
            cstname: {
                required: true,
                minlength: 3
            },
            mobile:{
                required:true,
                minlength:6,
                maxlength:20,
            },
            email:{
                required:true,
                email: true
            },
            landmark:{
                required:true
            },
            city:{
                required:true
            },
            state:{
                required:true
            },
            country:{
                required:true
            }
        },
        messages: {
             cstname: {
                required: "Please fill this field",
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            mobile: {
                 required:"Please fill this field",
                minlength:"Enter mobile number",
                maxlength: "Enter mobile number"
            },
            email:{
                 required:"Please fill this field",
                email:"Enter email address"
            },
            landmark: {
                 required:"Please fill this field"
            },
            city: {
                 required:"Please fill this field"
            },
            state:{
                 required:"Please fill this field"
            },
            country: {
                 required:"Please fill this field"
            }
        }
    });
})
