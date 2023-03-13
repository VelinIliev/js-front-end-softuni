function solution() {
    const URL = "http://localhost:3030/jsonstore/advanced/articles/"
    const main = document.querySelector("#main");
    main.innerHTML = "";


    function loadArticles(data) {
        Object.values(data).forEach((article) => {
            const div = document.createElement("div");
            div.className = "accordion";
            div.innerHTML = `
                <div class="head">
                    <span>${article.title}</span>
                    <button class="button" id=${article._id}>More</button>
                </div>
                <div class="extra">
                </div>
                `;
            main.appendChild(div);
            const button = div.querySelector(".button");
            const extra = div.querySelector(".extra");

            function getMore(e) {
                extra.innerHTML = "";
                fetch(`${URL}details/${e.target.id}`)
                .then(response => response.json())
                .then(data => extra.innerHTML = `<p>${data.content}</p>`)
                .catch(error => console.log(error))
                if (button.textContent === "More") {
                    button.textContent = "Less";
                    extra.style.display = "block";
                } else {
                    button.textContent = "More";
                    extra.style.display = "none";
                }
            }

            button.addEventListener("click", getMore);
        });
    }
    
    fetch(`${URL}list`)
    .then(response => response.json())
    .then(data => loadArticles(data))
    .catch(error => console.log(error))
}
  
solution();