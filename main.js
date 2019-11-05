const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
const new_game_button = document.getElementById("newGameButton");

let board = new Image();
let accept = new Audio();
let abort = new Audio();
let music = new Audio();
board.src = "images/board.png";
accept.src = "audio/accept.wav";
abort.src = "audio/abort.mp3";

let turn = 1;

let cells = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function state()
{
    for(let i = 0; i < 3; ++i)
    {
        if(cells[i][0] == cells[i][1] && cells[i][1] == cells[i][2] && cells[i][2] != 0)
        {
            return cells[i][0];
        }
    }
    for(let i = 0; i < 3; ++i)
    {
        if(cells[0][i] == cells[1][i] && cells[1][i] == cells[2][i] &&cells[2][i] != 0)
        {
            return cells[0][i];
        }
    }
    if(cells[0][0] == cells[1][1] && cells[1][1] == cells[2][2] && cells[2][2] != 0)
    {
        return cells[0][0];
    }
    if(cells[0][2] == cells[1][1] && cells[1][1] == cells[2][0] && cells[2][0] != 0)
    {
        return cells[0][2];
    }
    for(let i = 0; i < 3; ++i)
    {
        for(let j = 0; j < 3; ++j)
        {
            if(cells[i][j] == 0)
            {
                return 0;
            }
        }
    }
    return -1;
}

function newGame()
{
    for(let i = 0; i < 3; ++i)
    {
        for(let j = 0; j < 3; ++j)
        {
            cells[i][j] = 0;
        }
    }
    turn = 1;
}

function move(event)
{
    let column = Math.floor((event.x - cvs.offsetLeft)/100);
    let row =  Math.floor((event.y - cvs.offsetTop)/100);
    if(cells[row][column] == 0)
    {
        accept.play();
        cells[row][column] = turn;
        turn = (turn == 1 ? 2 : 1);
    }
    else
    {
        abort.cloneNode(true).play();
    }

    let q = state();
    if(q == 1)
    {
        alert("X won");
    }
    else if(q == 2)
    {
        alert("O won");
    }
    else if(q == -1)
    {
        alert("pareto");
    }
}

function draw()
{
    ctx.drawImage(board, 0, 0);

    for(let i = 0; i < 3; ++i)
    {
        for (let j = 0; j < 3; ++j)
        {
            ctx.beginPath();
            if(cells[i][j] == 2)
            {
                ctx.arc(100 * j + 50, 100 * i + 50, 45, 0, Math.PI * 2);
            }
            else if(cells[i][j] == 1)
            {
                ctx.moveTo(100*j + 5, 100*i + 5);
                ctx.lineTo(100*j + 95, 100*i + 95);
                ctx.moveTo(100*j + 95, 100*i + 5);
                ctx.lineTo(100*j + 5, 100*i + 95);
            }
            ctx.stroke();
        }
    }

    requestAnimationFrame(draw);
}

board.onload = draw;
cvs.onclick = move;
new_game_button.onclick = newGame;