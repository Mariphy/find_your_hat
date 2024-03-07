const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(array) {
        this.field = array;
        horizontalCoordinate = 0;
        verticalCoordinate = 0;
    }

    print() {
        for (let i = 0; i < this.field.length; i++) {
            console.log(this.field[i].join(''));
        }
    }

    //move(userInput) {

    //}

    /*static generateField(width, height) {

    }*/
}


const myField = new Field([
    [pathCharacter, fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter, hole],
    [hole, hole, fieldCharacter, fieldCharacter]
  ]);

let nextCoordinate = myField.field[0][0];
//console.log(nextCoordinate);
myField.print();

// Getting user input
const direction = prompt(`Which way? (please, use 'up', 'down', 'right' or 'left') `);


const calculateNextCoordinate = (userInput) => {
    let startPointHorizontal = 0;
    let startPointVertical = 0;
    if (direction === 'down') {
        startPointVertical += 1;
    } else if (direction === 'right') {
        startPointHorizontal += 1;
        //console.log(startPointHorizontal);
    } else if (direction === 'up') {
        startPointVertical -= 1;
        //console.log(startPointVertical);
    } else if (direction === 'left') {
        startPointHorizontal -= 1;
    }
    if (startPointHorizontal < 0 || startPointVertical < 0) {
        console.log('You are out of field.')
    } else {
        nextCoordinate = myField.field[startPointVertical][startPointHorizontal];
        return nextCoordinate;
    }    
}

calculateNextCoordinate(direction);


const playGame = () => {
    if (nextCoordinate === hat) {
        console.log('You won!')
    } else if (nextCoordinate === hole) {
        console.log('You fell in the hole and lost.')
    } else if (nextCoordinate === fieldCharacter) {
        while (nextCoordinate === fieldCharacter) {
            nextCoordinate = pathCharacter;
            myField.print();
        }   
    }

}


playGame();