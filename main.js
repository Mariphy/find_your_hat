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

    static generateField(width, height) {
        let generatedField = [];
        let randomNumber = Math.floor(Math.random()*2); 
        let generatedArrayWinner = [];
        while (generatedArrayWinner.length < width) {
            if (randomNumber === 0) {
                generatedArrayWinner = generatedArrayWinner.push(pathCharacter);
            } else if (randomNumber === 1) {
                generatedArrayWinner = generatedArrayWinner.push(hole);
            } else if (randomNumber === 2) {
                if (generatedArrayWinner.includes(hat) === false) {
                    generatedArrayWinner = generatedArrayWinner.push(hat);
                } 
            }

        }
        let generatedArray = [];
        let randomNumber2 = Math.floor(Math.random()*1); 
        while (generatedArray.length < width) {
            if (randomNumber === 0) {
                generatedArray = generatedArray.push(pathCharacter);
            } else if (randomNumber === 1) {
                generatedArray = generatedArray.push(hole);
            } 
        }
        
        while (generatedField.length < height) {
            generatedField = generatedField.push(generatedArray);
        }
        for (let i = 0; i < generatedField.length; i++) {
            console.log(generatedField[i].join(''));
        }
    }
}


const myField = new Field([
    [pathCharacter, hat, hole, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter, hole],
    [hole, hole, fieldCharacter, fieldCharacter]
  ]);

const playGame = (sampleField) => {
    let endGame = false;
    while (!endGame) {
        let direction = prompt(`Which way? (please, use 'up', 'down', 'right' or 'left') `);
        sampleField.move(direction);
        if (sampleField.play() === true) {
            break;
        }
    }
    sampleField.print(); 
}

playGame(myField);

console.log(Field.generateField(10,10));