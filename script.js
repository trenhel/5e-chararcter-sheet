/* 
-- TO DO --
- fill in featList
- fill in itemList
- fill in weaponList
- fill in armorList
- if stats are empty, create a rolls list for use in filling stat numbers
- expand on class list to include abilities, proficiencies, and equipment
- expand on race list to include subraces, variants, and abilities
- change the confirmNumber function to leave a - if input is left empty
- expand on background list to include features
- change initial function to let user either choose own numbers, take random rolls, or roll random numbers and choose where they go.
*/





const classList = [
    {
        class: `Artificer`,
        hitDice: 8,
        saveThrows: ['Constitution', 'Intelligence'],
        skills: ['Choose two from', ['Arcana','History','Investigation','Medicine','Nature','Perception','Sleight of Hand']]
    }, {
        class: `Barbarian`,
        hitDice: 12,
        saveThrows: ['Strength', 'Constitution'],
        skills: ['Choose two from', ['Animal Handling','Athletics','Intimidation','Nature','Perception','Survival']]
    }, {
        class: `Bard`,
        hitDice: 8,
        saveThrows: ['Dexterity', 'Charisma'],
        skills: ['Choose any three']
    }, {
        class: `Cleric`,
        hitDice: 8,
        saveThrows: ['Wisdom', 'Charisma'],
        skills: ['Choose two from', ['History', 'Insight', 'Medicine', 'Persuasion', 'Religion']]
    }, {
        class: `Druid`,
        hitDice: 8,
        saveThrows: ['Intelligence', 'Wisdom'],
        skills: ['Choose two from', ['Arcana', 'Animal Handling', 'Insight', 'Medicine', 'Nature', 'Perception', 'Religion', 'Survival']]
    }, {
        class: `Fighter`,
        hitDice: 10,
        saveThrows: ['Strength', 'Constitution'],
        skills: ['Choose two from', ['Acrobatics', 'Animal Handling', 'Athletics','History', 'Insight', 'Intimidation', 'Perception', 'Survival']]
    }, {
        class: `Monk`,
        hitDice: 8,
        saveThrows: ['Strength', 'Dexterity'],
        skills: ['Choose two from', ['Acrobatics', 'Athletics', 'History', 'Insight', 'Religion', 'Stealth']]
    }, {
        class: `Paladin`,
        hitDice: 10,
        saveThrows: ['Wisdom', 'Charisma'],
        skills: ['Choose two from', ['Athletics', 'Insight', 'Intimidation', 'Medicine', 'Persuasion', 'Religion']]
    }, {
        class: `Ranger`,
        hitDice: 10,
        saveThrows: ['Strength', 'Dexterity'],
        skills: ['Choose three from', ['Animal Handling', 'Athletics', 'Insight', 'Investigation', 'Nature', 'Perception', 'Stealth', 'Survival']]
    }, {
        class: `Rogue`,
        hitDice: 8,
        saveThrows: ['Dexterity', 'Intelligence'],
        skills: ['Choose four from', ['Acrobatics', 'Athletics', 'Deception', 'Insight', 'Intimidation', 'Investigation', 'Perception', 'Performance', 'Persuasion', 'Sleight of Hand', 'Stealth']]
    }, {
        class: `Sorcerer`,
        hitDice: 6,
        saveThrows: ['Constitution', 'Charisma'],
        skills: ['Choose two from', ['Arcana', 'Deception', 'Insight', 'Intimidation', 'Persuasion', 'Religion']]
    }, {
        class: `Warlock`,
        hitDice: 8,
        saveThrows: ['Wisdom', 'Charisma'],
        skills: ['Choose two from', ['Arcana', 'Deception', 'History', 'Intimidation', 'Investigation', 'Nature', 'Religion']]
    }, {
        class: `Wizard`,
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
const backgroundList = [
    {
        background: `Acolyte`,
        skillProficiencies: [`Insight`, `Religion`],
        toolProficiencies: [],
        languages: `Two of your choice`,
        equipment: [`A holy symbol`, [`A prayer book`, `A prayer wheel`], `5 sticks of Incense`, `Vestiments`, `A set of common clothes`, `A belt pouch`],
        startingGold: 15
    },
    {
        background: `Charlatan`,
        skillProficiencies: [`Deception`, `Sleight of Hand`],
        toolProficiencies: [`Disguise kit`, `Forgery kit`],
        languages: [],
        equipment: [`A set of fine clothes`, `A disguise kit`, [`Tools of the con of your choice`, [`Ten stoppered bottles filled with colored liquid`, `A set of weighted dice`, `A deck of marked cards`, `A signet ring of an imaginary duke`]], `A belt pouch`],
        startingGold: 15
    },
    {
        background: `Criminal`,
        skillProficiencies: [`Deception`, `Stealth`],
        toolProficiencies: [`One type of gaming set`, `Thieves' tools`],
        languages: [],
        equipment: [`A crowbar`, `A set of dark common clothes including a hood`, `A belt pouch`],
        startingGold: 15
    },
    {
        background: `Entertainer`,
        skillProficiencies: [`Acrobatics`, `Performance`],
        toolProficiencies: [`Disguise kit`, `One type of musical instrument`],
        languages: [],
        equipment: [`A musical instrument (one of your choice)`, [`The favor of an admirer`, [`A love letter`, `A lock of hair`, `A trinket`]], `Costume clothes`, `A belt pouch`],
        startingGold: 15
    },
    {
        background: `Folk Hero`,
        skillProficiencies: [`Animal Handling`, `Survival`],
        toolProficiencies: [`One type of artisan's tools`, `Vehicles (land)`],
        languages: [],
        equipment: [`A set of artisan's tools (one of your choice)`, `A shovel`, `An iron pot`, `A set of common clothes`, `A belt pouch`],
        startingGold: 10
    },
    {
        background: `Gladiator`,
        skillProficiencies: [`Acrobatics`, `Performance`],
        toolProficiencies: [`Disguise kit`, `One type of musical instrument`],
        languages: [],
        equipment: [`An inexpensive but unususal weapon, such as a trident or net (one of your choice)`, [`The favor of an admirer`[`A love letter`, `A lock of hair`, `A trinket`]], `Costume clothes`, `A belt pouch`],
        startingGold: 15
    },
    {
        background: `Guild Artisan`,
        skillProficiencies: [`Insight`, `Persuasion`],
        toolProficiencies: [`One type of artisan's tools`],
        languages: [`One of your choice`],
        equipment: [`A set of artisan's tools (one of your choice)`, `A letter of introduction from your guild`, `A set of traveler's clothes`, `A belt pouch`],
        startingGold: 15
    },
    {
        background: `Guild Merchant`,
        skillProficiencies: [`Insight`, `Persuasion`],
        toolProficiencies: [`Choose one:`, [`One type of artisan's tools`, `One type of navigator's tools`, `One additional Language`]],
        languages: [`One of your choice`],
        equipment: [[`Choose one:`, [`A set of artisan's tools`, `A mule and a cart`]], `A letter of introduction from your guild`, `A set of traveler's clothes`, `A belt pouch`],
        startingGold: 15
    },
    {
        background: `Hermit`,
        skillProficiencies: [`Medicine`, `Religion`],
        toolProficiencies: [`Herbalism kit`],
        languages: [`One of your choice`],
        equipment: [`A Map or Scroll Case stuffed full of notes from your studies or prayers`, `A winter blanket`, `A set of common clothes`, `A belt pouch`],
        startingGold: 5
    },
    {
        background: `Knight`,
        skillProficiencies: [`History`, `Persuasion`],
        toolProficiencies: [`One type of gaming set`],
        languages: [`One of your choice`],
        equipment: [`A set of fine clothes`, `A signet ring`, `A scroll of pedigree`, `A purse`],
        startingGold: 25
    },
    {
        background: `Noble`,
        skillProficiencies: [`History`, `Persuasion`],
        toolProficiencies: [`One type of gaming set`],
        languages: [`One of your choice`],
        equipment: [`A set of fine clothes`, `A signet ring`, `A scroll of pedigree`, `A purse`],
        startingGold: 25
    },
    {
        background: `Outlander`,
        skillProficiencies: [`Athletics`, `Survival`],
        toolProficiencies: [`One type of musical instrument`],
        languages: [`One of your choice`],
        equipment: [`A staff`, `A hunting trap`, `A trophy from an animal you killed`, `A set of traveler's clothes`, `A belt pouch`],
        startingGold: 10
    },
    {
        background: `Pirate`,
        skillProficiencies: [`Athletics`, `Perception`],
        toolProficiencies: [`Navigator's tools`, `Vehicles (water)`],
        languages: [],
        equipment: [`A belaying pin (club)`, `Silk rope (50 feet)`, `A lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5)`, `A set of common clothes`, `A belt pouch`],
        startingGold: 10
    },
    {
        background: `Sage`,
        skillProficiencies: [`Arcana`, `History`],
        toolProficiencies: [],
        languages: [`Two of your choice`],
        equipment: [`Ink (1-ounce bottle)`, `A quill`, `A small knife`, `A letter from a dead colleague posing a question you have not yet been able to answer`, `A set of common clothes`, `A belt pouch`],
        startingGold: 10
    },
    {
        background: `Sailor`,
        skillProficiencies: [`Athletics`, `Perception`],
        toolProficiencies: [`Navigator's tools`, `Vehicles (water)`],
        languages: [],
        equipment: [`A belaying pin (club)`, `Silk rope (50 feet)`, `A lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5)`, `A set of common clothes`, `A belt pouch`],
        startingGold: 10
    },
    {
        background: `Soldier`,
        skillProficiencies: [`Athletics`, `Intimidation`],
        toolProficiencies: [`One type of gaming set`, `Vehicles (land)`],
        languages: [],
        equipment: [`An insignia of rank`, [`A trophy taken from a fallen enemy`, [`A dagger`, `A broken blade`, `A piece of banner`]], [`A bone dice set`, `A playing card set`], `A set of common clothes`, `A belt pouch`],
        startingGold: 10
    },
    {
        background: `Spy`,
        skillProficiencies: [`Deception`, `Stealth`],
        toolProficiencies: [`One type of gaming set`, `Thieves' tools`],
        languages: [],
        equipment: [`A crowbar`, `A set of dark common clothes including a hood`, `A belt pouch`],
        startingGold: 15
    },
    {
        background: `Urchin`,
        skillProficiencies: [`Sleight of Hand`, `Stealth`],
        toolProficiencies: [`Disguise kit`, `Thieves' tools`],
        languages: [],
        equipment: [`A small knife`, `A map of the city you grew up in`, `A pet mouse`, `A token to remember your parents by`, `A set of common clothes`, `A belt pouch`],
        startingGold: 10
    }
];
const featList = [];
const itemList = [];
const weaponList = [];
const armorList = [];

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

let startingRolls = statRolls();

// there may be a better way to implement this instead of using baseStat
let baseStatNumbers = [strMod, dexMod, conMod, intMod, wisMod, chaMod] = [startingRolls[0], startingRolls[1], startingRolls[2], startingRolls[3], startingRolls[4], startingRolls[5]];

// this function runs on page load, rolls for random stats and adds them to the stat section
(() => {
    for (let i = 0; i < startingRolls.length; i++) {
        console.log(statNumbersFromHTML[i].innerHTML = baseStatNumbers[i]);
        statModifiersFromHTML[i].innerHTML = Math.floor((statNumbersFromHTML[i].innerHTML - 10) / 2);
    }
    addPlusOrMinus(statModifiersFromHTML);
})();

// running searchForKey will return an array of each value for the chosen object key argument in the choses list of objects
function searchForKey(list, specificKey) {
    let valueArray = [];
    for (let object of list) {
        for (let objectKey in object) {
            if (objectKey == specificKey) {
                valueArray.push(object[objectKey]);
            };
        };
    };
    return valueArray;
};

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
        };
        singleStatRollArray.sort();
        singleStatRollArray.shift();
        addedRoll = singleStatRollArray.reduce((a, b) => a + b);
        statRollsArray.push(addedRoll);
    };
    return statRollsArray;
};



