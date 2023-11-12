/* 
-- TO DO --
- fill in backgroundList
- fill in itemList
- fill in weaponList
- fill in armorList
- if stats are empty, create a rolls list for use in filling stat numbers
- expand on class list to include abilities
- expand on race list to include subraces
*/





const classList = [
    {
        className: `Artificer`,
        hitDice: 8,
        saveThrows: ['Constitution', 'Intelligence'],
        skills: ['Choose two from', ['Arcana','History','Investigation','Medicine','Nature','Perception','Sleight of Hand']]
    }, {
        className: `Barbarian`,
        hitDice: 12,
        saveThrows: ['Strength', 'Constitution'],
        skills: ['Choose two from', ['Animal Handling','Athletics','Intimidation','Nature','Perception','Survival']]
    }, {
        className: `Bard`,
        hitDice: 8,
        saveThrows: ['Dexterity', 'Charisma'],
        skills: ['Choose any three']
    }, {
        className: `Cleric`,
        hitDice: 8,
        saveThrows: ['Wisdom', 'Charisma'],
        skills: ['Choose two from', ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion']]
    }, {
        className: `Druid`,
        hitDice: 8,
        saveThrows: ['Intelligence', 'Wisdom'],
        skills: ['Choose two from', ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival']]
    }, {
        className: `Fighter`,
        hitDice: 10,
        saveThrows: ['Strength', 'Constitution'],
        skills: ['Choose two from', ['Acrobatics', 'Animal Handling', 'Athletics','History', 'Insight', 'Intimidation', 'Perception', 'Survival']]
    }, {
        className: `Monk`,
        hitDice: 8,
        saveThrows: ['Strength', 'Dexterity'],
        skills: ['Choose two from', ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth']]
    }, {
        className: `Paladin`,
        hitDice: 10,
        saveThrows: ['Wisdom', 'Charisma'],
        skills: ['Choose two from', ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion']]
    }, {
        className: `Ranger`,
        hitDice: 10,
        saveThrows: ['Strength', 'Dexterity'],
        skills: ['Choose three from', ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival']]
    }, {
        className: `Rogue`,
        hitDice: 8,
        saveThrows: ['Dexterity', 'Intelligence'],
        skills: ['Choose four from', ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth']]
    }, {
        className: `Sorcerer`,
        hitDice: 6,
        saveThrows: ['Constitution', 'Charisma'],
        skills: ['Choose two from', ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion']]
    }, {
        className: `Warlock`,
        hitDice: 8,
        saveThrows: ['Wisdom', 'Charisma'],
        skills: ['Choose two from', ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion']]
    }, {
        className: `Wizard`,
        hitDice: 6,
        saveThrows: ['Intelligence', 'Wisdom'],
        skills: ['Choose two from', ['Arcana', 'History', 'Insight', 'Investigation', 'Medicine', 'Religion']]
    }
];
const raceList = [
    {
        race: `Dragonborn`,
        abilityScores: {
            Strength: 2,
            Charisma: 1
        },
        size: `Medium`,
        speed: 30
    },
    {
        race: `Dwarf`,
        abilityScores: {
            Constitution: 2
        },
        size: `Medium`,
        speed: 25
    },
    {
        race: `Elf`,
        abilityScores: {
            Dexterity: 2
        },
        size: `Medium`,
        speed: 30
    },
    {
        race: `Gnome`,
        abilityScores: {
            Intelligence: 2
        },
        size: `Small`,
        speed: 25
    },
    {
        race: `Half-Elf`,
        abilityScores: {
            Charisma: 2,
            chooseTwoFrom: [`Strength`, `Dexterity`, `Constitution`, `Intelligence`, `Wisdom`]
        },
        size: `Medium`,
        speed: 30
    },
    {
        race: `Half-Orc`,
        abilityScores: {
            Strength: 2,
            Constitution: 1
        },
        size: `Medium`,
        speed: 30
    },
    {
        race: `Halfling`,
        abilityScores: {
            Dexterity: 2
        },
        size: `Small`,
        speed: 25
    },
    {
        race: `Human`,
        abilityScores: `Ability from subrace`,
        size: `Medium`,
        speed:30
    },
    {
        race: `Tiefling`,
        abilityScores: {
            Intelligence: 1,
            Charisma: 2
        },
        size: `Medium`,
        speed: 30
    }
];
const backgroundList = [];
const itemList = [];
const weaponList = [];
const armorList = [];

// running searchForKey will return an array of each value for the chosen object key argument
function searchForKey(list, specificKey) {
    let valueArray = [];
    for (let object of list) {
        for (let objectKey in object) {
            if (objectKey == specificKey) {
                valueArray.push(object[objectKey]);
            }
        }
    }
    return valueArray;
};

console.log(searchForKey(raceList, `abilityScores`));
console.log(searchForKey(classList, `className`));

// dice roll function to call
function rollD(diceNumber = 6) {
    return Math.floor(Math.random() * diceNumber) + 1;
};

// running statrolls will return a 6 number array for the stat numbers
function statRolls() {
    let statRollsArray = [];
        for (let j = 0; j <= 5; j++) {
        let singleStatRollArray = [];
        let addedRoll;
        for (let i = 0; i <= 3; i++) {
            singleStatRollArray.push(rollD());
        }
        singleStatRollArray.sort();
        singleStatRollArray.shift();
        addedRoll = singleStatRollArray.reduce((a, b) => a + b);
        statRollsArray.push(addedRoll);
    }
    return statRollsArray;
};





// BELOW IS A WORKING NUMBER MODIFIER FOR STATS
// SOME OF THIS CODE WAS TAKEN, POTENTIALLY MODIFIED, BUT NOT REMOVED, FROM THE SECTION FURTHER BELOW

// REWORK FOR TOUCH. MAYBE ADD BUTTON INSTEAD OF ENTER?

let strengthNumber = document.getElementById(`strengthNumber`);
let strengthNumberInput = document.getElementById(`strengthNumberInput`);
let dexterityNumber = document.getElementById(`dexterityNumber`);
let dexterityNumberInput = document.getElementById(`dexterityNumberInput`);
let constitutionNumber = document.getElementById(`constitutionNumber`);
let constitutionNumberInput = document.getElementById(`constitutionNumberInput`);
let intelligenceNumber = document.getElementById(`intelligenceNumber`);
let intelligenceNumberInput = document.getElementById(`intelligenceNumberInput`);
let wisdomNumber = document.getElementById(`wisdomNumber`);
let wisdomNumberInput = document.getElementById(`wisdomNumberInput`);
let charismaNumber = document.getElementById(`charismaNumber`);
let charismaNumberInput = document.getElementById(`charismaNumberInput`);

let statNumbersFromHTML = document.querySelectorAll(`.statNum`);
let statModifiersFromHTML = document.querySelectorAll('.statMod');
let statNumbersArray = [strengthNumber, dexterityNumber, constitutionNumber, intelligenceNumber, wisdomNumber, charismaNumber];
let statNumberInputs = [strengthNumberInput, dexterityNumberInput, constitutionNumberInput, intelligenceNumberInput, wisdomNumberInput, charismaNumberInput];

// there may be a better way to implement this instead of using baseStatMods
let baseStatMods = [strMod, dexMod, conMod, intMod, wisMod, chaMod] = [0, 0, 0, 0, 0, 0];

function plusMinus(number) {
    for (i = 0; i < number.length; i++) {
        if (Math.sign(number[i].innerHTML) == 1) {
            number[i].innerHTML = `+ ${number[i].innerHTML}`;
        } else if (Math.sign(number[i].innerHTML) == -1) {
            number[i].innerHTML = `- ${number[i].innerHTML * -1}`;
        } else {
            number[i].innerHTML = 0;
        }
    }
}

function changeNumber(baseNumber, inputNumber) {
    baseNumber.style.display = `none`;
    inputNumber.style.display = `block`;
    inputNumber.value = Number(baseNumber.innerHTML);
}
document.onkeydown = function confirmNumber(event) {
    if (event.key == `Enter`) {
        for (let i = 0; i < statNumbersFromHTML.length; i++) {
            if (statNumbersFromHTML[i] == statNumbersArray[i] && statNumbersArray[i].style.display == `none`) {
                statNumbersArray[i].innerHTML = statNumberInputs[i].value;
                statNumbersArray[i].style.display = `block`;
                statNumberInputs[i].style.display = `none`;
            }
            statModifiersFromHTML[i].innerHTML = Math.floor((statNumbersFromHTML[i].innerHTML - 10) / 2);
            baseStatMods[i] = statModifiersFromHTML[i].innerHTML;
        }
    }
    plusMinus(statModifiersFromHTML);
}










// adding save throw modifiers and darkening the circles next to them
// THIS AREA OF CODE IS TO BE REWORKED, WHETHER JUST CHANGES IN VARIABLE NAMES OR COMPLETE REWRITES
// many of these use an old, deleted class list, anything using charClass needs to be updated to className





/*
let classSelection;
let level = 1;
let proficiency = Math.ceil(1 + level / 4);
console.log(proficiency);

let saves = [str, dex, con, int, wis, cha] = ['Strength','Dexterity','Constitution','Intelligence','Wisdom','Charisma'];

let baseStatMods = [strMod, dexMod, conMod, intMod, wisMod, chaMod] = [0, 0, 0, 0, 0, 0];


// let statNum = document.querySelectorAll('.statNum');
let statMod = document.querySelectorAll('.statMod');

let saveDot = document.querySelectorAll('.saveDot');
let saveNum = document.querySelectorAll('.saveNum');

let skillsNum = document.querySelectorAll('.skillsNum');
console.log(skillsNum.innerHTML);

for(i = 0; i < baseStatMods.length; i++) {
    baseStatMods[i] = saveNum[i].innerHTML;
}
plusMinus(saveNum);


function reset() {
    for (i = 0; i < saveDot.length; i++) {
        saveDot[i].style.backgroundColor = 'var(--base)';
    }
    for (i = 0; i < saveNum.length; i++){
        saveNum[i].innerHTML = baseStatMods[i];
    }
}

function plusMinus(number) {
    for (i = 0; i < number.length; i++) {
        if (Math.sign(number[i].innerHTML) == 1) {
            number[i].innerHTML = `+ ${number[i].innerHTML}`;
        } else if (Math.sign(number[i].innerHTML) == -1) {
            number[i].innerHTML = `- ${number[i].innerHTML * -1}`;
        } else {
            number[i].innerHTML = 0;
        }
    }
}

function addSaves() {
    reset();
    classSelection = document.getElementById('chooseClass').value;
    for (i = 0; i < Object.keys(classes).length; i++) {
        if (Object.keys(classes)[i] == classSelection) {
            for (j = 0; j < Object.keys(classes[classSelection].saveThrows).length; j++) {
                for (k = 0; k < saves.length; k++) {
                    if (saves[k] == classes[classSelection].saveThrows[j]) {
                        saveDot[k].style.backgroundColor = 'var(--fill)';
                        saveNum[k].innerHTML = +saveNum[k].innerHTML + proficiency;
                    }
                }
            }
        }
    }
    plusMinus(saveNum);
}

for (i = 0; i < statNum.length; i++){
    statMod[i].innerHTML = Math.floor((statNum[i].innerHTML - 10) / 2);
    baseStatMods[i] = statMod[i].innerHTML;
}
plusMinus(statMod);
*/





// END OF POTENTIAL REWRITES