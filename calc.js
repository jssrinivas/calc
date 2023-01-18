function myFuncAdd(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  
  var num3=parseInt(num1)+parseInt(num2);
  
  document.getElementById("para2").innerHTML = "The sum of the two numbers is: ";
  document.getElementById("para1").innerHTML = (num3);
  
}


function myFuncMul(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  
  document.getElementById("para2").innerHTML = "The product of the two numbers is: ";
  document.getElementById("para1").innerHTML = (num1*num2);
  
}


function myFuncDiv(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  
  document.getElementById("para2").innerHTML = "The division of two numbers is: ";
  
  if(num2===0){
    document.getElementById("para1").innerHTML = "Infinity";
  }
  else{
    document.getElementById("para1").innerHTML = (num1/num2);
  }
}

function myFuncPow(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  
  document.getElementById("para2").innerHTML = "The power of two numbers is: ";

  document.getElementById("para1").innerHTML = (Math.pow(num1,num2));
  
}
