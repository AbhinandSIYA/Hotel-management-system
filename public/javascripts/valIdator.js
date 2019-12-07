$().ready(function () {


    $("#room-form").validate({

        modules : 'toggleDisabled',
        disabledFormFilter : 'form.toggle-disabled',

        rules: {
            roomno: {
                required: true,
                min:0
            },
            persons:{
                required:true,
                min:0
            },
            rent:{
                required:true,
                min:0
            },
            ac:{
                required:true
            }
        },
        messages: {
            roomno : {
                required: "Please fill this field",
                min:"Please enter a number"
            },
            persons: {
                required:"Please fill this field",
                min:"Please enter a number"
            },
            rent: {
                required:"Please fill this field",
                min:"Please enter a number"
            },
            ac: {
                required:"Please select an option"
            }
        },

        errorPlacement: function(error, element)
        {
            if ( element.is(":radio") )
            {
                error.appendTo( element.parents('.opt') );
            }
            else
            { // This is the default behavior
                error.insertAfter( element );
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
                min:0,
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
            },
            checkInDate:{
                required:true
            },
            checkOutDate:{
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
                min:"Please enter mobile number",
                minlength:"Please enter mobile number",
                maxlength: "Please enter mobile number"
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
            },
            checkInDate: {
                 required:"Please fill this field"
            },
            checkOutDate: {
                 required:"Please fill this field"
            }
        }
    });

    $("#pay-form").validate({

        rules:{
            amtp:{
                required:true
            }
        },
        messages:{
            required:"Please fill this field"
        }

    });

    $("#adminSignIn-form").validate({
        rules:{
          username:{
              required:true
          }  ,
            password:{
              required:true
            }
        },
        messages:{
            username: {
                required:"Please fill this field"
            },
            password: {
                required:"Please fill this field"
            }
        }
    })

});


