

$(function () {

    /**** Validera förnamn ****/

    function valFirstName() {
        let value = $('#firstName').val()
        let error = $('#firstName')

        if (value === '') {
            //if(value.length < 2) {
            error.addClass('is-invalid')
                .focus();
            return false;
        }

        else {
            error.addClass('is-valid')
                .removeClass('is-invalid')
            return true;
        }

    }

    // $('#firstName').blur(function (e) {
    //     valFirstName();
    // });


    /**** Validera Efternamn ****/

    function valLastName() {
        let value = $('#lastName').val()
        let error = $('#lastName')


        if (value === '') {
            error.addClass('is-invalid')
                .focus();
            return false;
        }
        else {
            error.addClass('is-valid')
                .removeClass('is-invalid')
            return true;

        }
    }

    /**** Validera E-post ****/



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

    /**** Validera ålder - select ****/


    function valSelectAge() {

        let value = $('#age').val()
        let error = $('#age')

        if (value === '') {
            error.addClass('is-invalid')
            return false;

        }
        else {
            error.addClass('is-valid')
                .removeClass('is-invalid')
            return true;
        }
    }

    /**** Validera Radiobutton ****/


    function valRadiobutton(name) {
        let all = $(`input[name=${name}`)

        if (all.is(':checked')) {
            all.removeClass('is-invalid')
            console.log('alla')

            for (radio of all) {
                if (radio.checked) {
                    $('#m').addClass('is-valid')
                    console.log('male')
                    return true
                }
                else {
                    $('#f').addClass('is-valid')
                    console.log('female')
                    return true
                }
            }

        }
        else {
            all.addClass('is-invalid')
            console.log('invalid')
            return false
        }
    }



    /**** Validera Användarnamn ****/

    function valUserName() {
        let value = $('#userName').val()
        let error = $('#userName')


        if (value.length < 5) {
            error.addClass('is-invalid')
                .focus();
            return false;
        }
        else {
            error.addClass('is-valid')
                .removeClass('is-invalid')
            return true;

        }
    }

    /**** Validera Lösenord 1 ****/


    function valPassword() {
        let value = $('#password').val()
        let error = $('#password')

        if (value.length < 5) {
            error.addClass('is-invalid')
                .focus();
            return false;
        }
        else {
            error.addClass('is-valid')
                .removeClass('is-invalid')
            return true;
        }
    }

    /**** Validera Lösenord 2 ****/

    function valConfirmPassword() {
        let password = $('#password').val();
        let confirmPassword = $('#confirmPassword').val();
        let value = $('#confirmPassword').val()

        if ((password != confirmPassword) || (value.length < 5)) {
            // alert('Fel - matchar ej');
            // console.log('Fel - matchar ej')

            $('#confirmPassword').addClass('is-invalid')
            $('#confirmPassword').focus();
            return false;

        } else {
            $('#confirmPassword').removeClass('is-invalid')
            $('#confirmPassword').addClass('is-valid')
            return true;
        }

    };

    /**** Validera Meddelanderuta ****/

    function valMessage() {
        let value = $('#message').val()
        let error = $('#message')

        if (value === '') {
            //error.addClass('is-valid')
            error.removeClass('is-invalid')
            //.focus();
            return true
        }
        else {
            //error.html('Rätt') //eller tom
            error.addClass('is-valid')
                .removeClass('is-invalid')
            return true
        }
    }


    /**** Validera Checkbox ****/

    //function valCheckbox() {

    $('#check').change(function () {

        //console.log('Changed')

        if ($(this).prop('checked')) {
            $('#check').removeClass('is-invalid')
            $('#check').addClass('is-valid')

            //console.log('Yepp')
            return true;

        } else {
            $('#check').addClass('is-invalid')

            //console.log('Nope')
            return false;
        }
    });

    // }

   
 
    /**** Blur function ****/
    // Validera vid blur // eller keyup, change istället för blur
    // Ta med alla inputs

    const inputs = document.querySelectorAll('input, select, textarea, input[type="checkbox"], input[type="radio"]');

    $(inputs).blur(function (e) {
        switch (e.target.id) {
            case 'firstName':
                valFirstName();
                break;

            case 'lastName':
                valLastName();
                break;

            case 'email':
                valEmail();
                break;

            case 'age':
                valSelectAge();
                break;

            case 'gender':
                valRadiobutton();
                break;

            case 'userName':
                valUserName();
                break;

            case 'password':
                valPassword();
                break;

            case 'confirmPassword':
                valConfirmPassword();
                break;

            case 'message':
                valMessage();
                break;

            // case 'check':
            //     valMessage();
            //     break;

        }
    });

    /**** preventDefault - checka true och skicka vidare ****/
    // preventDefault - hindrar sidan att ladda om

    $('#regForm').on('submit', function (e) {
        e.preventDefault();

        //console.log('Yepp2')

        if (!$('#check').prop('checked')) {
            $('#check').addClass('is-invalid')  
        }

        
        else if (
            valFirstName('#firstName') === true &&
            valLastName('#lastName') === true &&
            valEmail() === true &&
            valSelectAge('#age') === true &&
            valRadiobutton('gender') === true && //name
            valUserName('#userName') === true &&
            valPassword('#password') === true &&
            valConfirmPassword('#confirmPassword') === true &&
            valMessage('#message') === true 
            //$('#check').prop('checked') === true) 
            ){

            //console.log('Yepp3')
            window.location.assign("registrerad.html")
        }

        else {
            //console.log('Yepp4')
            return false
        }

    })

})


/* checks a lot of other inputs here with && after true */
              //valCheckbox('#check') === true