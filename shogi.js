function Pawns(nama, kelas, indexI, indexJ, pihak, arena, promosi) {
    this.nama = nama;
    this.kelas = kelas;
    this.posisi = function() {
        if (this.arena === 'board') return board[this.indexI][this.indexJ];
        else return handsBlock[this.pihak][this.indexJ];
    }
    this.indexI = indexI;
    this.indexJ = indexJ;
    this.pihak = pihak;
    this.arena = arena;
    this.promosi = promosi;
    this.taken = function() {
        take(this);
    }

    this.posibleMove = function() {
        let hasil = [];
        if (this.pihak === 'black') {
            if (this.promosi) {
                for (let i = this.indexI; i <= this.indexI + 1; i++) {
                    for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                        if (defaultZone[i] !== undefined) {
                            if (defaultZone[i][j] === ' ') {
                                hasil.push(board[i][j]);
                            } else if (piece[defaultZone[i][j]] !== this.pihak) {
                                hasil.push(board[i][j]);
                            }
                        } else break
                    }
                }
                if (defaultZone[this.indexI - 1] !== undefined) {
                    if (defaultZone[this.indexI - 1][j] === ' ') {
                        hasil.push(board[i - 1][j]);
                    } else if (piece[defaultZone[this.indexI - 1][j]].pihak !== this.pihak) {
                        hasil.push(board[i - 1][j]);
                    }
                }
            } else {
                if (defaultZone[this.indexI + 1] !== undefined) {
                    if (defaultZone[this.indexI + 1][this.indexJ] === ' ') {
                        hasil.push(board[this.indexI + 1][this.indexJ]);
                    } else if (piece[defaultZone[this.indexI + 1][this.indexJ]].pihak !== this.piha) {
                        hasil.push(board[this.indexI + 1][this.indexJ]);
                    }
                }
            }
            return hasil
        } else if (this.pihak === 'white') {
            if (this.promosi) {
                for (let i = this.indexI - 1; i <= this.indexI; i++) {
                    for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                        if (defaultZone[i] !== undefined) {
                            if (defaultZone[i][j] === ' ') {
                                hasil.push(board[i][j]);
                            } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                                hasil.push(board[i][j]);
                            }
                        } else break;
                    }
                }
                if (defaultZone[this.indexI + 1] !== undefined) {
                    if (defaultZone[this.indexI + 1][this.indexJ] === ' ') {
                        hasil.push(board[this.indexI + 1][this.indexJ]);
                    } else if (piece[defaultZone[this.indexI + 1][this.indexJ]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI + 1][this.indexJ]);
                    }
                }
            } else {
                if (defaultZone[this.indexI - 1] !== undefined) {
                    if (defaultZone[this.indexI - 1][this.indexJ] === ' ') {
                        hasil.push(board[this.indexI - 1][this.indexJ]);
                    } else if (piece[defaultZone[this.indexI - 1][this.indexJ]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI - 1][this.indexJ]);
                    }
                }
            }
            return hasil;
        }
    }

    this.promote = function() {
        this.promosi = true;
        this.kelas += '+'
    }

    this.depromote = function() {
        this.promosi = false;
        this.kelas = this.kelas[0];
    }

    this.summoned = function(tempat) {
        summon(this, tempat);
    }



}

function Lance(nama, kelas, indexI, indexJ, pihak, arena, promosi) {
    this.nama = nama;
    this.kelas = kelas;
    this.posisi = function() {
        if (this.arena === 'board') return board[this.indexI][this.indexJ];
        else return handsBlock[this.pihak][this.indexJ];
    }
    this.indexI = indexI;
    this.indexJ = indexJ;
    this.pihak = pihak;
    this.arena = arena;
    this.promosi = promosi;
    this.taken = function() {
        take(this);
    }

    this.posibleMove = function() {
        let hasil = []
        if (this.pihak === 'black') {
            if (this.promosi) {
                for (let i = this.indexI; i <= this.indexI + 1; i++) {
                    for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                        if (defaultZone[i] !== undefined) {
                            if (defaultZone[i][j] === ' ') {
                                hasil.push(board[i][j]);
                            } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                                hasil.push(board[i][j]);
                            }
                        } else break;
                    }
                }
                if (defaultZone[this.indexI - 1] !== undefined) {
                    if (defaultZone[this.indexI - 1][j] === ' ') {
                        hasil.push(board[i - 1][j]);
                    } else if (piece[defaultZone[this.indexI - 1][j]].pihak !== this.pihak) {
                        hasil.push(board[i - 1][j]);
                    }
                }
            } else {

                for (let i = this.indexI + 1; i < 9; i++) {
                    if (defaultZone[i][this.indexJ] === ' ') {
                        hasil.push(board[i][this.indexJ]);
                    } else if (piece[defaultZone[i][this.indexJ]].pihak !== this.pihak) {
                        hasil.push(board[i][this.indexJ]);
                        break;
                    } else break;
                }
            }
            return hasil
        } else if (this.pihak === 'white') {
            if (this.promosi) {
                for (let i = this.indexI - 1; i <= this.indexI; i++) {
                    for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                        if (defaultZone[i] !== undefined) {
                            if (defaultZone[i][j] === ' ') {
                                hasil.push(board[i][j]);
                            } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                                hasil.push(board[i][j]);
                            }
                        } else break;
                    }
                }
                if (defaultZone[this.indexI + 1] !== undefined) {
                    if (defaultZone[this.indexI + 1][this.indexJ] === ' ') {
                        hasil.push(board[this.indexI + 1][this.indexJ]);
                    } else if (piece[defaultZone[this.indexI + 1][this.indexJ]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI + 1][this.indexJ]);
                    }
                }
            } else {
                for (let i = this.indexI - 1; i >= 0; i--) {
                    if (defaultZone[i][this.indexJ] === ' ') {
                        hasil.push(board[i][this.indexJ]);
                    } else if (defaultZone[i][this.indexJ] !== undefined) {
                        if (piece[defaultZone[i][this.indexJ]].pihak !== this.pihak) {
                            hasil.push(board[i][this.indexJ]);
                        }
                        break;
                    } else break;
                }
            }
            return hasil;
        }
    }

    this.promote = function() {
        this.promosi = true;
        this.kelas += '+'
    }

    this.depromote = function() {
        this.promosi = false;
        this.kelas = this.kelas[0];
    }



}

