$(document).ready(function(){
    var name = "codemzy";
    var url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic";
    $.ajax({
        type: "GET",
        url: url,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    }).done(function(response){
        var data=[];
        var htmlContent = new DOMParser().parseFromString(response, 'text/html');
        // console.log($(htmlContent).find("#thetable tbody tr"));
        $(htmlContent).find("#thetable tbody tr").each(function(rowIndex) {
            let newEntry= {
                country:$(this).find("th:eq(1)").text(),
                cases:$(this).find("td:eq(0)").text()
            }
            data.push(newEntry);
        });
        $.ajax({
            type: "POST",
            url: 'http://localhost:3001/coronacases',
            data: {data:data.splice(2,229)}  ,
        }).done(function(msg){  console.log(msg)})
        .fail(function(error) {
            alert(error);
        });
    })
//     var x = $(".feature-list > span").slice(0,185);
// x[0].innerText; 
});