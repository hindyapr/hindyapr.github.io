function cekPosibleMove(board, pin, user, enemy) {
    let hasil = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (pin[i][j] === '') {

                let take = false;
                let ada = false;

                //cek utara
                for (let k = i - 1; k >= 0; k--) {
                    if (pin[k][j] === enemy && k !== 0) {
                        take = true;
                    } else if (pin[k][j] === user && take) {
                        hasil.push(board[i][j])
                        ada = true
                        take = false;
                        break;
                    } else {
                        take = false;
                        break;
                    }
                }
                if (ada) continue;

                //cek timur
                for (let k = j + 1; k < board.length; k++) {
                    if (pin[i][k] === enemy && k !== board.length - 1) {
                        take = true;
                    } else if (pin[i][k] === user && take) {
                        hasil.push(board[i][j])
                        ada = true;
                        take = false;
                        break;
                    } else {
                        take = false;
                        break;
                    }
                }

                if (ada) continue;

                //cek selatan
                for (let k = i + 1; k < board.length; k++) {
                    if (pin[k][j] === enemy && k !== board.length - 1) {
                        take = true;
                    } else if (pin[k][j] === user && take) {
                        hasil.push(board[i][j])
                        ada = true;
                        take = false;
                        break;
                    } else {
                        take = false;
                        break;
                    }
                }

                if (ada) continue;

                //cek barat
                for (let k = j - 1; k >= 0; k--) {
                    if (pin[i][k] === enemy && k !== 0) {
                        take = true;
                    } else if (pin[i][k] === user && take) {
                        hasil.push(board[i][j])
                        ada = true;
                        take = false;
                        break;
                    } else {
                        take = false;
                        break;
                    }
                }

                if (ada) continue;

                //cek timur laut
                for (let k = 1; i - k >= 0 && j + k < board.length; k++) {
                    if (pin[i - k][j + k] === enemy && (i - k) !== 0 && (j + k) !== board.length) {
                        take = true;
                    } else if (pin[i - k][j + k] === user && take) {
                        hasil.push(board[i][j])
                        ada = true;
                        take = false;
                        break;
                    } else {
                        take = false;
                        break;
                    }
                }

                if (ada) continue;

                //cek tenggara
                for (let k = 1; i + k < board.length && j + k < board.length; k++) {
                    if (pin[i + k][j + k] === enemy && (i + k) !== board.length - 1 && (j + k) !== board.length - 1) {
                        take = true;
                    } else if (pin[i + k][j + k] === user && take) {
                        hasil.push(board[i][j])
                        ada = true;
                        take = false;
                        break;
                    } else {
                        take = false;
                        break;
                    }
                }

                if (ada) continue;

                //cek barat daya
                for (let k = 1; i + k < board.length && j - k >= 0; k++) {
                    if (pin[i + k][j - k] === enemy && (i + k) !== board.length - 1 && (j - k) !== 0) {
                        take = true;
                    } else if (pin[i + k][j - k] === user && take) {
                        hasil.push(board[i][j])
                        ada = true;
                        take = false;
                        break;
                    } else {
                        take = false;
                        break;
                    }
                }

                if (ada) continue;

                //cek barat laut
                for (let k = 1; i - k >= 0 && j - k >= 0; k++) {
                    if (pin[i - k][j - k] === enemy && (i - k) !== 0 && (j - k) !== 0) {
                        take = true;
                    } else if (pin[i - k][j - k] === user && take) {
                        hasil.push(board[i][j])
                        ada = true;
                        take = false;
                        break;
                    } else {
                        take = false;
                        break;
                    }
                }

            }
        }
    }

    return hasil;
}