function Knight(nama, kelas, indexI, indexJ, pihak, arena, promosi) {
    this.nama = nama;
    this.kelas = kelas;
    this.posisi = function() {
        if (this.arena === 'board') return board[this.indexI][this.indexJ];
        else return handsBlock[this.pihak][this.indexJ];
    }
    this.indexI = indexI;
    this.indexJ = indexJ;
    this.pihak = pihak;
    this.arena = arena;
    this.promosi = promosi;
    this.taken = function() {
        take(this);
    }

    this.posibleMove = function() {
        let hasil = [];
        if (this.pihak === 'black') {
            if (this.promosi) {
                for (let i = this.indexI; i <= this.indexI + 1; i++) {
                    for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                        if (defaultZone[i] !== undefined) {
                            if (defaultZone[i][j] === ' ') {
                                hasil.push(board[i][j]);
                            } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                                hasil.push(board[i][j]);
                            }
                        } else break;
                    }
                }
                if (defaultZone[this.indexI - 1] !== undefined) {
                    if (defaultZone[this.indexI - 1][j] === ' ') {
                        hasil.push(board[i - 1][j]);
                    } else if (piece[defaultZone[this.indexI - 1][j]].pihak !== this.pihak) {
                        hasil.push(board[i - 1][j]);
                    }
                }
            } else {
                if (defaultZone[this.indexI + 2] !== undefined) {
                    if (defaultZone[this.indexI + 2][this.indexJ - 1] === ' ') {
                        hasil.push(board[this.indexI + 2][this.indexJ - 1]);
                    } else if (piece[defaultZone[this.indexI + 2][this.indexJ - 1]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI + 2][this.indexJ - 1]);
                    }
                    if (defaultZone[this.indexI + 2][this.indexJ + 1] === ' ') {
                        hasil.push(board[this.indexI + 2][this.indexJ + 1]);
                    } else if (piece[defaultZone[this.indexI + 2][this.indexJ + 1]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI + 2][this.indexJ + 1]);
                    }
                }
            }
            return hasil
        } else if (this.pihak === 'white') {
            if (this.promosi) {
                for (let i = this.indexI - 1; i <= this.indexI; i++) {
                    for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                        if (defaultZone[i] !== undefined) {
                            if (defaultZone[i][j] === ' ') {
                                hasil.push(board[i][j]);
                            } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                                hasil.push(board[i][j]);
                            }
                        } else break;
                    }
                }
                if (defaultZone[this.indexI + 1] !== undefined) {
                    if (defaultZone[this.indexI + 1][this.indexJ] === ' ') {
                        hasil.push(board[this.indexI + 1][this.indexJ]);
                    } else if (piece[defaultZone[this.indexI + 1][this.indexJ]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI + 1][this.indexJ]);
                    }
                }
            } else {
                if (defaultZone[this.indexI - 2] !== undefined) {
                    if (defaultZone[this.indexI - 2][this.indexJ + 1] === ' ') {
                        hasil.push(board[this.indexI - 2][this.indexJ + 1]);
                    } else if (piece[defaultZone[this.indexI - 2][this.indexJ + 1]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI - 2][this.indexJ + 1]);
                    }
                    if (defaultZone[this.indexI - 2][this.indexJ - 1] === ' ') {
                        hasil.push(board[this.indexI - 2][this.indexJ - 1]);
                    } else if (piece[defaultZone[this.indexI - 2][this.indexJ - 1]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI - 2][this.indexJ - 1]);
                    }
                }
            }
            return hasil;
        }
    }

    this.promote = function() {
        this.promosi = true;
        this.kelas += '+'
    }

    this.depromote = function() {
        this.promosi = false;
        this.kelas = this.kelas[0];
    }

    this.summoned = function(tempat) {
        summon(this, tempat);
    }



}

