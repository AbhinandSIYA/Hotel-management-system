function amount() {
  var rent=document.getElementById("rentRoom").value;
  var adv=document.getElementById("advance").value;
   var payAmt=rent-adv;
   return payAmt;
}

window.onload=function pay() {
    document.getElementById("amtp").value=amount();
}

