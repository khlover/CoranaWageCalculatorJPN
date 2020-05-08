function calcpay(){
    let salary = document.getElementById("salary").value;
    let rent = document.getElementById("rent").value;
    let required = document.getElementById("requiredays").value;
    let worked = document.getElementById("worked").value;
    
    document.getElementById("results").innerHTML =" ￥" +
      ((salary/required * worked) + ((salary*0.6)/required * (required-worked)) - rent)* 0.95 + " after tax";
  }