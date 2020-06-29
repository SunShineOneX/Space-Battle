// Space Battle Mod Project

// First steps: We need to create our actors
// 1. Create the USS Rockenbach and outline it's attributes
// 2. Create an alien class ship object with a constructor method
// 3. Create 6 ships with their properties and randomly determined values


// Second Steps: We need to create actions for our actors
// 1. Show console prompt asking "are you ready to engage in battle?"
// 2. accept an input and continue to the next prompt asking to attack/retreat
// 3. Get the first attack to work.

//===========================================================================================
// Global variables =========================================================================
// ==========================================================================================
let userVal;
let deathIndex = 0;
let outcome = 0;
let attackVal;
let myAttackAccuracy;
let alienAttackAccuracy;
let shipsRemaining;

//===========================================================================================
// Game actors ==============================================================================
// ==========================================================================================
// First game actor
const rockenbach = {
    hull: 20,
    firepower: 5,
    accuracy: .7
};
// Second game actor
class Alienfleet { // Alien fleet class and constructor 
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

};
const Ship1 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship2 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship3 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship4 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship5 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship6 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))

//===========================================================================================
// Chance to successfully attack functions ==================================================
// ==========================================================================================
// create functions to calculate each ships chances to successfully hit their opponent and then compare that with the accuracy. 

let enemyAttack = () => {
    alienAttackAccuracy = ((Math.floor(Math.random() * 3) + 6) / 10);
    chanceToHit = (Math.random() * (1- 0)) + 0;
    if (chanceToHit <= alienAttackAccuracy) {
        return thisAttack = true;
    } else {
        return thisAttack = false;
    }
}


let alliedAttack = () => {
    myAttackAccuracy = ((Math.floor(Math.random() * 3) + 7) / 10);
    chanceToHit = (Math.random() * (1- 0)) + 0;
    if (chanceToHit <= myAttackAccuracy) {
        return thisAttack = true;
    } else {
        return thisAttack = false;
    }
};

// ==========================================================================================
//  Primary attack Functions ================================================================
// ==========================================================================================

let myAttack = (attackingShip, defendingShip) => {
    alert("An alien battle craft approaches...")
    alert("The alien ships hull has " + defendingShip.hull + " health remaining.")
    alert("Powering up Yamato cannon...");
    while (attackingShip.hull > 0 && defendingShip.hull > 0) {
        attackVal = alliedAttack()
        if (attackVal == true) {
            defendingShip.hull -= attackingShip.firepower;
            return alert("Your attack was successful! You've attacked the alien spaceship for 5 damage! " + "The alien ships hull has " + defendingShip.hull + " health remaining.")
        } else if (attackVal == false) {
            return alert("Your attack has missed the alien craft.")
        }
    }
}

let alienAttack = (attackingShip, defendingShip) => {
    while (attackingShip.hull > 0 && defendingShip.hull > 0) {
        alert("Strange alien lights glow amongst the radiant stars...")
        attackVal = enemyAttack()
        if (attackVal == true) {
            defendingShip.hull -= attackingShip.firepower;
            return alert("The alien ships aim is true, striking you for " + attackingShip.firepower + " damage, leaving your hull with " + defendingShip.hull + " health left.")
        } else if (attackVal == false) {
            return alert("The aliens ships attack has missed")
        }
    }
}

// ==========================================================================================
// Start game function ======================================================================
// ==========================================================================================

// let startGame = () => {
//     alert("ATTENTION: USS Rockenbach Your heavy artillery is needed in the Orion constellation immediately. Click 'OK' when you are ready to proceed.");
//     userVal = prompt("Are you ready to depart?", "yes/no")
//     if (userVal == "no") {
//         return;
//     }
//     alert("Preparing to initiate warp speed...");
//     alert("Destination reached. Security perimeter breached.")
//     alert("USS Rockenbach prepare for battle...");
//     alert("Moving in range");
//     return battle()
// }

// ==========================================================================================
// Battle function ==========================================================================
// ==========================================================================================

