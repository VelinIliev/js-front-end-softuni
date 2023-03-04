function solve() {
    
    const sections = document.querySelectorAll("section");
    const results = document.getElementById("results");
    const output = results.querySelector("h1");
    
    const rightAnswers = [
        "onclick",
        "JSON.stringify()",
        "A programming API for HTML and XML documents",
    ]
    const answers = []
    let i = 0

    document.body.addEventListener("click", (e) => {
        if (e.target.className === "answer-text") {
            sections[i].style.display = "none"

            if (!rightAnswers.includes(e.target.textContent)) {
                answers.push(e.target.innerHTML)
            }

            if (sections[i + 1] !== undefined) {
                sections[i + 1].style.display = "block";
                i += 1
            } else {
                results.style.display = "block";
                if (answers.length > 0) {
                    output.innerHTML = `You have ${3 - answers.length} right answers`
                } else {
                    output.innerHTML = "You are recognized as top JavaScript fan!"
                }
            }
        }
    })
}