function Silver(nama, kelas, indexI, indexJ, pihak, arena, promosi) {
    this.nama = nama;
    this.kelas = kelas;
    this.posisi = function() {
        if (this.arena === 'board') return board[this.indexI][this.indexJ];
        else return handsBlock[this.pihak][this.indexJ];
    }
    this.indexI = indexI;
    this.indexJ = indexJ;
    this.pihak = pihak;
    this.arena = arena;
    this.promosi = promosi;
    this.taken = function() {
        take(this);
    }

    this.posibleMove = function() {
        let hasil = [];
        if (this.pihak === 'black') {
            if (this.promosi) {
                for (let i = this.indexI; i <= this.indexI + 1; i++) {
                    for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                        if (defaultZone[i] !== undefined) {
                            if (defaultZone[i][j] === ' ') {
                                hasil.push(board[i][j]);
                            } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                                hasil.push(board[i][j]);
                            }
                        } else break;
                    }
                }
                if (defaultZone[this.indexI - 1] !== undefined) {
                    if (defaultZone[this.indexI - 1][j] === ' ') {
                        hasil.push(board[i - 1][j]);
                    } else if (piece[defaultZone[this.indexI - 1][j]].pihak !== this.pihak) {
                        hasil.push(board[i - 1][j]);
                    }
                }
            } else {

                for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                    if (defaultZone[this.indexI + 1] !== undefined) {
                        if (defaultZone[this.indexI + 1][j] === ' ') {
                            hasil.push(board[this.indexI + 1][j]);
                        } else if (piece[defaultZone[this.indexI + 1][j]].pihak !== this.pihak) {
                            hasil.push(board[this.indexI + 1][j]);
                        }
                    } else break;
                }

                if (defaultZone[this.indexI - 1] !== undefined) {
                    if (defaultZone[this.indexI - 1][this.indexJ + 1] === ' ') {
                        hasil.push(board[this.indexI - 1][this.indexJ + 1]);
                    } else if (piece[defaultZone[this.indexI - 1][this.indexJ + 1]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI - 1][this.indexJ + 1]);
                    }
                    if (defaultZone[this.indexI - 1][this.indexJ - 1] === ' ') {
                        hasil.push(board[this.indexI - 1][this.indexJ - 1]);
                    } else if (piece[defaultZone[this.indexI - 1][this.indexJ - 1]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI - 1][this.indexJ - 1]);
                    }
                }
            }
            return hasil
        } else if (this.pihak === 'white') {
            if (this.promosi) {
                for (let i = this.indexI - 1; i <= this.indexI; i++) {
                    for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                        if (defaultZone[i] !== undefined) {
                            if (defaultZone[i][j] === ' ') {
                                hasil.push(board[i][j]);
                            } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                                hasil.push(board[i][j]);
                            }
                        } else break;
                    }
                }
                if (defaultZone[this.indexI + 1] !== undefined) {
                    if (defaultZone[this.indexI + 1][this.indexJ] === ' ') {
                        hasil.push(board[this.indexI + 1][this.indexJ]);
                    } else if (piece[defaultZone[this.indexI + 1][this.indexJ]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI + 1][this.indexJ]);
                    }
                }
            } else {
                for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                    if (defaultZone[this.indexI - 1] !== undefined) {
                        if (defaultZone[this.indexI - 1][j] === ' ') {
                            hasil.push(board[this.indexI - 1][j]);
                        } else if (piece[defaultZone[this.indexI - 1][j]].pihak !== this.pihak) {
                            hasil.push(board[this.indexI - 1][j]);
                        }
                    } else break;
                }

                if (defaultZone[this.indexI + 1] !== undefined) {
                    if (defaultZone[this.indexI + 1][this.indexJ + 1] === ' ') {
                        hasil.push(board[this.indexI + 1][this.indexJ + 1]);
                    } else if (piece[defaultZone[this.indexI + 1][this.indexJ + 1]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI + 1][this.indexJ + 1]);
                    }
                    if (defaultZone[this.indexI + 1][this.indexJ - 1] === ' ') {
                        hasil.push(board[this.indexI + 1][this.indexJ - 1]);
                    } else if (piece[defaultZone[this.indexI - 1][this.indexJ - 1]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI + 1][this.indexJ - 1]);
                    }
                }
            }
            return hasil;
        }
    }

    this.promote = function() {
        this.promosi = true;
        this.kelas += '+'
    }

    this.depromote = function() {
        this.promosi = false;
        this.kelas = this.kelas[0];
    }

    this.summoned = function(tempat) {
        summon(this, tempat);
    }



}

