$(function() {
    $baseURL = "http://54.152.29.103:7654/User/login/";

    $email = $(".email_input_wrapper > input");
    $password = $(".password_input_wrapper > input");

    $(".login-button").on("click", function() {
        if ($email.val() == "") alert("1");
        else if ($password.val() == "") alert("2");
        else {
            var person = {
                email: $email.val(),
                password: $password.val()
            }
            console.log(JSON.stringify(person));
            $.ajax({
                type: 'POST',
                url: $baseURL,
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(person),
                statusCode: {
                    200: function(response) {
                        alert("success" + response);
                        if (response == "1") {
                            alert("wrong username or password");
                        } else {
                            window.location.href = response;
                        }

                    },
                    500: function() { //Nothing to save to Employee_Company
                        alert("Login error");
                    }
                }
            });
        }
    });
});
