$(document).ready(function (evt) {
    $("#loginBtn").click(function (e) {
        //alert("Hello")
        var username = $("#username").value;
        var password = $("#password").value;
        var url = "/login";
        var obj = {};
        obj.username = username;
        obj.password = password;
        var data = JSON.stringify(obj)
        $.ajax({
            type: 'POST',
            url: url,
            data: data
        }).success(function (response) {
            $("#response").html(response);
        }).error(function (e) {
            alert("error" + e.responseText)
        });


    })
});