let battle = () => {
    while (rockenbach.hull > 0 && Ship1.hull > 0) {
        console.log(myAttack(rockenbach, Ship1));
        console.log(alienAttack(Ship1, rockenbach));
    }

    retreatVal = retreat();

    if (retreatVal == 1) {
        return gameOver();
    }

    while (rockenbach.hull > 0 && Ship2.hull > 0) {
        console.log(myAttack(rockenbach, Ship2));
        console.log(alienAttack(Ship2, rockenbach)); // create a function call start game that calls battle
    }
    retreatVal = retreat();

    if (retreatVal == 1) {
        return gameOver();
    }

    while (rockenbach.hull > 0 && Ship3.hull > 0) { // player dies or player or he wins, would you like to play again?
        console.log(myAttack(rockenbach, Ship3));
        console.log(alienAttack(Ship3, rockenbach)); // Start game function has 3 variables win = 1, retreat = 2, lose = 3.
    }
    retreatVal = retreat();

    if (retreatVal == 1) {
        return gameOver();
    }
    while (rockenbach.hull > 0 && Ship4.hull > 0) { // returns a 1 for each variable. then set of ifs. if = 1 you have won.
        console.log(myAttack(rockenbach, Ship4));
        console.log(alienAttack(Ship4, rockenbach));
    }
    retreatVal = retreat();

    if (retreatVal == 1) {
        return gameOver();
    }
    while (rockenbach.hull > 0 && Ship5.hull > 0) { // 
        console.log(myAttack(rockenbach, Ship5));
        console.log(alienAttack(Ship5, rockenbach));
    }
    retreatVal = retreat();

    if (retreatVal == 1) {
        return gameOver();
    }
    while (rockenbach.hull > 0 && Ship6.hull > 0) {
        console.log(myAttack(rockenbach, Ship6));
        console.log(alienAttack(Ship6, rockenbach));
    }
    retreatVal = retreat();

    if (retreatVal == 1) {
        return gameOver();
    }
    while (rockenbach.hull > 0 && Ship6.hull <= 0) {
        alert("You win!!!!")
        return playAgain()
    }
}
let startGame = () => {
    alert("ATTENTION: USS Rockenbach Your heavy artillery is needed in the Orion constellation immediately. Click 'OK' when you are ready to proceed.");
    userVal = prompt("Are you ready to depart?", "yes/no")
    if (userVal == "no") {
        return;
    }
    alert("Preparing to initiate warp speed...");
    alert("Destination reached. Security perimeter breached.")
    alert("USS Rockenbach prepare for battle...");
    alert("Moving in range");
    return battle()
}

// ==========================================================================================
// Play again function ======================================================================
// ==========================================================================================

let playAgain = () => {
    userVal = prompt("Do you want to play again?", "yes or no?")
    if (userVal == "yes") {
        return startGame()
    } else if (userVal == "no") {
        alert("Game over scrub.")
        return 1;
    }
}

// ==========================================================================================
// Attack or retreat function ===============================================================
// ==========================================================================================

let retreat = () => {
    deathIndex++;
    totalIndex = 6;
    totalShipsLeft = totalIndex - deathIndex;
    if (rockenbach.hull <= 0) {
        outcome = 1;
        alert("You have lost.")
        return playAgain()
    } else if (deathIndex == 6) {
        alert("You've won!!");
        return playAgain();
    }
    alert("The aliens ship has been destroyed! There are " + totalShipsLeft + " alien ships remaining.")
    
    userVal = prompt(" You currently have " +rockenbach.hull +" Health remaining. " + "Do you want to attack the next ship or retreat?", "attack/retreat?")
    if (userVal == "attack") {
        return 0;
    } else {
        return 1;
    }
}

// ==========================================================================================
// Game over function =======================================================================
// ==========================================================================================


let gameOver = () => {
    alert("Thank you for playing!")
    return;
}

// ==========================================================================================
// Start Game function ======================================================================
// ==========================================================================================


startGame()




// Alien Horde properties
// 6 alien ships in the fleet.
// Need a random function to determine HP, firepower, and accuracy. Use Math.random
// HP = 3 - 6, firepower = 2 - 4, accuracy = .6-.8

// ============================================================================================
// Intro game alerts ==========================================================================
// ============================================================================================


// ==================================================================================
// ================================= Game object ideas ==============================
// ==================================================================================

// if USS Rockenbach hull > 0 and alien fleet amount of ships > 0 then;
// 1. fight
// 2. evaluate win/lose conditions
// 3. next fight or game over




// ==================================================================================
// ================================= Combat loop ideas ==============================
// ==================================================================================
// Condition: if USS Rockenbach hull HP > 0 && current alien ship hull HP > 0 THEN;
// 1. run my first attack
// 2. Evaluate HP conditions
// 3. run enemy attack
// 4. Evaluate HP conditions
// 5. So on and so fourth until someone has died
// 6. Transition into next battle

// ex. if (USS Rockenbach.hull > 0 && Alien Ship.hull > 0) {
//   myAttack(Ship1.hull);
// } else {
//   
//}
// ex.
/* While (USS Rockenbach.hull > 0 && Alien Ship.hull > 0) {
   attacks = 0;
   attacks++;
   myAttack(Ship1.hull);
   alienAttack(rockenbach.hull)
}

Late night next example --- try to implement a function similar to this. STAY POSITIVE!
*/
// alert("TEST");
// let battle = () => {

// if (rockenbach.hull > 0 && Ship1.hull > 0) {
//     let round = 0;
//     console.log(myAttack(Ship1.hull));
//     console.log(alienAttack(rockenbach.hull));
//     round++;    
// } else if (rockenbach.hull > 0 && Ship1.hull < 0) {
//   alert("You win!");
// } else {
//   alert("You lose!");
// };
// }

// battle()

// NOTES: We may need to make this a while loop.
// TEST while loop:
// alert("TEST!");
// let battle = () => {

//     while (rockenbach.hull > 0 && Ship1.hull > 0) {
//         console.log(myAttack(Ship1.hull));
//         console.log(alienAttack(rockenbach.hull));
//     };
//     }
// battle()