function makeMove(board, pin, position, user, enemy) {

    let getI;
    let getJ;

    // taruh biji
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === position) {
                pin[i][j] = user;
                document.getElementById(position).style.background = user;
                getI = i;
                getJ = j;
            }
        }
    }

    // console.log(getI);
    // console.log(getJ);

    let take = false;

    //cek utara
    for (let i = getI - 1; i >= 0; i--) {
        if (pin[i][getJ] === enemy) {
            take = true;
        } else if (pin[i][getJ] === user && take) {
            for (let j = getI - 1; j >= i + 1; j--) {
                pin[j][getJ] = user;
                document.getElementById(board[j][getJ]).style.background = user;
            }
            take = false;
            break;
        } else {
            take = false;
            break;
        }
    }

    //cek timur
    for (let i = getJ + 1; i < board.length; i++) {
        if (pin[getI][i] === enemy) {
            take = true;
        } else if (pin[getI][i] === user && take) {
            for (let j = getJ + 1; j < i; j++) {
                pin[getI][j] = user;
                document.getElementById(board[getI][j]).style.background = user;
            }
            take = false;
            break;
        } else {
            take = false;
            break;
        }
    }

    //cek selatan
    for (let i = getI + 1; i < board.length; i++) {
        if (pin[i][getJ] === enemy) {
            take = true;
        } else if (pin[i][getJ] === user && take) {
            for (let j = getI + 1; j < i; j++) {
                pin[j][getJ] = user;
                document.getElementById(board[j][getJ]).style.background = user;
            }
            take = false;
            break;
        } else {
            take = false;
            break;
        }
    }

    //cek barat
    for (let i = getJ - 1; i >= 0; i--) {
        if (pin[getI][i] === enemy) {
            take = true;
        } else if (pin[getI][i] === user && take) {
            for (let j = getJ - 1; j >= i + 1; j--) {
                pin[getI][j] = user;
                document.getElementById(board[getI][j]).style.background = user;
            }
            take = false;
            break;
        } else {
            take = false;
            break;
        }
    }

    //cek timur laut
    for (let i = 1; getI - i >= 0 && getJ + i < board.length; i++) {
        if (pin[getI - i][getJ + i] === enemy) {
            take = true;
        } else if (pin[getI - i][getJ + i] === user && take) {
            for (let j = 1; getJ + j < getJ + i; j++) {
                pin[getI - j][getJ + j] = user;
                document.getElementById(board[getI - j][getJ + j]).style.background = user;
            }
            take = false;
            break;
        } else {
            take = false;
            break;
        }
    }

    //cek tenggara
    for (let i = 1; getI + i < board.length && getJ + i < board.length; i++) {
        if (pin[getI + i][getJ + i] === enemy) {
            take = true;
        } else if (pin[getI + i][getJ + i] === user && take) {
            for (let j = 1; getJ + j < getJ + i; j++) {
                pin[getI + j][getJ + j] = user;
                document.getElementById(board[getI + j][getJ + j]).style.background = user;
            }
            take = false;
            break;
        } else {
            take = false;
            break;
        }
    }

    //cek barat daya
    for (let i = 1; getI + i < board.length && getJ - i >= 0; i++) {
        if (pin[getI + i][getJ - i] === enemy) {
            take = true;
        } else if (pin[getI + i][getJ - i] === user && take) {
            for (let j = 1; getI + j < getI + i; j++) {
                pin[getI + j][getJ - j] = user;
                document.getElementById(board[getI + j][getJ - j]).style.background = user;
            }
            take = false;
            break;
        } else {
            take = false;
            break;
        }
    }

    //cek barat laut
    for (let i = 1; getI - i >= 0 && getJ - i >= 0; i++) {
        if (pin[getI - i][getJ - i] === enemy) {
            take = true;
        } else if (pin[getI - i][getJ - i] === user && take) {
            for (let j = 1; getJ - j > getJ - i; j++) {
                pin[getI - j][getJ - j] = user;
                document.getElementById(board[getI - j][getJ - j]).style.background = user;
            }
            take = false;
            break;
        } else {
            take = false;
            break;
        }
    }


}

function hitungPemenang(pin) {
    let blackCount = 0;
    let whiteCount = 0;
    let winner;
    for (let i = 0; i < pin.length; i++) {
        for (let j = 0; j < pin[i].length; j++) {
            if (pin[i][j] === 'black') {
                blackCount++;
            } else if (pin[i][j] === 'white') {
                whiteCount++;
            }
        }
    }

    if (blackCount > whiteCount) {
        winner = 'black';
    } else if (whiteCount > blackCount) {
        winner = 'white';
    } else {
        winner = 'draw';
    }

    let hasil = {
        pemenang: winner,
        black: blackCount,
        white: whiteCount,
    }

    return hasil;

}

