$(document).ready(function(){


    
    var db = openDatabase('Health-SPA', '1.0', 'SPA DB', 2 * 1024 * 1024); 
    $("#upload").click(function(){
        $.ajax({
            type: "GET",
            url: '	http://dummy.restapiexample.com/api/v1/employees',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }).done(function(){
        db.transaction(function (tx) { 
                    tx.executeSql('SELECT * FROM Patients', [], function (tx, results) { 
                        var list=[];
                        for(var i = 0 ; i < results.rows.length ;i++){
                            list.push(results.rows.item(i))
                        }
                        console.log(list);
                        $.ajax({
                            type: "POST",
                            url: 'http://localhost:3001/patients',
                            data: {data:list}  ,
                        }).done(function(msg){  console.log(msg)})
                        .fail(function(error) {
                            alert(error);
                        });
                    }, null); 
                }); 


        }).fail(function(error){
            alert("Please connect to the internet");
        })
        
        })
    });