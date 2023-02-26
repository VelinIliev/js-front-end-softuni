function solve() {
    const checkBtn = document.querySelector('tfoot tr td button:nth-child(1)');
    const clearBtn = document.querySelector('tfoot tr td button:nth-child(2)');
    const table = document.querySelector('tbody');
    const output = document.querySelector('#check p');
    const wholeTable = document.querySelector('table');

    function checkSudoku() {
        let matrix = [];
        let isValid = true;

        // take input and check if is valid
        for (let row = 0; row < 3; row++) {
            let row1 = [];
            for (let col = 0; col < 3; col++) {
                x = table.children[row].children[col].children[0].value * 1;
                row1.push(x) 
                if  (!(x >= 1 && x <= 3)) {
                    isValid = false
                }
            }
            matrix.push(row1)
        }

        // check if rows and cols ar uniques
        if (isValid) {
            for (let r = 0; r < matrix.length; r++) {
                let rows = new Set();
                let cols = new Set();
                for (let c = 0; c < matrix.length; c++) {
                    rows.add(matrix[r][c]);
                    cols.add(matrix[c][r]);
                }
                if (rows.size !== 3 || cols.size !== 3 ) {
                    isValid = false
                }
            }
        }
        
        // final result
        if (isValid) {
            output.textContent = 'You solve it! Congratulations!';
            output.style.color = 'green';
            wholeTable.style.border = '2px solid green'
        } else {
            output.innerHTML = 'NOP! You are not done yet...';
            output.style.color = 'red';
            wholeTable.style.border = '2px solid red'
        }
        
    }

    function clearTable() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                table.children[row].children[col].children[0].value = '';
            }
        }
        output.innerHTML = '';
        wholeTable.style.border = 'none'
    }

    checkBtn.addEventListener('click', checkSudoku);
    clearBtn.addEventListener('click', clearTable);
}