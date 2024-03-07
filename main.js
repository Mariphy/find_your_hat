const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(array) {
        this.field = array;
    }

    print() {
        for (let i = 0; i < this.field.length; i++) {
            console.log(this.field[i].join(''));
        }
    }
}

const myField = new Field([
    [pathCharacter, fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter, hole],
    [hole, hole, fieldCharacter, fieldCharacter]
  ]);

//console.log(myField.field);
console.log(myField.print());