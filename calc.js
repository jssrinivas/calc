function myFuncAdd(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  
  document.getElementById("para1").innerHTML = (num1+num2);
  
}


function myFuncMul(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  
  document.getElementById("para1").innerHTML = (num1*num2);
  
}


function myFuncDiv(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  
  if(num2===0){
    document.getElementById("para1").innerHTML = "Infinity";
  }
  else{
    document.getElementById("para1").innerHTML = (num1+num2);
  }
}

function myFuncPow(){
  var num1=document.getElementById("num1").value;
  var num2=document.getElementById("num2").value;
  
  document.getElementById("para1").innerHTML = (Math.pow(num1,num2));
  
}
