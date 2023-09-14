// we create the object blueprint with their First Name, age, ability to generate some corny quotes, and comapre one's quote with another instance's quote.

let lifeCoach = {
    firstName: '',
    age: 0,

    // to create a bundle of coerny quotes, I used a switch statement for more efficiency.
    generateMessage() {
        let caseNumber = Math.floor(Math.random() * 10 + 1);
        switch (caseNumber) {
            case 1:
                return 'Life is short. Make it sweet, meaningful, and full of unforgettable moments.';
                break;
            case 2:
                return 'Embrace change, for it is the only constant in life.';
                break;
            case 3:
                return 'Your attitude determines your direction in life. Choose positivity.';
                break;
            case 4:
                return 'Dream big, work hard, and never give up. Success is born from perseverance.';
                break;
            case 5:
                return 'Kindness is a language everyone understands. Spread it everywhere you go.';
                break;
            case 6:
                return 'The best way to predict the future is to create it. Take control of your destiny.';
                break;
            case 7:
                return 'Find joy in the little things, for they often lead to the greatest happiness.';
                break;
            case 8:
                return 'Surround yourself with people who lift you higher. Positive relationships are a key to fulfillment.';
                break;
            case 9:
                return 'Failure is not the end; it\'s a stepping stone to success. Learn from it and keep moving forward.';
                break;
            case 10:
                return 'Live with purpose, love with all your heart, and leave a legacy of kindness and compassion.';
                break;
            default:
                break;
        }
    },

    // this method checks if one's quote agrees with another. I went with string interpolation to make returns more interesting
    checkIfMutual(obj) {
        const mainName = this.firstName;
        const anotherName = obj.firstName;
        const mainMessage = this.generateMessage();
        const anotherMessage = obj.generateMessage();

        if (mainMessage.length === anotherMessage.length) {
            return `Both ${mainName} and ${anotherName} agree that: ${mainMessage}`;
        } else {
            return `${mainName}'s message: ${mainMessage}, ${anotherName}'s message: ${anotherMessage}`;
        }
    }
}


// we create two object instances via Object.create
const illia = Object.create(lifeCoach);
illia.firstName = 'Illia';
illia.age = 29;

const alice = Object.create(lifeCoach);
alice.firstName = 'Alice';
alice.age = 33;

// this checks via Node our output
console.log(illia.checkIfMutual(alice));