function Gold(nama, kelas, indexI, indexJ, pihak, arena, promosi) {
    this.nama = nama;
    this.kelas = kelas;
    this.posisi = function() {
        if (this.arena === 'board') return board[this.indexI][this.indexJ];
        else return handsBlock[this.pihak][this.indexJ];
    }
    this.indexI = indexI;
    this.indexJ = indexJ;
    this.pihak = pihak;
    this.arena = arena;
    this.promosi = promosi;
    this.taken = function() {
        take(this);
    }

    this.posibleMove = function() {
        let hasil = [];
        if (this.pihak === 'black') {

            for (let i = this.indexI; i <= this.indexI + 1; i++) {
                for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                    if (defaultZone[i] !== undefined) {
                        if (defaultZone[i][j] === ' ') {
                            hasil.push(board[i][j]);
                        } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                            hasil.push(board[i][j]);
                        }
                    } else break;
                }
            }
            if (defaultZone[this.indexI - 1] !== undefined) {
                if (defaultZone[this.indexI - 1][j] === ' ') {
                    hasil.push(board[i - 1][j]);
                } else if (piece[defaultZone[this.indexI - 1][j]].pihak !== this.pihak) {
                    hasil.push(board[i - 1][j]);
                }
            }

            return hasil
        } else if (this.pihak === 'white') {
            for (let i = this.indexI - 1; i <= this.indexI; i++) {
                for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                    if (defaultZone[i] !== undefined) {
                        if (defaultZone[i][j] === ' ') {
                            hasil.push(board[i][j]);
                        } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                            hasil.push(board[i][j]);
                        }
                    } else break;
                }
            }
            if (defaultZone[this.indexI + 1] !== undefined) {
                if (defaultZone[this.indexI + 1][this.indexJ] === ' ') {
                    hasil.push(board[this.indexI + 1][this.indexJ]);
                } else if (piece[defaultZone[this.indexI + 1][this.indexJ]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI + 1][this.indexJ]);
                }
            }

            return hasil;
        }
    }

    this.promote = function() {
        this.promosi = true;
        this.kelas += '+'
    }

    this.depromote = function() {
        this.promosi = false;
        this.kelas = this.kelas[0];
    }

    this.summoned = function(tempat) {
        summon(this, tempat);
    }



}

function Rook(nama, kelas, indexI, indexJ, pihak, arena, promosi) {
    this.nama = nama;
    this.kelas = kelas;
    this.posisi = function() {
        if (this.arena === 'board') return board[this.indexI][this.indexJ];
        else return handsBlock[this.pihak][this.indexJ];
    }
    this.indexI = indexI;
    this.indexJ = indexJ;
    this.pihak = pihak;
    this.arena = arena;
    this.promosi = promosi;
    this.taken = function() {
        take(this);
    }

    this.posibleMove = function() {
        let hasil = []
        if (this.promosi) {
            for (let i = this.indexI - 1; i <= this.indexI + 1; i++) {
                for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                    if (defaultZone[i] !== undefined) {
                        if (defaultZone[i][j] === ' ') {
                            hasil.push(board[i][j]);
                        } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                            hasil.push(board[i][j]);
                        }
                    } else break;
                }
            }

            for (let i = this.indexI - 1; i >= 0; i--) {
                if (defaultZone[i][this.indexJ] === ' ') {
                    hasil.push(board[i][this.indexJ]);
                } else if (defaultZone[i][this.indexJ] !== undefined) {
                    if (piece[defaultZone[i][this.indexJ]].pihak !== this.pihak) {
                        hasil.push(board[i][this.indexJ]);
                    }
                    break;
                } else break;
            }

            for (let i = this.indexI + 1; i < 9; i++) {
                if (defaultZone[i][this.indexJ] === ' ') {
                    hasil.push(board[i][this.indexJ]);
                } else if (piece[defaultZone[i][this.indexJ]]) {
                    hasil.push(board[i][this.indexJ]);
                    break;
                } else break;
            }

            for (let j = this.indexJ - 1; j >= 0; j--) {
                if (defaultZone[this.indexI][j] === ' ') {
                    hasil.push(board[this.indexI][j]);
                } else if (defaultZone[this.indexI][j] !== undefined) {
                    if (piece[defaultZone[this.indexI][j]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI][j]);
                    }
                    break;
                } else break;
            }

            for (let j = this.indexJ + 1; j < 9; j++) {
                if (defaultZone[this.indexI][j] === ' ') {
                    hasil.push(board[this.indexI][j]);
                } else if (piece[defaultZone[this.indexI][j]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI][j]);
                    break;
                } else break;
            }
        } else {
            for (let i = this.indexI - 1; i >= 0; i--) {
                if (defaultZone[i][this.indexJ] === ' ') {
                    hasil.push(board[i][this.indexJ]);
                } else if (defaultZone[i][this.indexJ] !== undefined) {
                    if (piece[defaultZone[i][this.indexJ]].pihak !== this.pihak) {
                        hasil.push(board[i][this.indexJ]);
                    }
                    break;
                } else break;
            }

            for (let i = this.indexI + 1; i < 9; i++) {
                if (defaultZone[i][this.indexJ] === ' ') {
                    hasil.push(board[i][this.indexJ]);
                } else if (piece[defaultZone[i][this.indexJ]].pihak !== this.pihak) {
                    hasil.push(board[i][this.indexJ]);
                    break;
                } else break;
            }

            for (let j = this.indexJ - 1; j >= 0; j--) {
                if (defaultZone[this.indexI][j] === ' ') {
                    hasil.push(board[this.indexI][j]);
                } else if (defaultZone[this.indexI][j] !== undefined) {
                    if (piece[defaultZone[this.indexI][j]].pihak !== this.pihak) {
                        hasil.push(board[this.indexI][j]);
                    }
                    break;
                } else break;
            }

            for (let j = this.indexJ + 1; j < 9; j++) {
                if (defaultZone[this.indexI][j] === ' ') {
                    hasil.push(board[this.indexI][j]);
                } else if (piece[defaultZone[this.indexI][j]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI][j]);
                    break;
                } else break;
            }



            return hasil;
        }
    }

    this.promote = function() {
        this.promosi = true;
        this.kelas += '+'
    }

    this.depromote = function() {
        this.promosi = false;
        this.kelas = this.kelas[0];
    }

    this.summoned = function(tempat) {
        summon(this, tempat);
    }


}

