var isRunning = false;

let hour;
let minute;
let second;
let millisecond;

var currentMinute = 0;
function startMinute(){
    minute = setInterval(function(){
        if(currentMinute >= 60000){
            currentMinute = 0;
        }
        currentMinute++;
        console.log(currentMinute);
        if(currentMinute >= 60){
            $('#minute').html('00');
        }else if(currentMinute <= 9){
            $('#minute').html('0' + currentMinute);
        }else{
            $('#minute').html(currentMinute);
        }
        //console.log('fun');
    },60000)
}
function stopMinute(){
    clearInterval(minute);
}

var currentHour = 0;
function startHour(){
    hour = setInterval(function(){
        if(currentHour >= 3600000){
            currentHour = 0;
        }
        currentHour++;
        $('#hour').html(currentHour);
        //console.log('fun');
    },3600000)
}
function stopHour(){
    clearInterval(hour);
}

var currentSecond = 0;
function startSecond(){
    second = setInterval(function(){
        if(currentSecond >= 60){
            currentSecond = 0;
        }
        currentSecond++;
        if(currentSecond >= 60){
            $('#second').html('00');
        }else if(currentSecond <= 9){
            $('#second').html('0' + currentSecond);
        }else{
            $('#second').html(currentSecond);
        }
        //console.log('fun');
    },1000)
}
function stopSecond(){
    clearInterval(second);
}

var currentMillisecond = 0;
function startMillisecond(){
    millisecond = setInterval(function(){
        if(currentMillisecond >= 1000){
            currentMillisecond = 0;
        }
        currentMillisecond++;
        $('#millisecond').html(currentMillisecond.toString().substring(1));
        //console.log(currentMillisecond);
    },1)
}
function stopMillisecond(){
    clearInterval(millisecond);
}

function startClock(){
    startHour();
    startMinute();
    startSecond();
    startMillisecond();
    isRunning = true;
}
function stopClock(){
    stopHour();
    stopMinute();
    stopSecond();
    stopMillisecond();
    isRunning = false;
}
function toggleClock(){
    if(isRunning){
        stopClock();
        $('#toggle').html('Start');
        $('#stuff').html('Reset');
    }else{
        startClock();
        $('#toggle').html('Stop');
        $('#stuff').html('Current Time');
    }
}
function doThings(){
    if(isRunning){
        if(currentHour >= 60){
            $('#currentHour').html('00');
        }else if(currentHour <= 9){
            $('#currentHour').html('0' + currentHour);
        }else{
            $('#currentHour').html(currentHour);
        }

        if(currentMinute >= 60){
            $('#currentMinute').html('00');
        }else if(currentMinute <= 9){
            $('#currentMinute').html('0' + currentMinute);
        }else{
            $('#currentMinute').html(currentMinute);
        }

        if(currentSecond >= 60){
            $('#currentSecond').html('00');
        }else if(currentSecond <= 9){
            $('#currentSecond').html('0' + currentSecond);
        }else{
            $('#currentSecond').html(currentSecond);
        }

        $('#currentMillisecond').html(currentMillisecond.toString().substring(1));
    }else{
        currentHour = 0;
        currentMillisecond = 0;
        currentMinute = 0;
        currentSecond = 0;

        stopClock();

        $('#currentHour').html('00');
        $('#currentMillisecond').html('00');
        $('#currentSecond').html('00');
        $('#currentMinute').html('00');

        $('#hour').html('00');
        $('#millisecond').html('00');
        $('#second').html('00');
        $('#minute').html('00');
    }
}

/*
var playingFive = false;
function fiveSecondGame(){
    if(playingFive){
        stopClock();
        playingFive = false;

        $('#five').html('Play Again');

        currentHour = 0;
        currentMillisecond = 0;
        currentMinute = 0;
        currentSecond = 0;
        $('#currentHour').html('00');
        $('#currentMillisecond').html('00');
        $('#currentSecond').html('00');
        $('#currentMinute').html('00');
    }else{
        $('#hour').html('00');
        $('#millisecond').html('00');
        $('#second').html('00');
        $('#minute').html('00');

        $('#currentHour').html('');
        $('#currentMillisecond').html('');
        $('#currentSecond').html('');
        $('#currentMinute').html('');

        $('#five').html('Click Again in Five Seconds');
        startClock();
        playingFive = true;
    }
}
*/