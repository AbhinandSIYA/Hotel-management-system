function PostDays() {
    var cOut = new Date(document.getElementById("checkOutDate2").value);
    var cIn = new Date(document.getElementById("checkInDate2").value);
    var rentDash=parseInt(document.getElementById("rentRoom").value);
    var days=(cOut.getTime()-cIn.getTime())/(24*3600*1000);
    return  (rentDash/days);

}
function cal() {
        document.getElementById("rentOriginal").value = PostDays();
}
