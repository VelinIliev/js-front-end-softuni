function getInfo() {
    const stopId = document.getElementById('stopId');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`;
    const stopName = document.getElementById('stopName');
    const busList = document.getElementById('buses');

    busList.innerHTML = '';
    stopId.value = '';

    function displayInfo(data) {
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(([busNumber, timeArrive]) => {
            busList.innerHTML += `<li>Bus ${busNumber} arrives in ${timeArrive} minutes</li>`
        })
    }

    fetch(url)
    .then((response) => response.json())
    .then((data) => displayInfo(data))
    .catch(() => stopName.textContent = 'Error');
}