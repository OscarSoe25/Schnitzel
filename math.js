// 
var answer = document.getElementById("math");

var dropdown = document.getElementById("drop")

var input1 = document.getElementById("num1")

var input2 = document.getElementById("num2")

var answer = document.getElementById("ans1")

var button =document.getElementById("button")

//
button.addEventListener("click", function() {

    //
    var number1 = +input1.value;
    var number2 =   +input2.value;
    var operation = dropdown.value;

    //
    if (operation === "+") {

        answer.innerHTML = (number1) + (number2);

    }

    else if (operation  === "-") {

     answer.innerHTML = (number1) - (number2);

     }
     else if (operation === "/") {

     answer.innerHTML = (number1) / (number2);

     }
     else if (operation === "*") {
         
     answer.innerHTML = (number1) * (number2);
         
     }
});



/*variable for the dropdown*/
/*variable for inputs*/
/*answer*/
/**/
