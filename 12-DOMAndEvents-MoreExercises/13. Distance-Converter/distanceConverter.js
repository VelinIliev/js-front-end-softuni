function attachEventsListeners() {
    const inputDistance = document.getElementById('inputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const convertBtn = document.getElementById('convert');
    const outputUnits = document.getElementById('outputUnits');
    const outputDistance = document.getElementById('outputDistance');


    function convertTo() {
        let unitToConvert = 0
        switch (inputUnits.value) {
            case 'km': unitToConvert = inputDistance.value * 1000; break;
            case 'm': unitToConvert = inputDistance.value * 1; break;
            case 'cm': unitToConvert = inputDistance.value * .01; break;
            case 'mm': unitToConvert = inputDistance.value * .001; break;
            case 'mi': unitToConvert = inputDistance.value * 1609.34; break;
            case 'yrd': unitToConvert = inputDistance.value * 0.9144; break;
            case 'ft': unitToConvert = inputDistance.value * 0.3048; break;
            case 'in': unitToConvert = inputDistance.value * 0.0254; break;
        };
        let result = 0;
        switch (outputUnits.value) {
            case 'km': result = unitToConvert * 0.001; break;
            case 'm': result = unitToConvert * 1; break;
            case 'cm': result = unitToConvert * 100; break;
            case 'mm': result = unitToConvert * 1000; break;
            case 'mi': result = unitToConvert * 0.000621371; break;
            case 'yrd': result = unitToConvert * 1.09361; break;
            case 'ft': result = unitToConvert * 3.28084; break;
            case 'in': result = unitToConvert * 39.3701; break;
        }
        outputDistance.value = result
    }

    convertBtn.addEventListener('click', convertTo)
}