function Bishop(nama, kelas, indexI, indexJ, pihak, arena, promosi) {
    this.nama = nama;
    this.kelas = kelas;
    this.posisi = function() {
        if (this.arena === 'board') return board[this.indexI][this.indexJ];
        else return handsBlock[this.pihak][this.indexJ];
    }
    this.indexI = indexI;
    this.indexJ = indexJ;
    this.pihak = pihak;
    this.arena = arena;
    this.promosi = promosi;
    this.taken = function() {
        take(this);
    }

    this.posibleMove = function() {
        let hasil = []

        if (this.promosi) {
            for (let i = this.indexI - 1; i <= this.indexI + 1; i++) {
                for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                    if (defaultZone[i] !== undefined) {
                        if (defaultZone[i][j] === ' ') {
                            hasil.push(board[i][j]);
                        } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                            hasil.push(board[i][j]);
                        }
                    } else break;
                }
            }

            for (let i = 1; this.indexI - i >= 0 && this.indexJ - i >= 0; i++) {
                if (defaultZone[this.indexI - i][this.indexJ - i] === ' ') {
                    hasil.push(board[this.indexI - i][this.indexJ - i]);
                } else if (piece[defaultZone[this.indexI - i][this.indexJ - i]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI - i][this.indexJ - i]);
                    break;
                } else break;
            }

            for (let i = 1; this.indexI - i >= 0 && this.indexJ + i < 9; i++) {
                if (defaultZone[this.indexI - i][this.indexJ + i] === ' ') {
                    hasil.push(board[this.indexI - i][this.indexJ + i]);
                } else if (piece[defaultZone[this.indexI - i][this.indexJ + i]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI - i][this.indexJ + i]);
                    break;
                } else break;
            }

            for (let i = 1; this.indexI + i < 9 && this.indexJ - i >= 0; i++) {
                if (defaultZone[this.indexI + i][this.indexJ - i] === ' ') {
                    hasil.push(board[this.indexI + i][this.indexJ - i]);
                } else if (piece[defaultZone[this.indexI + i][this.indexJ - i]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI + i][this.indexJ - i]);
                    break;
                } else break;
            }

            for (let i = 1; this.indexI + i < 9 && this.indexJ + i < 9; i++) {
                if (defaultZone[this.indexI + i][this.indexJ + i] === ' ') {
                    hasil.push(board[this.indexI + i][this.indexJ + i]);
                } else if (piece[defaultZone[this.indexI + i][this.indexJ + i]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI + i][this.indexJ + i]);
                    break;
                } else break;
            }


        } else {

            for (let i = 1; this.indexI - i >= 0 && this.indexJ - i >= 0; i++) {
                if (defaultZone[this.indexI - i][this.indexJ - i] === ' ') {
                    hasil.push(board[this.indexI - i][this.indexJ - i]);
                } else if (piece[defaultZone[this.indexI - i][this.indexJ - i]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI - i][this.indexJ - i]);
                    break;
                } else break;
            }

            for (let i = 1; this.indexI - i >= 0 && this.indexJ + i < 9; i++) {
                if (defaultZone[this.indexI - i][this.indexJ + i] === ' ') {
                    hasil.push(board[this.indexI - i][this.indexJ + i]);
                } else if (piece[defaultZone[this.indexI - i][this.indexJ + i]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI - i][this.indexJ + i]);
                    break;
                } else break;
            }

            for (let i = 1; this.indexI + i < 9 && this.indexJ - i >= 0; i++) {
                if (defaultZone[this.indexI + i][this.indexJ - i] === ' ') {
                    hasil.push(board[this.indexI + i][this.indexJ - i]);
                } else if (piece[defaultZone[this.indexI + i][this.indexJ - i]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI + i][this.indexJ - i]);
                    break;
                } else break;
            }

            for (let i = 1; this.indexI + i < 9 && this.indexJ + i < 9; i++) {
                if (defaultZone[this.indexI + i][this.indexJ + i] === ' ') {
                    hasil.push(board[this.indexI + i][this.indexJ + i]);
                } else if (piece[defaultZone[this.indexI + i][this.indexJ + i]].pihak !== this.pihak) {
                    hasil.push(board[this.indexI + i][this.indexJ + i]);
                    break;
                } else break;
            }

        }
        return hasil

    }

    this.promote = function() {
        this.promosi = true;
        this.kelas += '+'
    }

    this.depromote = function() {
        this.promosi = false;
        this.kelas = this.kelas[0];
    }

    this.summoned = function(tempat) {
        summon(this, tempat);
    }


}

