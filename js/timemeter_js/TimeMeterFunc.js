//Служебные функции секундомера
////===========================
//переменные стартовых собитий
var GetClickStartTimemeter;
var GetClickStopTimemeter;
var PauseStatuseTimemeter;

// нулевые значения времени
var runingSeconds = 0; //max 59
var v_Seconds = new Date();
var runingMinutes = 0; //max 59 
var v_Minutes = new Date();
var runingHours = 0; //max 23
var v_Hours = new Date();

//счетчики вызова F_Seconds, F_Minutes, F_Hours
var callCounter_S;
var callCounter_M;
var callCounter_H;

//временные интервалы для функций
var setFunctionsIntervals;

// отметки времени
//var OneMinute = new Date();
//var fullMinute = OneMinute.setSeconds("18");

//проверка вызова функций секундомера
let CoreFunc;
let CoreFuncEvent = true;
let CoreFuncCall;
let CoreFunctionsEvents; //для вызова нескольких функций одновременно за одно событие
let CallTimerCoreFunc;

//вывод значений функции Date
v_Seconds.getSeconds();
v_Minutes.getMinutes();
v_Hours.getHours();

//преобразование значений в текст
var txt_Hours;
var txt_Minutes;
var txt_Seconds;

//интервалы вызова функций 
var setFunctionsIntervals;
var setCustomiseFunctionsIntervals;

//проверка событий запуска-остановки, задание начальных значений времмени
function CheckStartClick_Timemeter() {
    GetClickStartTimemeter = true;
    PauseStatuseTimemeter = false;
    GetClickStopTimemeter = false;

    //setInterval(CheckStartClick_Timemeter, 1000);

    setFunctionsIntervals = setInterval(TimemeterMainF, 1000); // интервал 1 секунда
    CallTimerOutputFunc = addEventListener("click", TimemeterOutput);
    do {
        TimemeterMainF();
    }
    while (GetClickStopTimemeter == false);

    return GetClickStartTimemeter, GetClickStopTimemeter, PauseStatuseTimemeter, setFunctionsIntervals;
}
function CheckStopClick_Timemeter() {
    GetClickStartTimemeter = false;
    GetClickStopTimemeter = true;
    clearInterval(setFunctionsIntervals);
    TimemeterMainF();
    return GetClickStopTimemeter, GetClickStartTimemeter, setFunctionsIntervals;
}

function PauseTimemeterMethod(){
    if (PauseStatuseTimemeter == true){
        Pause_Deactivate();
    } if (PauseStatuseTimemeter == false){
        Pause_Activate();
    }
}
function Pause_Activate(){
    GetClickStartTimemeter = false;
    // setInterval(TimemeterMainF, 0);
    PauseStatuseTimemeter = true;
    // PauseTimemeterMethod();
    TimemeterMainF();
    return PauseStatuseTimemeter;
}
function Pause_Deactivate(){
    GetClickStartTimemeter = true;
    // setInterval(TimemeterMainF, 1000);
    PauseStatuseTimemeter = false;
    // PauseTimemeterMethod();
    TimemeterMainF();
    return PauseStatuseTimemeter;
}

//функции возвращающие значения единиц времени: дни/часы/минуты/секунды/м.сек.
//_______________________________________________________________________

function F_Seconds() {
    //while (runingMinutes < 10)
    runingSeconds = 1;
    do {
        runingSeconds += 1;
        v_Seconds.setSeconds(runingSeconds);
        return v_Seconds, runingSeconds;
    }
    while (GetClickStopTimemeter != true)

    //v_Seconds.setSeconds("01");
}
function F_Minutes() {
    //v_Minutes.setMinutes(runingMinutes);    
    v_Minutes.setMinutes("30");
    return v_Minutes, runingMinutes;
}
function F_Hours() {
    //v_Hours.setHours(runingHours);
    v_Hours.setHours("23");
    return v_Hours, runingHours;
}

function TimemeterOutput() {
    //получить значения времени
    //преобразование значений в текст
    txt_Hours = v_Hours.getHours().toString();
    txt_Minutes = v_Minutes.getMinutes().toString();
    txt_Seconds = v_Seconds.getSeconds().toString();
    VarToText();
    document.getElementById("GameTimeMeterLabel").innerHTML = txt_Hours + ":" + txt_Minutes + ":" + txt_Seconds;
    CallTimerCoreFunc.addEventListener("click", TimemeterMainF);
}

function TimemeterCore() {
    //v_Hours.setHours(runingHours);
    v_Hours.setHours("00"); //test
    //v_Minutes.setMinutes("00"); //test
    v_Minutes.setMinutes(runingMinutes);
    v_Seconds.setSeconds(runingSeconds);
    runingSeconds += 1;
    if (runingSeconds > 59) {
        function Up_minutes() {
            runingSeconds = 0;
            runingMinutes += 1;
            return runingSeconds, runingMinutes;
        }
        Up_minutes();
    }
    TimemeterOutput();
    return runingSeconds, v_Hours, v_Minutes, v_Seconds, CoreFunc;
    //return callCounter_S, runingSeconds, v_Hours, v_Minutes, v_Seconds;
}

// главная функция секундомера TO DO
function TimemeterMainF() { 

    if (GetClickStartTimemeter == true) {
        do {
            TimemeterCore();
            TimemeterOutput();
        } while (GetClickStartTimemeter != false);

    } else if (GetClickStopTimemeter == true) {
        function setEmptyTimemeter() {
            clearInterval(setFunctionsIntervals);
            document.getElementById("GameTimeMeterLabel").innerHTML = "00:00:00";
        }
        setEmptyTimemeter();
    }
}

//преобразование в строку для значений меньше 10 с выводом 0 в начале значения
function VarToText() {
    if (txt_Seconds < 10) {
        txt_Seconds = "0" + txt_Seconds;
    }
    if (txt_Minutes < 10) {
        txt_Minutes = "0" + txt_Minutes;
    }
    if (txt_Hours < 10) {
        txt_Hours = "0" + txt_Hours;
    }
    return txt_Hours, txt_Minutes, txt_Seconds;
}

//Вызов внешних функций
function call_BG_RandomiseFunc_ForTimemeter(){
    do {
        BG_Randomise_Timemter();
    } while (GetClickStopTimemeter == false);
}