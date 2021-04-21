$(document).ready(function(){
    $("button").click(function(){
        var data=$("#name").val();
        $("#message").html("\"Welcome "+data+"!!!\"");
        
    });

});