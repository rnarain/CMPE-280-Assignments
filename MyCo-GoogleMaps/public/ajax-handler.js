$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: 'http://localhost:3001/locations',
    }).done(function(msg){  console.log(msg)})
    .fail(function(error) {
        alert(error);
    });
//     var x = $(".feature-list > span").slice(0,185);
// x[0].innerText; 
});