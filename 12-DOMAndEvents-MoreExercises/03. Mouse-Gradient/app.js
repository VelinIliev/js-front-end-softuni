function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', (e) => {
        let percentage = Math.floor(e.offsetX / (e.target.clientWidth - 1) * 100)
        result.textContent = `${percentage}%`;
    })
    gradient.addEventListener("mouseleave", () => {
        result.textContent = ''
    });
    
}