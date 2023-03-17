function attachEventsListeners() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    totalSeconds = 0;

    ids = {
        'daysBtn': (x) => x * 86400,
        'hoursBtn': (x) => x * 3600, 
        'minutesBtn': (x) => x * 60, 
        'secondsBtn': (x) => x,
    };

    function fillFields() {
        days.value = totalSeconds / 86400;
        hours.value = totalSeconds / 3600;
        minutes.value = totalSeconds / 60;
        seconds.value = totalSeconds;
    }

    function calculateSeconds(e) {
        if (e.target.id in ids){
            value = e.target.parentNode.children[1].value;
            totalSeconds = ids[e.target.id](value);
            fillFields()
        }
    }
    document.addEventListener('click', calculateSeconds);
}