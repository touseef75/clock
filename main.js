
setInterval(clock,500);
function clock(){
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if(hrs > 12){
        hrs = hrs - 12;
    }
    if(hrs == 0){
        hrs = 12
    }

    if(hrs < 10){
        hrs = '0' + hrs;

    }
    if(min < 10){
        min = '0' + min;

    }
    if(sec < 10){
        sec = '0' + sec;

    }
    document.getElementById("clock").innerHTML= hrs + ":" + min + ":" + sec;
}