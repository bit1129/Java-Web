$(document).ready(function (evt) {
    $("#loginBtn").click(function (e) {
        //alert("Hello")
        var username = $("#username");
        var password = $("#password");
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
            alert("success")
        }).error(function (e) {
            alert("error" + e.responseText)
        });


    })
});
