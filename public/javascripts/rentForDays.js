function GetDays(){
    var cOut = new Date(document.getElementById("checkOutDate").value);
    var cIn = new Date(document.getElementById("checkInDate").value);
    var rentDash=document.getElementById("rentDash").value;
    return parseInt (rentDash*((cOut - cIn) / (24 * 3600 * 1000)));

}

function calc(){
    if(document.getElementById("checkOutDate")){
        document.getElementById("rent").value=GetDays();
    }
}



