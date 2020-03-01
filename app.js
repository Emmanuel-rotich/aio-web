function displayTimeNow() {
    var refresh = 1000; // Timer that calls displayCurrentTime() every second 
    myTimeNow = setTimeout('displayCurrentTime()', refresh)

}

function displayCurrentTime() {

    d = new Date();
    var hour = d.getHours();
    //console.log(hour);
    var minute = d.getMinutes()
        //console.log(minute);
    var second = d.getSeconds();
    //console.log(second);

    var currentDate = hour + ":" + minute + ":" + second
        //console.log(currentDate)
    document.getElementById("date").innerHTML = currentDate;

    displayTimeNow()
}