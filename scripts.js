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
let userVal; // used to determine whether the user wants to play again or not
let deathIndex = 0; // This a function track how many ships are left, evaluating my overall win conditions. Also helps determine how many ships the player has defeated.
let attackVal; // variable used to determine if the attack of either ship is successful, returned into the battle function to either strike the ship or alert the ship has missed.
let alienAttackAccuracy; // variable used to determined the accuracy of the alien ships which results in the range of .6-.8
let retreatVal; // This determines if the player decided to retreat or not.

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

}; // all 6 of the constructed ships are below
const Ship1 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship2 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship3 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship4 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship5 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship6 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))

//===========================================================================================
// Chance to successfully attack functions ==================================================
// ==========================================================================================
// created functions to calculate each ships chances to successfully hit their opponent and then compare that with the accuracy. 

let enemyAttack = () => {
    alienAttackAccuracy = ((Math.floor(Math.random() * 3) + 6) / 10);
    chanceToHit = (Math.random() * (1 - 0)) + 0;
    if (chanceToHit <= alienAttackAccuracy) {
        return thisAttack = true; // returns to the attack function that the attack was successful
    } else {
        return thisAttack = false; // returns to the attack function that the attack missed
    }
}


let alliedAttack = () => {
    chanceToHit = (Math.random() * (1 - 0)) + 0;
    if (chanceToHit <= rockenbach.accuracy) {
        return thisAttack = true; // returns to the attack function that the attack was successful
    } else {
        return thisAttack = false; // returns to the attack function that the attack missed
    }
};

// ==========================================================================================
//  Primary attack Functions ================================================================
// ==========================================================================================
// Functions where you can plug in both ships of the current battle into it's parameters to allow them to fight and depreciate health bars.
let myAttack = (attackingShip, defendingShip) => {
    alert("The alien ships hull has " + defendingShip.hull + " health remaining.")
    alert("Powering up Yamato cannon...");
    while (attackingShip.hull > 0 && defendingShip.hull > 0) {
        attackVal = alliedAttack() // attackVal holds the result of the ships accuracy determining function helping to determine whether the attack was successful or not
        if (attackVal == true) {
            defendingShip.hull -= attackingShip.firepower; // Subtracts the firepower of the attacking ship from the defending ships hull points.
            return alert("Your attack was successful! You've attacked the alien spaceship for 5 damage! " + "The alien ships hull has " + defendingShip.hull + " health remaining.")
        } else if (attackVal == false) {
            return alert("Your attack has missed the alien craft.")
        }
    }
}

let alienAttack = (attackingShip, defendingShip) => {
    while (attackingShip.hull > 0 && defendingShip.hull > 0) {
        alert("Strange alien lights glow amongst the radiant stars...")
        attackVal = enemyAttack() // attackVal holds the result of the ships accuracy determining function helping to determine whether the attack was successful or not
        if (attackVal == true) {
            defendingShip.hull -= attackingShip.firepower;
            return alert("The alien ships aim is true, striking you for " + attackingShip.firepower + " damage, leaving your hull with " + defendingShip.hull + " health left.")
        } else if (attackVal == false) {
            return alert("The aliens ships attack has missed")
        }
    }
}

// ==========================================================================================
// Battle function ==========================================================================
// ==========================================================================================
// Here is the entire battle function, moving through all 6 ships.
// If the player health bar hits zero and loses, has destroyed 6 ships, or decides to retreat, is all covered and evaluated in here.
let battle = () => {
    while (rockenbach.hull > 0 && Ship1.hull > 0) {
        console.log(myAttack(rockenbach, Ship1));
        console.log(alienAttack(Ship1, rockenbach));
    }
    // declaring retreatVal every battle as it's locally scoped to each skirmish.
    if (retreatVal == 1) { // This determines if the player decided to retreat or not. If so it takes the player to the game over screen.
        return gameOver();
    }

    while (rockenbach.hull > 0 && Ship2.hull > 0) {
        console.log(myAttack(rockenbach, Ship2));
        console.log(alienAttack(Ship2, rockenbach));
    }

    if (retreatVal == 1) {
        return gameOver();
    }

    while (rockenbach.hull > 0 && Ship3.hull > 0) {
        console.log(myAttack(rockenbach, Ship3));
        console.log(alienAttack(Ship3, rockenbach));
    }

    if (retreatVal == 1) {
        return gameOver();
    }
    while (rockenbach.hull > 0 && Ship4.hull > 0) {
        console.log(myAttack(rockenbach, Ship4));
        console.log(alienAttack(Ship4, rockenbach));
    }

    if (retreatVal == 1) {
        return gameOver();
    }
    while (rockenbach.hull > 0 && Ship5.hull > 0) { // 
        console.log(myAttack(rockenbach, Ship5));
        console.log(alienAttack(Ship5, rockenbach));
    }

    if (retreatVal == 1) {
        return gameOver();
    }
    while (rockenbach.hull > 0 && Ship6.hull > 0) {
        console.log(myAttack(rockenbach, Ship6));
        console.log(alienAttack(Ship6, rockenbach));
    }

    if (retreatVal == 1) {
        return gameOver();
    }
    while (rockenbach.hull > 0 && Ship6.hull <= 0) {
        alert("You win!!!!")
        return playAgain()
    }
}

// ==========================================================================================
// Start game function ======================================================================
// ==========================================================================================
// This is the beginning of the entire game. If the player decides they are not ready to depart, it exits the game entirely.

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
// Determines whether to restart the game from the beginning or to entirely exit the game.
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
    deathIndex++; // This is used to end the game if this index reaches a value of 6.
    totalIndex = 6; // This allows the user to see how many ships are remaining after each battle.
    totalShipsLeft = totalIndex - deathIndex; // These 3 variables help to track how many ships are left and also check the game state to see if I have won by defeating 6 ships.
    if (rockenbach.hull <= 0) {
        alert("You have lost.")
        return playAgain() // Do you want to play again?
    } else if (deathIndex == 6) {
        alert("You've won!!");
        return playAgain(); // Do you want to play again?
    }
    alert("The aliens ship has been destroyed! There are " + totalShipsLeft + " alien ships remaining.")

    userVal = prompt(" You currently have " + rockenbach.hull + " Health remaining. " + "Do you want to attack the next ship or retreat?", "attack/retreat?")
    if (userVal == "attack") {
        return 0;
    } else {
        return 1; // If user decides they would like to retreat it takes the user to the gameOver function which will ultimately exit the game.
    }
}

// ==========================================================================================
// Game over function =======================================================================
// ==========================================================================================
// A function that breaks out of the entire game.


let gameOver = () => {
    alert("Thank you for playing!")
    return;
}

// ==========================================================================================
// Start Game function ======================================================================
// ==========================================================================================
// All of the meat and potatoes of this grandiose space battle game are contained within this tiny function call.

startGame()

