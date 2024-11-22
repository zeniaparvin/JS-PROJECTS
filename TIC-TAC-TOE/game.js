const boxes = document.querySelectorAll(".box");
const btn = document.querySelector('button');
const main = document.querySelector('main');
const x = document.querySelector('#x')
const o = document.getElementById('o')
let play = true;
let turn = 0;
const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

const switchTurn = () => {
    turn = 1 - turn; // Toggle turn (0 to 1, 1 to 0)
    if (turn === 0) {
        o.style.backgroundColor = '#117554'; // Highlight O's turn
        x.style.backgroundColor = '';        // Reset X's indicator
    } else {
        x.style.backgroundColor = '#117554'; // Highlight X's turn
        o.style.backgroundColor = '';        // Reset O's indicator
    }
   
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (play) {
            box.innerHTML = 'O';
            box.style.color = '#313131';
            // turn = 1
            // x.style.backgroundColor = '#117554'
            // o.style.backgroundColor = ''
            play = false;
        } else {
            box.innerHTML = 'X';
            box.style.color = '#B8001F';
            // turn = 0;
            // o.style.backgroundColor = '#117554'
            // x.style.backgroundColor = ''
            play = true;
        } box.style.pointerEvents = 'none';

        checkWinner();
        switchTurn();
    })
});

const checkWinner = () => {
    for (let pattern of winning) {
        let z1 = boxes[pattern[0]].innerHTML;
        let z2 = boxes[pattern[1]].innerHTML;
        let z3 = boxes[pattern[2]].innerHTML;

        if (z1 !== '' && z1 == z2 && z2 == z3) {

            const message = document.createElement("p");
            message.id = "message";
            message.innerHTML = `${z1} wins🎉`;
            main.appendChild(message);


            pattern.forEach((index) => {
                boxes[index].style.backgroundColor = "#399918";
                boxes[index].style.color = "#fff";
            });


            boxes.forEach((box) => {
                box.style.pointerEvents = 'none';
            });
            return;

        }


    }

    const allFilled = Array.from(boxes).every((box) => box.innerHTML !== "");
    if (allFilled) {
        const message = document.createElement("p");
        message.id = "message";
        message.innerHTML = `It's a draw! 🤝`;
        main.appendChild(message);
    }
};


btn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.style.backgroundColor = ''
        box.innerHTML = '' // remove x and o. 
        box.style.pointerEvents = 'auto'; //active all box
    });

    message.remove(); // remove message child.

});

turn = 0; // Reset to "O" starts
o.style.backgroundColor = '#117554'; // Highlight O's turn
x.style.backgroundColor = '';