
//PROBLEM 1

loaf = {
    flour: 300,
    water: 210,
    hydration: function () {
        return this.water / (this.flour * 100);
    }
}

console.log(loaf.flour, loaf.water)
console.log(loaf.hydration());

//PROBLEM 2

const objects = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
};

for (const property in objects) {
    console.log(`${property}: ${objects[property]}`);
}

//PROBLEM 3

const hobbit = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbit.meals[3]);

//PROBLEM 4 & 5

let employeeArr = [
    {
        name: 'Alex',
        jobTitle: 'Overlord'
    },
    {
        name: 'John',
        jobTitle: 'Necromancer',
        boss: 'Alex'
    },
    {
        name: 'Liz',
        jobTitle: 'Rogue',
        boss: 'Alex'
    },

    {
        name: 'Joe',
        jobTitle: 'Picks up horse poo',
        boss: 'Alex'
    }

];

for (let obj in employeeArr) {
    if (employeeArr[obj].boss === undefined) {
        console.log((`"${employeeArr[obj].jobTitle} ${employeeArr[obj].name} doesn't report to anybody."`));
    } else {
        console.log(`"${employeeArr[obj].jobTitle} ${employeeArr[obj].name} reports to ${employeeArr[obj].boss}."`);
    }
}

//PROBLEM 6


const decode = string => {

    const cipherObj = {
        a: 2,
        b: 3,
        c: 4,
        d: 5,
    };

    return cipherObj[string[0]] ? string.charAt(cipherObj[string[0]] - 1) : ' ';

}

function decodeWords(words) {
    return words.split(' ').map(e => decode(e)).join('');
}

let showResult = 'craft block argon meter bells brown croon droop';

console.log(decodeWords(showResult));

//PROBLEM 7

function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
    this.name = name;
    this.nickname = nickname;
    this.race = race;
    this.origin = origin;
    this.attack = attack;
    this.defense = defense;
    this.weapon = weapon;
    this.describe = function () {
        return `${name} is a ${race} from ${origin} who uses a ${weapon}`;
    };
    this.evaluateFight = function (character) {
        let x = character.defense - this.damage;
        let y = this.defense - character.damage;
        if (this.defense > character.attack) {
            return `${character} took no damage.`;
        }
        else {
            return `Your opponent takes ${x} damage and you recieve ${y} damage`;

        }
    };
}

const characterArray = [
    new createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Wizard Staff'),
    new createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'Ring'),
    new createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
    new createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
    new createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'),
    new createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 8, 2, 'Hadhafang')
];

const findAragorn = characterArray.find(e => e.nickname === 'aragorn').describe();

const hobbits = characterArray.filter(e => e.race === 'Hobbit');

const damageOverFive = characterArray.filter(e => e.attack > 5);

console.log(findAragorn)
console.log(hobbits);
console.log(damageOverFive);