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
    let degrees = '&#176'

    function displayTodayForecast(data) {
        current.innerHTML = `
            <div class="label">Current conditions</div>
            <div class="forecasts">
                <span class="condition symbol">${symbols[data.forecast.condition]}</span>
                <span class="condition"> 
                    <span class="forecast-data">${data.name}</span>
                    <span class="forecast-data">${data.forecast.low}${degrees}/${data.forecast.high}${degrees}</span>
                    <span class="forecast-data">${data.forecast.condition}</span>
                </span>
            </div>
            `
    }
    
    function displayUpcomingForecast(data) {
        upcoming.innerHTML = '<div class="label">Three-day forecast</div>';
        upcoming.innerHTML += `<div class="forecast-info"></div`; 
        const forecastInfo = document.querySelector('.forecast-info');
        data.forecast.forEach(day => {
            forecastInfo.innerHTML += `
                <span class="upcoming">
                    <span class="symbol">${symbols[day.condition]}</span>
                    <span class="forecast-data">${day.low}${degrees}/${day.high}${degrees}</span>
                    <span class="forecast-data">${day.condition}</span>
                </span>
            `
        });
    }

    async function getData() {
        try {
            let response = await fetch(`${url}locations/`);
            let data = await response.json();
            let currLocation = data.find(x => x.name.toLowerCase() === location.value.toLowerCase());

            if(currLocation === undefined) {
                forecastSection.innerHTML = "Error";
            }

            let code = currLocation.code;

            forecast.style.display = 'block';

            let todayForcastResponse = await fetch(`${url}today/${code}`);
            let todayForcastData = await todayForcastResponse.json();
            displayTodayForecast(todayForcastData);

            let upcomingForecastResponse = await fetch(`${url}upcoming/${code}`);
            let upcomingForecastData = await upcomingForecastResponse.json();
            displayUpcomingForecast(upcomingForecastData);

        } catch {
            forecast.style.display = 'block';
            forecast.innerHTML = 'Error';
        }
        
    }
    
    submitBtn.addEventListener('click', getData)
}

attachEvents();