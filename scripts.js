// Space Battle Mod Project

// First steps: We need to create our actors
// 1. Create the USS Rockenbach and outline it's attributes
// 2. Create a single alien ship object
// 3. 


// Second Steps: We need to create actions for our actors
// 1. Show console prompt asking "are you ready to engage in battle?"
// 2. accept an input and continue to the next prompt asking to attack/retreat
// 3. Get the first attack to work.


// USS Rockenbach properties
// let shipHull = 20;
// let firePower = 5


// console.log(Ship1.hull);

// const rockenbach = 
//     {
//         hull: 20,
//         firepower: 5,
//         accuracy: .7,
//         attackShip: function() {
//             if (this.hull > 0 && Ship1.hull > 0) {
//                 Ship1.hull -= this.firepower;
//                 alert(Ship1.hull)
//                 console.log(Ship1.hull)
//                 return;
//             } else [
//                 console.log("You've defeated an alien ship!")
//             ]
//         }
//     }
//===========================================================================================
// Game Actors ==============================================================================
// ==========================================================================================


const rockenbach = {
    hull: 20,
    firepower: 5,
    accuracy: .8
}; // make a function to calculate ships chance to hit and comparing that with my accuracy. leave the .8
// let rockenbach = rockenbach;

class Alienfleet { // Alien fleet class and constructor 
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

};
const Ship1 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 9))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship2 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 9))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship3 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 9))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship4 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship5 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))
const Ship6 = new Alienfleet(((Math.floor(Math.random() * (7 - 3) + 3))), ((Math.floor(Math.random() * (4 - 2) + 2))), ((Math.floor(Math.random() * 3) + 6) / 10))



// const alienShip = {hull: (Math.floor(Math.random()*7)), firepower: 4, accuracy: .7}; //  make a function to calculate ships chance to hit and comparing that with my accuracy. leave the .8

// ==========================================================================================
//  Attack Functions ========================================================================
// ==========================================================================================

let myAttack = (attackingShip, defendingShip) => {
    alert("Powering up Yamato cannon...")
    alert("The alien ships hull has " + defendingShip.hull + " health left.")
    if (attackingShip.hull > 1 && defendingShip.hull > 0) {
        defendingShip.hull -= attackingShip.firepower;
        alert("You've attacked the alien spaceship for 5 damage! " + "The alien ships hull has " + defendingShip.hull + " health remaining.")
    }
}

let alienAttack = (attackingShip, defendingShip) => {
    if (attackingShip.hull > 1 && defendingShip.hull > 0) {
        alert("Strange alien lights glow amongst the radiant stars...")
        defendingShip.hull -= attackingShip.firepower;
        alert("The alien ships aim is true, striking you for " + attackingShip.firepower + " damage, leaving your hull with " + defendingShip.hull + " health left.")
    }
}

// ==========================================================================================
// Start game function ======================================================================
// ==========================================================================================


// let startGame = () => {


// }



// ==========================================================================================
// Battle function ==========================================================================
// ==========================================================================================
alert("TEST!");
let battle = () => {
    while (rockenbach.hull > 0 && Ship1.hull > 0) {
        console.log(myAttack(rockenbach, Ship1));
        console.log(alienAttack(Ship1, rockenbach)); 
    }
    while (rockenbach.hull > 0 && Ship2.hull > 0) {
        console.log(myAttack(rockenbach, Ship2));
        console.log(alienAttack(Ship2, rockenbach));
    }
    while (rockenbach.hull > 0 && Ship3.hull > 0) {
        console.log(myAttack(rockenbach, Ship3));
        console.log(alienAttack(Ship3, rockenbach));
    }
    while (rockenbach.hull > 0 && Ship4.hull > 0) {
        console.log(myAttack(rockenbach, Ship4));
        console.log(alienAttack(Ship4, rockenbach));
    }
    while (rockenbach.hull > 0 && Ship5.hull > 0) {
        console.log(myAttack(rockenbach, Ship5));
        console.log(alienAttack(Ship5, rockenbach));
    }
    while (rockenbach.hull > 0 && Ship6.hull > 0) {
        console.log(myAttack(rockenbach, Ship6));
        console.log(alienAttack(Ship6, rockenbach));
    } 
    while (rockenbach.hull > 0 && Ship6.hull <= 0) {
        alert("You win!!!!")
        break;
    }
}
battle()
// let alienHull = (Math.floor(Math.random()*7)); // This is the property that holds the value of the aliens hull RNG
// class Alienfleet (hull, firepower, accuracy) {
//     this,hull = hull;
//     this.firepower = firepower;
//     this.accuracy = accuracy;
// };
// const Ship1 = new Class (alienHull, 2, .8)
// const Ship2 = new Class (3, 2, .8)
// const Ship3 = new Class (3, 2, .8)
// const Ship4 = new Class (3, 2, .8)
// const Ship5 = new Class (3, 2, .8)
// const Ship6 = new Class (3, 2, .8)


// alert("Time to attack");
// myAttack(Ship1.hull)
// alienAttack(rockenbach.hull)
// console.log(rockenbach);

// Alien Horde properties
// 6 alien ships in the fleet.
// Need a random function to determine HP, firepower, and accuracy. Use Math.random
// HP = 3 - 6, firepower = 2 - 4, accuracy = .6-.8

// ============================================================================================
// Intro game alerts ==========================================================================
// ============================================================================================

// alert("ATTENTION: USS Rockenbach Your heavy artillery is needed in the Orion constellation immediately");
// prompt("Are you ready to depart?", "yes/no");
// alert("Preparing to initiate warp speed...");
// alert("Destination reached. Security perimeter breached.")
// alert("USS Rockenbach prepare for battle...");
// alert("Moving in range");
// myAttack(Ship1.hull)
// alienAttack(rockenbach.hull)


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