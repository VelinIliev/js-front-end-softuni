function solve() {
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const info = document.querySelector('div#info span.info')
    const url = `http://localhost:3030/jsonstore/bus/schedule`;

    let nextStop = 'depot';
    let stopName = ''

    function depart() {
        fetch(`${url}/${nextStop}`)
        .then((response) => response.json())
        .then((data) => {
            stopName = data.name;
            nextStop = data.next;
            console.log(nextStop);
            info.textContent = `Next stop ${data.name}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
            })
        .catch(() => {
            departBtn.disabled = true;
            arriveBtn.disabled = true;
            info.innerHTML = 'Error'
        });
    }

    function arrive() {
        info.textContent = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }
   

    return {
        depart,
        arrive
    };
   
}

let result = solve();