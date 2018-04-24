
var red = '#FF0000';
var blue = '#0000FF';
var colorFlag = true;
var color;
var player1 = "Red";
var player2 = "Blue";

var field = new Array(6);
for (var i = 0; i < 6; i++) {
    field[i] = new Array(7);
}

var url_string = window.location.href; 
var url = new URL(url_string);
if(url.searchParams.get("player1")!="")
player1 = url.searchParams.get("player1");
if(url.searchParams.get("player2")!="")
player2 = url.searchParams.get("player2");


function col1(id) {
    var output = [];
    var sNumber = id.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }

    var row = output[0];
    var col = output[1];

    for (var i = 0; i < 6; i++) {
        if (field[i][col] === undefined) {
            var str1 = i.toString();
            var concat = str1.concat(col);
            if (colorFlag === true) {
                color = red;
                colorFlag = false;
            } else {
                color = blue;
                colorFlag = true;
            }
            document.getElementById(concat).style.background = color;
            field[i][col] = color;
            break;
        }
    }

    var winCol = checkColums();
    if (winCol === true) {
        location.reload();
    }

    var winRow = checkRows();
    if (winRow === true) {
        location.reload();
    }

    var leftWin = chkWinner();
    if (leftWin === true) {
        location.reload();
    }

    var no = noWinner();
    if (no === true) {
        alert("TIE !!!");
        location.reload();
    }
}

function checkColums() {
    for (var y = 0; y < 7; y++) {
        var redWin = 0;
        var blueWin = 0;
        for (var x = 0; x < 6; x++) {

            if (field[x][y] === red) {
                redWin++;
                blueWin = 0;
                if (redWin === 4) {
                    alert(player1+ " won the game");
                    return true;
                }
            } else if (field[x][y] === blue) {
                blueWin++;
                redWin = 0;
                if (blueWin === 4) {
                    alert(player2+" won the game");
                    return true;
                }
            } else {
                blueWin = 0;
                redWin = 0;
            }
        }
    }
    return false;
}

function checkRows() {
    for (var y = 0; y < 6; y++) {
        var redWin = 0;
        var blueWin = 0;
        for (var x = 0; x < 7; x++) {

            if (field[y][x] === red) {
                redWin++;
                blueWin = 0;
                if (redWin === 4) {
                    alert(player1+" won the game");
                    return true;
                }
            } else if (field[y][x] === blue) {
                blueWin++;
                redWin = 0;
                if (blueWin === 4) {
                    alert(player2+" won the game");
                    return true;
                }
            } else {
                blueWin = 0;
                redWin = 0;
            }
        }
    }
    return false;
}

function chkLine(a, b, c, d) {
    return ((a !== undefined) && (a === b) && (a === c) && (a === d));
}

function chkWinner() {

    for (r = 0; r < 3; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(field[r][c], field[r + 1][c + 1], field[r + 2][c + 2], field[r + 3][c + 3]) === true) {
                if (field[r][c] === red)
                    alert(player1+" won the game");
                else
                    alert(player2+" won the game");
                return true;
            }
    for (r = 3; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (chkLine(field[r][c], field[r - 1][c + 1], field[r - 2][c + 2], field[r - 3][c + 3]) === true) {
                if (field[r][c] === red)
                    alert(player1+" won the game");
                else
                    alert(player2+" won the game");
                return true;
            }
    return false;
}

function noWinner() {
    for (var y = 0; y < 7; y++) {
        for (var x = 0; x < 6; x++) {
            if (field[x][y] === undefined)
                return false;
        }
    }
    return true;
}