function coba(input) {

    for (let i = 0; i < posibleMove.length; i++) {
        if (input === posibleMove[i]) {
            makeMove(board, currentPin, input, player1, player2);
            temp = player1;
            player1 = player2;
            player2 = temp;
            if (cekPosibleMove(board, currentPin, player1, player2).length > 0) {
                posibleMove = cekPosibleMove(board, currentPin, player1, player2);
                let turn = player1 + '\'s turn';
                document.getElementById("text").innerHTML = turn;
            } else if (cekPosibleMove(board, currentPin, player2, player1).length > 0) {
                temp = player1;
                player1 = player2;
                player2 = temp;
                posibleMove = cekPosibleMove(board, currentPin, player1, player2);
                let turn = player1 + '\'s turn';
                document.getElementById("text").innerHTML = turn;
            } else {
                posibleMove = cekPosibleMove(board, currentPin, player1, player2);
                let hasil = hitungPemenang(currentPin);
                let kata;
                if (hasil.white === hasil.black) {
                    kata = hasil.pemenang + ", Black = " + hasil.black + '; White = ' + hasil.white;
                } else {
                    kata = hasil.pemenang + " wins, Black = " + hasil.black + '; White = ' + hasil.white;
                }

                document.getElementById("text").innerHTML = kata;
            }
            // document.getElementById(input).style.background = 'white';
            // document.getElementById("text").innerHTML = posibleMove;
            break;
        }
    }
    // document.getElementById(input).style.background = 'white';
    // document.getElementById("text").innerHTML = posibleMove;

}

// const board = [
//     ['pin1', 'pin2', 'pin3', 'pin4', 'pin5', 'pin6', 'pin7', 'pin8'],
//     ['pin7', 'pin8', 'pin9', 'pin10', 'pin11', 'pin12'],
//     ['pin13', 'pin14', 'pin15', 'pin16', 'pin17', 'pin18'],
//     ['pin19', 'pin20', 'pin21', 'pin22', 'pin23', 'pin24'],
//     ['pin25', 'pin26', 'pin27', 'pin28', 'pin29', 'pin30'],
//     ['pin31', 'pin32', 'pin33', 'pin34', 'pin35', 'pin36'],
//     ['pin25', 'pin26', 'pin27', 'pin28', 'pin29', 'pin30'],
//     ['pin31', 'pin32', 'pin33', 'pin34', 'pin35', 'pin36']
// ]
// ];

const board = [];
let size = 8;
let makeBoard = [];

for (let i = 1; i <= size * size; i++) {
    makeBoard.push('pin' + i);
    if (makeBoard.length === 8) {
        board.push(makeBoard);
        makeBoard = [];
    }
}

// const defaultPin = [
//     ['', '', '', '', '', ''],
//     ['', '', '', '', '', ''],
//     ['', '', 'black', 'white', '', ''],
//     ['', '', 'white', 'black', '', ''],
//     ['', '', '', '', '', ''],
//     ['', '', '', '', '', '']
// ];

const defaultPin = [];

for (let i = 0; i < size; i++) {
    defaultPin[i] = []
    for (let j = 0; j < size; j++) {
        if ((i === (size / 2) - 1 && j === (size / 2) - 1) || (i === (size / 2) && j === (size / 2))) {
            defaultPin[i][j] = 'white';
        } else if ((i === (size / 2) && j === (size / 2) - 1) || (i === (size / 2) - 1 && j === (size / 2))) {
            defaultPin[i][j] = 'black';
        } else {
            defaultPin[i][j] = '';
        }
    }
}

let currentPin = [];
let posibleMove = [];



for (let i = 0; i < defaultPin.length; i++) {
    currentPin[i] = [];
    for (let j = 0; j < defaultPin[i].length; j++) {
        currentPin[i][j] = defaultPin[i][j];
    }
}

let player1 = 'black';
let player2 = 'white';
let temp;


posibleMove = cekPosibleMove(board, currentPin, player1, player2);
console.log(posibleMove);
console.log(currentPin);


// makeMove(board, currentPin, 10, player1, player2);
// temp = player1;
// player1 = player2;
// player2 = temp;
// posibleMove = cekPosibleMove(board, currentPin, player2, player1);
// console.log(posibleMove);
// console.log(currentPin);


// makeMove(board, currentPin, 11, player2, player1);
// temp = user;
// user = enemy;
// enemy = temp;
// posibleMove = cekPosibleMove(board, currentPin, player1, player2);
// console.log(posibleMove);
// console.log(currentPin);