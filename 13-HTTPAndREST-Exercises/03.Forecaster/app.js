function attachEvents() {
    const url = `http://localhost:3030/jsonstore/forecaster/`;

    const location = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecast = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');


    let symbols = {
        "Sunny": '&#x2600',
        "Partly sunny": "&#x26C5",
        "Overcast": "&#x2601",
        "Rain": "&#x2614"
    }
    let targetLocationCode = ''

    function todayForecast() {
        fetch(`${url}today/${targetLocationCode}`)
        .then((response) => response.json())
        .then((data) => {
            forecast.style.display = 'block';
            current.innerHTML = `
                <div class="label">Current conditions</div>
                <span class="conrition symbol">${symbols[data.forecast.condition]}</span>
                <span class="condition"> 
                    <span class="forecast-data">${data.name}</span>
                    <span class="forecast-data">${data.forecast.low}&#176/${data.forecast.high}&#176</span>
                    <span class="forecast-data">${data.forecast.condition}</span>
                </span>`
            })
    }
    function upcomingForecast() {
        fetch(`${url}upcoming/${targetLocationCode}`)
        .then((response) => response.json())
        .then((data) => {
            upcoming.innerHTML += `<div class="forcast-info">` 
            data.forecast.forEach( day => {
                upcoming.innerHTML += `
                    <span class="upcoming">
                    <span class="symbol">${symbols[day.condition]}</span>
                    <span class="forecast-data">${day.low}&#176/${day.high}&#176</span>
                    <span class="forecast-data">${day.condition}</span>
                `
            });
            upcoming.innerHTML += `</div">` 
            })
        
    }
    
    submitBtn.addEventListener('click', () => {
        fetch(`${url}locations/`)
        .then((response) => response.json())
        .then((data) => {
            let isFound = false
            data.forEach(el => {
                if ((el.name).toLowerCase() === (location.value).toLowerCase()) {
                    targetLocationCode = el.code;
                    isFound = true
                    todayForecast();
                    upcomingForecast();
                }
            });
            if (!isFound) {
                forecast.style.display = 'block';
                forecast.innerHTML = 'Error'
            }
        })
        
        
    })
}

attachEvents();