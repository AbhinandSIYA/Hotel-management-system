function GetDays(){
    var cOut = new Date(document.getElementById("checkOutDate").value);
    var cIn = new Date(document.getElementById("checkInDate").value);
    var rentdash=document.getElementById("rentDash").value;
    return parseInt (rentdash*((cOut - cIn) / (24 * 3600 * 1000)));

}

function cal(){
    if(document.getElementById("checkOutDate")){
        document.getElementById("rent").value=GetDays();
    }
}