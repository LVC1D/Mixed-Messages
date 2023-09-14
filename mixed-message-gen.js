// we create the object blueprint with their First Name, age, ability to generate some corny quotes, and comapre one's quote with another instance's quote.

let weirdStuff = {
    firstName: '',
    
    // we define three arrays with various phrase components
    firstArray: [
        'My dog',
        'Elon Musk',
        'A drunk Mr. Krabs',
        'My 7th cousin',
        'A hamster'
    ],

    secondArray: [
        'has achieved',
        'can eat',
        'wants to invent',
        'can count',
        'has no idea how to smash'
    ],

    thirdArray: [
        'a million dollars',
        'my recent homework',
        'a bunch of cockroaches',
        'plants',
        'my teddy bears'
    ],

    // before being able to compose the phrase, we need to access each array's index
    getRandomIndex(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    },

    /* 
    We use a .reduce() iterator upon an array of the three arrays to to return the string interpolated version of our random phrase
    
    */
    generateWeirdMessage() {
        return [this.firstArray, this.secondArray, this.thirdArray].reduce(
            (message, array) => {
            const randomElement = this.getRandomIndex(array);
            return `${message} ${randomElement}`; // 'message' is the message accumulator, while 'array' is per each of the three arrays
            },
            '' // the 'message' initializer
        );
    }
}

// We instantiate the object by having a dude Bobby that wants to say that phrase
const exampleMessage = Object.create(weirdStuff);
exampleMessage.firstName = 'Bobby';

console.log(`${exampleMessage.firstName} wants to say: ${exampleMessage.generateWeirdMessage()}`);
