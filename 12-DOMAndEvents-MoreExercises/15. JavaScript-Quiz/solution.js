// Judge doesn't like it, but it's a good decision 

function solve() {
    const questions = document.querySelectorAll('#quizzie section');
    let rightAnswers = ['2', '2', '2'];
    let results = []

    function finalState(){
        const resultsEl = document.getElementById('results');
        let output = document.querySelector('#results h1')

        resultsEl.style.display = 'block';
        let correctResults = 0;
        for (let i = 0; i < results.length; i++) {
            if (results[i] === rightAnswers[i]) {
                correctResults += 1
            }
        }
        if (correctResults === 3) {
            output.innerHTML = 'You are recognized as top JavaScript fan!'
        } else {
            output.innerHTML = `You have ${correctResults} right answers`
        }
    };

    function newQuestion(currentQuestion, index) {
        if (index !== 0){
            currentQuestion.style.display = 'block';
        }

        let leftAnswer = currentQuestion.querySelector('.low-value');
        let rightAnswer = currentQuestion.querySelector('.high-value');

        function takeAnswer(e) {
            let answer = ''

            if (e.target.tagName.toUpperCase() == 'P') {
                answer = e.target.parentElement.parentElement.dataset.quizindex;
            } else if (e.target.tagName.toUpperCase() == 'DIV'){
                answer = e.target.parentElement.dataset.quizindex;
            } else if ((e.target.tagName.toUpperCase() == 'LI')) {
                answer = e.target.dataset.quizindex;
            }

            results.push(answer);
            currentQuestion.style.display = 'none';

            if (index < questions.length - 1){
                currentQuestion[index + 1];
                currentQuestion = questions[index + 1];
                newQuestion(currentQuestion, index + 1)
            } else {
                finalState();
                return;
            }
        }
        
        leftAnswer.addEventListener('click', takeAnswer);
        rightAnswer.addEventListener('click', takeAnswer);
    }

    currentQuestion = questions[0]
    newQuestion(currentQuestion, 0);
}
