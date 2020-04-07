var db = openDatabase('Health-SPA', '1.0', 'SPA DB', 2 * 1024 * 1024); 
 function step1(){
    var fname = document.getElementById("fname").value ;
    var lname = document.getElementById("lname").value ;
    var gender = document.getElementById("gender").value ;
    var age = document.getElementById("age").value ;
    var photo = document.getElementById("photo").files[0].name ;
    console.log(`INSERT INTO Patients (fname,lname,gender,age) VALUES (${fname},${lname},${gender},${age})`);
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Patients (fname,lname,gender,age,photo,hieght,weight,body_temp,pulse,bp,medications,notes)'); 
        tx.executeSql(`INSERT INTO Patients (fname,lname,gender,age,photo) VALUES ("${fname}","${lname}","${gender}",${age} ,"${photo}")`); 
    })
 }

 function step2(){
    var fname = document.getElementById("fname").value ;
    var hieght = document.getElementById("hieght").value ;
    var weight = document.getElementById("weight").value ;
    var body_temprature = document.getElementById("body_temprature").value ;
    var pulse = document.getElementById("pulse").value ;
    var bp = document.getElementById("bp").value ;
    var medications = document.getElementById("medications").value ;
    var notes = document.getElementById("notes").value ;

    console.log(hieght)
    db.transaction(function (tx) { 
        tx.executeSql('UPDATE Patients SET hieght=?,weight=?,body_temp=?,pulse=?,bp=?,medications=?,notes=?  WHERE fname=?',[hieght ,weight,body_temprature,pulse,bp,medications,notes,fname ]); 
    })
 }

 
    
 function showReport(){
    db.transaction(function (tx) { 
        tx.executeSql('SELECT * FROM Patients', [], function (tx, results) { 
           var len = results.rows.length, i; 
           for (i = 0; i < len; i++) { 
              var data = "<tr><td>" + results.rows.item(i).fname + " "+ results.rows.item(i).fname + "</td>"; 
              data += "<td>" + results.rows.item(i).age + "</td>"; 
              data += "<td>" + results.rows.item(i).gender + "</td>"; 
              data += "<td><img id='profile_img' src=" + "C:\\Users\\Narain%20Ratanchandani\\Desktop\\" + results.rows.item(i).photo + "></td>"; 
              data += "<td>" + results.rows.item(i).medications + "</td>"; 
              data += "<td>" + results.rows.item(i).notes + "</td></tr>"; 
              document.getElementById('reports_table').innerHTML +=  data; 
           } 
        }, null); 
     }); 
}