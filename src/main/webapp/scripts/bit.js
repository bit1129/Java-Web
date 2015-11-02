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
    });

    $("#labelValueButton").click(function(evt){
        var v = $("label.dealerLowSoldPrice").html();
        alert(v);
    });

    $("#jsonPBtn").click(function(evt){
        alert("Hello,jsonPBtn")
        $.ajax({
            dataType: 'jsonp',
            url: '/login?user=123&method=out',
            success: function(data){
                debugger
                alert("Success," + data)
            },
            error: function(error) {
                debugger
                alert("Error, " + error)
            }
        });




    });


});
