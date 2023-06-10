/* var submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", calculate); */

const submit = document.getElementById("submit");

submit.addEventListener("click", calculate);

function calculate(){

    /*Get values from the form*/ 
    var happines = parseInt(document.getElementById("happiness").value);
    var capacity = parseInt(document.getElementById("capacity").value);
    var pay = parseInt(document.getElementById("pay").value);
    var world = parseInt(document.getElementById("world").value);

    /*Calculate the average*/

    var average = (happines + capacity + pay + world) / 4;

    if (average > 8.5) {
        document.getElementById("result").innerHTML = "This is your Ikigai";
    }else if (average > 7){
        document.getElementById("result").innerHTML = "You might need to improve on one of these factors";
    }else if (average > 6){
        document.getElementById("result").innerHTML = "Maybe keep on brainstorming a bit...";
    }else if (average > 5){
        document.getElementById("result").innerHTML = "Absolutely not your Ikigai";
    }else{
        document.getElementById("result").innerHTML = "Just no...";
    }
    
    /*Display the result*/
    suggestions.innerHTML = "Average: " + average;

}
/*"if(prop(""%"") >= 84, ""This is your Ikigai"", if(prop(""%"") >= 70, ""You might need to improve on one of these factors"", if(prop(""%"") >= 60, ""Maybe keep on brainstorming a bit..."", if(prop(""%"") >= 15, ""Aboslutely NOT your Ikigai"", if(prop(""%"") >= 5, ""Just no..."", slice("" "", 0))))))
"		*/ 