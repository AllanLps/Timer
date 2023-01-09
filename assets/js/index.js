const start = document.querySelector('.button-start');
const pause = document.querySelector('.button-pause');
const stop = document.querySelector('.button-stop');

let sec = 0;
let min = 0;
let hr = 0;

let interval;

start.addEventListener('click', startBtn);
pause.addEventListener('click', pauseBtn);
stop.addEventListener('click', stopBtn);

function twoDigits(digit){
    if(digit < 10){
        return('0'+digit)
    }else{return(digit)}
}

function startBtn() {
    counter()
    interval = setInterval(counter,1000);
    
}

function pauseBtn() {
    clearInterval(interval)
}

function stopBtn() {
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('timer-number').innerText = '00:00:00';
    
}

function counter() {
    sec++;
    if(sec == 60){
        min++
        sec=0
        if(min == 60){
            min=0
            hr++
        }
    }
    document.getElementById('timer-number').innerText = twoDigits(hr)+ ':' +twoDigits(min)+ ':'+twoDigits(sec);
}