function compute(){
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * (1 + ((rate / 100) * years));
let interest2 = (Math.round(interest * 100) / 100).toFixed(2);
var year = new Date().getFullYear() + parseInt(years);
document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark>,<br\> at an interest rate of \<mark\>"+rate+"%\</mark>\<br\>You will receive an amount of \<mark>"+interest2+"\</mark>,\<br\> in the year \<mark>"+year+"\</mark>\<br\>";
}

function validatePrincipal(){
    if (document.getElementById("principal").value <= 0)
    {
    alert("Enter a positive number")
    document.getElementById("principal").focus();
    }
}
