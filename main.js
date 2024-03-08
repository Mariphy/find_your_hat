const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(array) {
        this.field = array;
        this.horizontalCoordinate = 0;
        this.verticalCoordinate = 0;
    }

    print() {
        for (let i = 0; i < this.field.length; i++) {
            console.log(this.field[i].join(''));
        }
    }

    move(userInput) {

        if (userInput === 'down') {
            this.verticalCoordinate += 1;
        } else if (userInput === 'right') {
            this.horizontalCoordinate += 1;
        } else if (userInput === 'up') {
            this.verticalCoordinate -= 1;
        } else if (userInput === 'left') {
            this.horizontalCoordinate -= 1;
        }
        return this.field[this.verticalCoordinate][this.horizontalCoordinate] 
    }
    
    play() {

        if (this.horizontalCoordinate < 0 || this.verticalCoordinate < 0) {
            console.log('You are out of field.');
            return true;
        } else if (this.field[this.verticalCoordinate][this.horizontalCoordinate] === hat) {
            console.log('You won!');
            return true;
        } else if (this.field[this.verticalCoordinate][this.horizontalCoordinate] === hole) {
            console.log('You fell in the hole and lost.');
            return true;
        } else if (this.field[this.verticalCoordinate][this.horizontalCoordinate] === pathCharacter) {
            this.field[this.verticalCoordinate][this.horizontalCoordinate] = pathCharacter; 
            return false;
        }      
    }

    /*static generateField(width, height) {

    }*/
}


const myField = new Field([
    [pathCharacter, hat, hole, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter, hole],
    [hole, hole, fieldCharacter, fieldCharacter]
  ]);

const playGame = () => {
    let endGame = false;
    while (!endGame) {
        let direction = prompt(`Which way? (please, use 'up', 'down', 'right' or 'left') `);
        myField.move(direction);
        if (myField.play() === true) {
            break;
        }
    }
    myField.print(); 
}

playGame();