// BELOW IS A WORKING NUMBER MODIFIER FOR STATS
// SOME OF THIS CODE WAS TAKEN, POTENTIALLY MODIFIED, BUT NOT REMOVED, FROM THE SECTION FURTHER BELOW

// REWORK FOR TOUCH. MAYBE ADD BUTTON INSTEAD OF ENTER?

function addPlusOrMinus(number) {
    for (i = 0; i < number.length; i++) {
        if (Math.sign(number[i].innerHTML) == 1) {
            number[i].innerHTML = `+ ${number[i].innerHTML}`;
        } else if (Math.sign(number[i].innerHTML) == -1) {
            number[i].innerHTML = `- ${number[i].innerHTML * -1}`;
        } else {
            number[i].innerHTML = 0;
        };
    };
};

function changeStatNumber(baseNumber, inputNumber) {
    baseNumber.style.display = `none`;
    inputNumber.style.display = `block`;
    inputNumber.value = Number(baseNumber.innerHTML);
}
document.onkeydown = function confirmStatNumber(event) {
    if (event.key == `Enter`) {
        for (let i = 0; i < statNumbersFromHTML.length; i++) {
            if (statNumbersFromHTML[i] == statNumbersArray[i] && statNumbersArray[i].style.display == `none`) {
                statNumbersArray[i].innerHTML = statNumberInputs[i].value;
                statNumbersArray[i].style.display = `block`;
                statNumberInputs[i].style.display = `none`;
            };
            statModifiersFromHTML[i].innerHTML = Math.floor((statNumbersFromHTML[i].innerHTML - 10) / 2);
            baseStatNumbers[i] = statModifiersFromHTML[i].innerHTML;
        };
    };
    addPlusOrMinus(statModifiersFromHTML);
};


// FOR OF LOOP TEST -- POSSIBLY REWRITE MUCH OF CODE TO UTILIZE
for (number of statModifiersFromHTML) {
    console.log(number.innerHTML)
}








// adding save throw modifiers and darkening the circles next to them
// THIS AREA OF CODE IS TO BE REWORKED, WHETHER JUST CHANGES IN VARIABLE NAMES OR COMPLETE REWRITES
// many of these use an old, deleted class list, anything using charClass needs to be updated to className





/*
let classSelection;
let level = 1;
let proficiency = Math.ceil(1 + level / 4);
console.log(proficiency);


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