

$(function () {



    // Validera E-post

    function valEmail() {
        let email = $('#email')

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#email').val())) {
            $('#email').removeClass('is-invalid')
            $('#email').addClass('is-valid')
            return true;
        }
        else {
            $('#email').addClass('is-invalid')
            $('#email').focus();
            return false;
        }
    }




    // Validera Lösenord

    function valPassword() {
        let value = $('#password').val()
        let error = $('#password')

        if (value.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) {
            error.addClass('is-valid')
                .removeClass('is-invalid')
            return true;

        }
        else {
            error.addClass('is-invalid')
                .focus();
            return false;
        }
    }

    //  UpperCase, LowerCase, Number/SpecialChar and min 8 Chars
    // (?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$



    // Validera vid blur // eller keyup, change istället för blur
    // Ta med alla inputs

    const inputs = document.querySelectorAll('input');

    $(inputs).blur(function (e) {
        switch (e.target.id) {

            case 'email':
                valEmail();
                break;

            case 'password':
                valPassword();
                break;

        }
    });



    // hindrar sidan att ladda om

    $('#regForm').submit((e) => {
        e.preventDefault();

        // $('#regForm').submit(function(e) {
        //     e.preventDefault();

        if (

            valEmail() === true &&

            valPassword('#password') === true

        ) {
            window.location.assign("inloggad.html")
            //e.currentTarget.submit();
        }

        else {
            return false
        }


    })



})



