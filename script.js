//function to find the interest rate
function compute()
{
    //setting the variables to use for this function
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
  
    //making sure that zero or a negative number were not entered
    if (principal < 1){
        alert("Please enter a positive number");
        principal.focus();
    }
  
    //final comment once the rate has been calculated
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>, <br>at an interest rate of <mark>" 
    + rate + "</mark>%. <br> You will receive an amount of <mark>" + interest + 
    "</mark>, <br> in the year <mark>" + year + "</mark>"

}

//finding the rate entered by the customer 
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
        