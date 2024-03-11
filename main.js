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

    play(userInput) {

        if (userInput === 'down') {
            this.verticalCoordinate += 1;
        } else if (userInput === 'right') {
            this.horizontalCoordinate += 1;
        } else if (userInput === 'up') {
            this.verticalCoordinate -= 1;
        } else if (userInput === 'left') {
            this.horizontalCoordinate -= 1;
        }

        if (this.horizontalCoordinate < 0 || this.verticalCoordinate < 0) {
            console.log('You are out of field.');
            return true;
        }

        if (this.field[this.verticalCoordinate][this.horizontalCoordinate] === hat) {
            console.log('You won!');
            return true;
        } else if (this.field[this.verticalCoordinate][this.horizontalCoordinate] === hole) {
            console.log('You fell in the hole and lost.');
            return true;
        } else if (this.field[this.verticalCoordinate][this.horizontalCoordinate] === fieldCharacter) {
            this.field[this.verticalCoordinate][this.horizontalCoordinate] = pathCharacter;
            return this.field[this.verticalCoordinate][this.horizontalCoordinate]; 
        }   
    }
    

    static generateField(width, height) {
        let generatedField = [[pathCharacter, fieldCharacter, hole], [fieldCharacter, fieldCharacter, fieldCharacter], [fieldCharacter, hat, fieldCharacter]];

        for (let j = 0; j <= 2; j++) {
            while (generatedField[j].length < width) {
                let randomNumber2 = Math.floor(Math.random()*2); 
                if (randomNumber2 === 0) {
                    generatedField[j].push(fieldCharacter);
                } else if (randomNumber2 === 1) {
                    generatedField[j].push(hole);
                } 
            }
        }

        while (generatedField.length < height) {
            let generatedArray = [];
            while (generatedArray.length < width) {
                let randomNumber = Math.floor(Math.random()*2); 
                if (randomNumber === 0) {
                  generatedArray.push(fieldCharacter);
                } else if (randomNumber === 1) {
                  generatedArray.push(hole);
                } 
            }
            generatedField.push(generatedArray);
        }

        /*for (let i = 0; i < generatedField.length; i++) {
            return generatedField[i].join('');
        }*/
        return generatedField;
    } 
}


const myField = new Field([
    [pathCharacter, fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, fieldCharacter, fieldCharacter, hole],
    [fieldCharacter, hat, fieldCharacter, hole],
    [hole, hole, fieldCharacter, fieldCharacter]
  ]);

const myField2 = new Field(Field.generateField(10,10));  

const playGame = (sampleField) => {
    let endGame = false;
    while (!endGame) {
        let direction = prompt(`Which way? (please, use 'up', 'down', 'right' or 'left') `);
        if (sampleField.play(direction) === true) {
            break;
        }
    }
    sampleField.print(); 
}


playGame(myField2);
//console.log(myField2)