function King(nama, kelas, indexI, indexJ, pihak, arena, promosi) {
    this.nama = nama;
    this.kelas = kelas;
    this.posisi = function() {
        if (this.arena === 'board') return board[this.indexI][this.indexJ];
        else return handsBlock[this.pihak][this.indexJ];
    }
    this.indexI = indexI;
    this.indexJ = indexJ;
    this.pihak = pihak;
    this.arena = arena;
    this.promosi = promosi;
    this.taken = function() {
        take(this);
    }

    this.posibleMove = function() {
        let hasil = []

        for (let i = this.indexI - 1; i <= this.indexI + 1; i++) {
            for (let j = this.indexJ - 1; j <= this.indexJ + 1; j++) {
                if (defaultZone[i] !== undefined) {
                    if (defaultZone[i][j] === ' ') {
                        hasil.push(board[i][j]);
                    } else if (piece[defaultZone[i][j]].pihak !== this.pihak) {
                        hasil.push(board[i][j]);
                    }
                } else break;
            }
        }
        return hasil

    }

    this.promote = function() {
        this.promosi = true;
        this.kelas += '+'
    }

    this.depromote = function() {
        this.promosi = false;
        this.kelas = this.kelas[0];
    }



}

let defaultZone = [
    ['L', 'N', 'S', 'G', 'K', 'G', 'S', 'N', 'L'],
    [' ', 'R', ' ', ' ', ' ', ' ', ' ', 'B', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', 'B', ' ', ' ', ' ', ' ', ' ', 'R', ' '],
    ['L', 'N', 'S', 'G', 'K', 'G', 'S', 'N', 'L']
];

function take(input) {
    if (input.pihak === 'black') {
        input.pihak = 'white';

    } else if (input.pihak === 'white') {
        input.pihak = 'black';
    }
    if (input.promosi) input.depromote();

    input.arena = 'hand';
    for (let i = 0; i < hands[input.pihak].length; i++) {
        if (hands[input.pihak][i] === ' ') {
            hands[input.pihak][i] = input.nama;
            input.indexI = 0;
            input.indexJ = i;
            document.getElementById(handsBlock[input.pihak][input.indexJ]).style.background = "url('" + input.kelas + "-" + input.pihak + ".png')";
            document.getElementById(handsBlock[input.pihak][input.indexJ]).style.backgroundSize = "100% 100%";
            break;
        }
    }




}

function summon(input, letak) {

    document.getElementById(handsBlock[input.pihak][input.indexJ]).style.background = "";
    document.getElementById(handsBlock[input.pihak][input.indexJ]).style.backgroundColor = "";

    input.arena = 'board'
    hands[input.pihak][input.indexJ] = ' ';
    input.indexI = objekBoard[letak].indexI;
    input.indexJ = objekBoard[letak].indexJ;
    defaultZone[input.indexI][input.indexJ] = input.nama;

    document.getElementById(board[objekBoard[letak].indexI][objekBoard[letak].indexJ]).style.background = "url('" + piece[input.nama].kelas + "-" + piece[input.nama].pihak + ".png')";
    document.getElementById(board[objekBoard[letak].indexI][objekBoard[letak].indexJ]).style.backgroundSize = "100% 100%";
}

function makeMove(selectedPiece, tempat) {

    document.getElementById(board[piece[selectedPiece].indexI][piece[selectedPiece].indexJ]).style.background = "";



    defaultZone[piece[selectedPiece].indexI][piece[selectedPiece].indexJ] = ' '
    if (defaultZone[objekBoard[tempat].indexI][objekBoard[tempat].indexJ] !== ' ') piece[defaultZone[objekBoard[tempat].indexI][objekBoard[tempat].indexJ]].taken();
    defaultZone[objekBoard[tempat].indexI][objekBoard[tempat].indexJ] = selectedPiece;
    piece[selectedPiece].indexI = objekBoard[tempat].indexI;
    piece[selectedPiece].indexJ = objekBoard[tempat].indexJ;

    if (piece[selectedPiece].pihak === 'black' && objekBoard[tempat].indexI > 5 && !piece[selectedPiece].promosi) piece[selectedPiece].promote();
    if (piece[selectedPiece].pihak === 'white' && objekBoard[tempat].indexI < 3 && !piece[selectedPiece].promosi) piece[selectedPiece].promote();

    document.getElementById(board[objekBoard[tempat].indexI][objekBoard[tempat].indexJ]).style.background = "url('" + piece[selectedPiece].kelas + "-" + piece[selectedPiece].pihak + ".png')";
    document.getElementById(board[objekBoard[tempat].indexI][objekBoard[tempat].indexJ]).style.backgroundSize = "100% 100%";

}

function makePosibleSummon(input) {
    let arr = [];
    if (piece[input].kelas === 'P' || piece[input].kelas === 'L') {
        for (let j = 0; j < 9; j++) {
            let ada = false;
            for (let i = 0; i < 9; i++) {
                if (defaultZone[i][j] !== ' ') {
                    if (piece[defaultZone[i][j]].pihak === piece[input].pihak && piece[defaultZone[i][j]].kelas === 'P') {
                        ada = true;
                    }
                }
            }

            if (!ada) {
                if (piece[input].pihak === 'black') {
                    for (let i = 0; i < 8; i++) {
                        if (defaultZone[i][j] === ' ') {
                            arr.push(board[i][j]);
                        }
                    }
                } else {
                    for (let i = 1; i < 9; i++) {
                        if (defaultZone[i][j] === ' ') {
                            arr.push(board[i][j]);
                        }
                    }
                }

            }
        }
    } else if (piece[input].kelas === 'N') {
        for (let j = 0; j < 9; j++) {

            if (piece[input].pihak === 'black') {
                for (let i = 0; i < 7; i++) {
                    if (defaultZone[i][j] === ' ') {
                        arr.push(board[i][j]);
                    }
                }
            } else {
                for (let i = 2; i < 9; i++) {
                    if (defaultZone[i][j] === ' ') {
                        arr.push(board[i][j]);
                    }
                }
            }


        }
    } else {
        for (let j = 0; j < 9; j++) {
            for (let i = 0; i < 9; i++) {
                if (defaultZone[i][j] === ' ') {
                    arr.push(board[i][j]);
                }
            }
        }
    }

    return arr;
}

function makeSelection(input) {
    if (selectedPawns) {
        if (piece[selectedPawns].arena === 'board') document.getElementById(board[piece[selectedPawns].indexI][piece[selectedPawns].indexJ]).style.backgroundColor = "";
        else document.getElementById(handsBlock[turn][hands[turn].indexOf(selectedPawns)]).style.backgroundColor = "";
    }

    if (/block/.test(input)) { selectedPawns = defaultZone[objekBoard[input].indexI][objekBoard[input].indexJ]; } else { selectedPawns = hands[turn][handsBlock[turn].indexOf(input)] }

    console.log(piece[selectedPawns]);

    if (piece[selectedPawns].arena === 'board') mungkin = piece[selectedPawns].posibleMove();
    else mungkin = makePosibleSummon(selectedPawns);

    console.log(mungkin);
    if (piece[selectedPawns].arena === 'board') document.getElementById(board[piece[selectedPawns].indexI][piece[selectedPawns].indexJ]).style.backgroundColor = "rgba(148, 148, 148, 0.6)";
    else document.getElementById(handsBlock[turn][piece[selectedPawns].indexJ]).style.backgroundColor = "rgba(148, 148, 148, 0.6)";
    if (check(piece)) document.getElementById('text').innerHTML = 'CHECK';
    else document.getElementById('text').innerHTML = '';
}

function pencet(input) {
    console.log(defaultZone);
    for (let i = 0; i < posibleSelected.length; i++) {
        if (input === posibleSelected[i]) {
            makeSelection(input);
            break;
        }
    }


    for (let i = 0; i < mungkin.length; i++) {
        if (input === mungkin[i]) {
            if (piece[selectedPawns].arena === 'board') makeMove(selectedPawns, input);
            else {
                piece[selectedPawns].summoned(input);
            }
            let temp = turn;
            turn = notTurn;
            notTurn = temp;
            makePosibleSelected(turn);
            mungkin = [];
            selectedPawns = '';
            if (check(piece)) document.getElementById('text').innerHTML = 'CHECK';
            else document.getElementById('text').innerHTML = '';
        }
    }

}

function makePosibleSelected(giliran) {
    posibleSelected = []
    for (let keys in piece) {
        if (piece[keys].pihak === giliran) posibleSelected.push(piece[keys].posisi());
    }
    console.log(posibleSelected);
}

function check(papan) {
    let panjang = []
    for (let key in papan) {
        if (papan[key].pihak === notTurn && papan[key].arena === 'board') {
            let tambah = papan[key].posibleMove();
            panjang.push(tambah);
        }
    }


    for (let i = 0; i < panjang.length; i++) {
        for (let j = 0; j < panjang[i].length; j++) {

            if (turn === 'black') {
                if (panjang[i][j] === papan.kb.posisi()) {
                    return true;
                }
            } else if (turn === 'white') {
                if (panjang[i][j] === papan.kw.posisi()) {
                    return true;
                }
            }
        }
    }


    return false;
}









const board = [];
let size = 9;
let makeBoard = [];
let objekBoard = {};
let mungkin = [];
let selectedPawns;
let turn = 'black';
let notTurn = 'white'

let piece = {};
let count = 0

for (let i = 0; i < size * size; i++) {
    makeBoard.push('block' + (i + 1));
    objekBoard['block' + (i + 1)] = {
        indexI: Math.floor(i / 9),
        indexJ: i % 9
    }
    if (makeBoard.length === 9) {
        board.push(makeBoard);
        makeBoard = [];
        count++
    }
    if (count === 10) count = 0;
}

// make pawns
for (let i = 1; i <= 18; i++) {
    if (i % 2 === 0) piece['p' + i] = new Pawns('p' + i, 'P', 2, 0 + Math.floor(i / 2) - 1, 'black', 'board', false);
    else piece['p' + i] = new Pawns('p' + i, 'P', 6, 0 + Math.floor(i / 2), 'white', 'board', false);
}

// make Lance
for (let i = 1; i <= 4; i++) {
    if (i % 2 === 0) piece['l' + i] = new Lance('l' + i, 'L', 0, 0 + (Math.floor(i / 2) - 1) * 8, 'black', 'board', false);
    else piece['l' + i] = new Lance('l' + i, 'L', 8, 0 + Math.floor(i / 2) * 8, 'white', 'board', false);
}

// make Knight
for (let i = 1; i <= 4; i++) {
    if (i % 2 === 0) piece['n' + i] = new Knight('n' + i, 'N', 0, 1 + (Math.floor(i / 2) - 1) * 6, 'black', 'board', false);
    else piece['n' + i] = new Knight('n' + i, 'N', 8, 1 + Math.floor(i / 2) * 6, 'white', 'board', false);
}

// make Silver
for (let i = 1; i <= 4; i++) {
    if (i % 2 === 0) piece['s' + i] = new Silver('s' + i, 'S', 0, 2 + (Math.floor(i / 2) - 1) * 4, 'black', 'board', false);
    else piece['s' + i] = new Silver('s' + i, 'S', 8, 2 + Math.floor(i / 2) * 4, 'white', 'board', false);
}

// make Gold
for (let i = 1; i <= 4; i++) {
    if (i % 2 === 0) piece['g' + i] = new Gold('g' + i, 'G', 0, 3 + (Math.floor(i / 2) - 1) * 2, 'black', 'board', false);
    else piece['g' + i] = new Gold('g' + i, 'G', 8, 3 + Math.floor(i / 2) * 2, 'white', 'board', false);
}

// make rook
for (let i = 1; i <= 2; i++) {
    if (i % 2 === 0) piece['r' + i] = new Rook('r' + i, 'R', 1, 1, 'black', 'board', false);
    else piece['r' + i] = new Rook('r' + i, 'R', 7, 7, 'white', 'board', false);
}

// make bishop
for (let i = 1; i <= 2; i++) {
    if (i % 2 === 0) piece['b' + i] = new Bishop('b' + i, 'B', 1, 7, 'black', 'board', false);
    else piece['b' + i] = new Bishop('b' + i, 'B', 7, 1, 'white', 'board', false);
}

// make king
for (let i = 1; i <= 2; i++) {
    if (i % 2 === 0) piece['kb'] = new King('kb', 'K', 0, 4, 'black', 'board', false);
    else piece['kw'] = new King('kw', 'K', 8, 4, 'white', 'board', false);
}



for (let keys in piece) {
    defaultZone[piece[keys].indexI][piece[keys].indexJ] = keys;
    document.getElementById(piece[keys].posisi()).style.background = "url('" + piece[keys].kelas + "-" + piece[keys].pihak + ".png')";
    document.getElementById(piece[keys].posisi()).style.backgroundSize = "100% 100%";
}



let posibleSelected = [];

for (let keys in piece) {
    if (piece[keys].pihak !== 'white') posibleSelected.push(piece[keys].posisi());
}

let hands = {
    black: [],
    white: []
}

let handsBlock = {
    black: [],
    white: []
}

for (let i = 1; i <= 16; i++) {
    hands.black.push(' ');
    hands.white.push(' ');
    handsBlock.black.push('blackHands' + i);
    handsBlock.white.push('whiteHands' + i);
}

makePosibleSelected(turn);