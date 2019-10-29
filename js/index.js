
//fetches the button
var button = document.querySelector("#calBut");

//makes button listens to a click event and calls the calSum function when button is clicked
button.addEventListener("click",calSum);

//function
function calSum()
{   
    //parseInt - This is a pre-definedd JavaScript function the converts Strings into an Integer

    var num1= parseInt(document.querySelector("#firstNum").value);
    var num2= parseInt(document.querySelector("#secondNum").value);

    sum = num1+ num2;

    alert(`The sum of ${num1} + ${num2} = ${sum}`);

}

