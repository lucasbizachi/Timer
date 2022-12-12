var sec=0
var min=0
var hr=0

var interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    counter()
    interval= setInterval(counter,1000)


}

function pause(){
    clearInterval(interval)

}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    window.alert("You've stopped at: "+document.getElementById('counter').innerText)
    document.getElementById('counter').innerText='00:00:00'

}

function counter(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('counter').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}