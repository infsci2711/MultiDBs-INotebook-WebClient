$(function() {
    $baseURL = "http://colfusion.exp.sis.pitt.edu/notebookrest/User/";//"http://54.152.29.103:7654/User/";

    $email = $("#email");
    $username = $("#username");
    $password = $("#password");

    $(".register-button").on("click", function() {
        if ($email.val() === "") alert("1");
        else if ($username.val() === "") alert("2");
        else if ($password.val() === "") alert("3");
        else {
            var person = {
                username: $username.val(),
                password: $password.val(),
                email: $email.val()
            };
            console.log(JSON.stringify(person));
            $.ajax({
                type: 'PUT',
                url: $baseURL,
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(person),
                success: function(person) {
                    alert("Register success");
                },
                error: function() {
                    alert("Register error");
                }
            });
        }
    });
});
