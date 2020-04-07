function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "admin") {
        window.location.href = "math-question.html";
        return false;
    }
    return true;
}

function clearValues() {
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        elements[i].checked = false;
    }
}

function q(number) {
    var radios = document.getElementsByName('q' + number);
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            localStorage.setItem("q" + number, radios[i].value);
            switch (number) {
                case 1:
                    window.location.href = "cosine-question.html";
                    break;
                case 2:
                    window.location.href = "english-question.html";
                    break;
                case 4:
                    window.location.href = "survey.html";
                    break;

            }
            return false;
        }
    }
    return true;
}

function mark1(value){
    document.getElementById("price").innerHTML="$<u>"+ value+ "</u>";
    localStorage.setItem("q31" , value);
}
function mark2(value){
    document.getElementById("company").innerHTML="<u>"+ value+ "</u>";
    localStorage.setItem("q32" , value);
}

function clearTextValues(){
    document.getElementById("price").innerHTML="$______";
    document.getElementById("company").innerHTML="_____________";
}

function survey(){
    var city = document.getElementById("city-input").value;
    localStorage.setItem("city" , city);
    
    var rooms = document.getElementById("rooms-input").value;
    localStorage.setItem("rooms" , rooms);

    var comment = document.getElementById("comment").value;
    localStorage.setItem("comment" , comment);

    window.location.href = "result.html";
}

function getResult(){
    const correctAnswers= {
        q1 :1,
        q2: 1,
        q31: "650",
        q32: "Twitter",
        q4:1
    }
    
    var q1= localStorage.getItem("q1");
    var q2= localStorage.getItem("q2");
    var q31= localStorage.getItem("q31");
    var q32= localStorage.getItem("q32");
    var q4= localStorage.getItem("q4");

    let { maths, reading, video } = constructors();

    if(q1){
        maths.answered++;
        if(q1 == correctAnswers.q1){
            maths.correct++;
            maths.score++;
        }
    }
    if(q2){
        maths.answered++;
        if(q2 == correctAnswers.q2){
            maths.correct++;
            maths.score++;
        }
    }

    if(q31){
        reading.answered++;
        if(q31 == correctAnswers.q31){
            reading.correct++;
            reading.score++;
        }
    }

    if(q32){
        reading.answered++;
        if(q32 == correctAnswers.q32){
            reading.correct++;
            reading.score++;
        }
    }

    if(q4){
        video.answered++;
        if(q4 == correctAnswers.q4){
            video.correct++;
            video.score++;
        }
    }

    document.getElementById("maths").innerHTML="<summary>Quantative Section</summary> <p><b>Number of questions Answered : </b>"+maths.answered+
    "</p><p><b>Number of questions Correct : </b>"+maths.correct+
    "</p><p><b>Score: </b>"+maths.score+"</p>"

    document.getElementById("reading").innerHTML="<summary>Reading Section</summary><p><b>Number of questions Answered : </b>"+reading.answered+
    "</p><p><b>Number of questions Correct : </b>"+reading.correct+
    "</p><p><b>Score:  </b>"+reading.score+"</p>"

    document.getElementById("video").innerHTML="<summary>Audio/Video Section</summary><p><b>Number of questions Answered : </b>"+video.answered+
    "</p><p><b>Number of questions Correct : </b>"+video.correct+
    "</p><p><b>Score:  </b>"+video.score+"</p>"
}

function constructors() {
    let maths = {
        answered: 0,
        correct: 0,
        score: 0,
    };
    let reading = {
        answered: 0,
        correct: 0,
        score: 0,
    };
    let video = {
        answered: 0,
        correct: 0,
        score: 0,
    };
    return { maths, reading, video };
}

function finish(){
    localStorage.clear();
}