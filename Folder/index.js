function startFunction() {
    if (inputHours.value != '' && inputMinute.value != '' && inputSecond != ''
      && ( (inputHours.value <=24 && inputMinute.value <= 59 && inputSecond.value <= 59) || (inputMinute.value <= 59 && inputSecond.value <= 59) )) {
        realTimer.innerHTML='<div class="row pl-4 pr-4"><input type="" disabled placeholder="00" class="col" id="inHours" maxlength="2"><small style="font-size: 15%;">hr</small><input type="" disabled placeholder="00" class="col" id="inMinute" maxlength="2"><small style="font-size: 15%;">min</small><input type="" disabled placeholder="00" class="col" id="inSecond" maxlength="2"><small style="font-size: 15%;">sec</small></div>';
        inHours.value= inputHours.value;
        inMinute.value = inputMinute.value;
        inSecond.value = inputSecond.value;
        inputHours.value = '';
        inputMinute.value = '';
        inputSecond.value = '';
        realTimers.innerHTML='Counting down'
    } 
}


function countDownFunction() {
    if (inSecond.value == 0 && inMinute.value==0 && inHours.value == 0) {
        b.play();
        realTimers.innerHTML='Stop'
    } else if (inSecond.value == 0 && inMinute.value==0 && inHours.value != 0) {
        inHours.value--;
        inMinute.value= 59;
        inSecond.value=59;
    } else if (inSecond.value == '0') {
        inMinute.value--;
        inSecond.value=59;
    } else if ( inHours.value <=24 && inMinute.value <= 59 && inSecond.value <= 59 ) {
      inSecond.value--;
    } 
}
setInterval(countDownFunction, 1000)

function realTimeFunction() {
    var a = new Date;
    realTime.innerHTML= a.toLocaleTimeString();
}

setInterval(realTimeFunction, 1000)

function realAlarmTimeFunction() {
    var a = new Date;
    realAlarmTime.innerHTML= a.toLocaleTimeString();
}

setInterval(realAlarmTimeFunction, 1000)

function realDateFunction() {
    var a =new Date;
    realDate.innerHTML= a.toLocaleDateString();
}
setInterval(realDateFunction)

function setAlarm() {
    if (select.value=="Alarm 1" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=9) {
        oneHr.value= 0 + hr.value;
        oneMin.value= 0 + min.value;
        oneSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 1" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=9) {
        oneHr.value= hr.value;
        oneMin.value= 0 + min.value;
        oneSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 1" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 59 && sec.value != '' && sec.value<=9) {
        oneHr.value= 0 + hr.value;
        oneMin.value= min.value;
        oneSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 1" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 59 && sec.value != '' && sec.value<=9) {
        oneHr.value= hr.value;
        oneMin.value= min.value;
        oneSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 1" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=59) {
        oneHr.value= 0 + hr.value;
        oneMin.value= 0 + min.value;
        oneSec.value= sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 1" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=59) {
        oneHr.value= hr.value;
        oneMin.value= 0 + min.value;
        oneSec.value= sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 1" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=59) {
        oneHr.value= hr.value;
        oneMin.value=0 + min.value;
        oneSec.value=0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 1" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 59 && sec.value != '' && sec.value<=59) {
        oneHr.value= hr.value;
        oneMin.value= min.value;
        oneSec.value= sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 2" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=9) {
        twoHr.value= 0 + hr.value;
        twoMin.value= 0 + min.value;
        twoSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 2" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=9) {
        twoHr.value= hr.value;
        twoMin.value= 0 + min.value;
        twoSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 2" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 59 && sec.value != '' && sec.value<=9) {
        twoHr.value= 0 + hr.value;
        twoMin.value= min.value;
        twoSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 2" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 59 && sec.value != '' && sec.value<=9) {
        twoHr.value= hr.value;
        twoMin.value= min.value;
        twoSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 2" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=59) {
        twoHr.value= 0 + hr.value;
        twoMin.value= 0 + min.value;
        twoSec.value= sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 2" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=59) {
        twoHr.value= hr.value;
        twoMin.value= 0 + min.value;
        twoSec.value= sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 2" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=59) {
        twoHr.value= hr.value;
        twoMin.value=0 + min.value;
        twoSec.value=0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 2" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 59 && sec.value != '' && sec.value<=59) {
        twoHr.value= hr.value;
        twoMin.value= min.value;
        twoSec.value= sec.value;
        hr.value = '';
        min.value = '';
        sec.value = '';
    } else if (select.value=="Alarm 3" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=9) {
        threeHr.value= 0 + hr.value;
        threeMin.value= 0 + min.value;
        threeSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 3" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=9) {
        threeHr.value= hr.value;
        threeMin.value= 0 + min.value;
        threeSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 3" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 59 && sec.value != '' && sec.value<=9) {
        threeHr.value= 0 + hr.value;
        threeMin.value= min.value;
        threeSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 3" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 59 && sec.value != '' && sec.value<=9) {
        threeHr.value= hr.value;
        threeMin.value= min.value;
        threeSec.value= 0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 3" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=59) {
        threeHr.value= 0 + hr.value;
        threeMin.value= 0 + min.value;
        threeSec.value= sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 3" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=59) {
        threeHr.value= hr.value;
        threeMin.value= 0 + min.value;
        threeSec.value= sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 3" && hr.value!='' && hr.value <=9
    && min.value != '' && min.value <= 9 && sec.value != '' && sec.value<=59) {
        threeHr.value= hr.value;
        threeMin.value=0 + min.value;
        threeSec.value=0 + sec.value;
        hr.value='';
        min.value='';
        sec.value='';
    } else if (select.value=="Alarm 3" && hr.value!='' && hr.value <=24
    && min.value != '' && min.value <= 59 && sec.value != '' && sec.value<=59) {
        threeHr.value= hr.value;
        threeMin.value= min.value;
        threeSec.value= sec.value;
        hr.value = '';
        min.value = '';
        sec.value = '';
    } else {
        bro.innerHTML= 'Hours must be lesser than or equals to 24,' + "<br>"+ 'Minute must be lesser than or equals to 59 and' + "</br>" + 'Seconds must be lesser than or equals to 59'
    }
}

var b = new Audio('../Images/Elewi Elese.mp3');
function singFunction() {
    if ( ((oneHr.value + ":" + oneMin.value + ":" +oneSec.value) == realAlarmTime.innerHTML) || ((twoHr.value + ":" + twoMin.value + ":" +twoSec.value) == realAlarmTime.innerHTML)
    || ((threeHr.value + ":" + threeMin.value + ":" +threeSec.value) == realAlarmTime.innerHTML)) {
        b.play();
        bro.innerHTML= '<div style="font-size: x-large;">WAKE UP BRO😝😝</div>';
    }
}
setInterval(singFunction, 1000)

var ans= Math.floor(Math.random() * 10) + "+" + Math.floor(Math.random() * 10);
function stopFunction() {
    clickStop.innerHTML= 'Ans';
    bro.innerHTML = ans + "=" + '<input  id="answerCal" value="?">';
    answer();
}

function answer() {
    if (answerCal.value === eval(ans)) {
        b.pause();
    }
}
setInterval(answer, 1000);
