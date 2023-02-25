function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');


    function convertDays() {
        let currentDays = days.value * 1;
        hours.value = currentDays * 24
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60 
    }
    function convertHours() {
        days.value = hours.value / 24;
        let currentHors = hours.value * 1
        minutes.value = hours.value * 60
        seconds.value = minutes.value * 60 
    }
    function convertMinutes() {
        days.value = minutes.value / 1440;
        hours.value = minutes.value / 60 
        let currentMinutes = minutes.value * 1
        seconds.value = minutes.value * 60 
    }
    function convertSeconds() {
        days.value = seconds.value / 86400;
        hours.value = seconds.value / 3600 
        minutes.value = seconds.value / 60
        let currentSeconds = seconds.value * 1
        
    }
    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);
}