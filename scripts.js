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


// console.log(alienShip.hull);

// const rockenbach = 
//     {
//         hull: 20,
//         firepower: 5,
//         accuracy: .7,
//         attackShip: function() {
//             if (this.hull > 0 && alienShip.hull > 0) {
//                 alienShip.hull -= this.firepower;
//                 alert(alienShip.hull)
//                 console.log(alienShip.hull)
//                 return;
//             } else [
//                 console.log("You've defeated an alien ship!")
//             ]
//         }
//     }
let enemyHp = 20;
let myHp = 20;
const rockenbach = {hull: 20, firepower: 5, accuracy: .8}; // make a function to calculate ships chance to hit and comparing that with my accuracy. leave the .8
// let rockenbach = rockenbach;

const alienShip = {hull: 20, firepower: 4, accuracy: .7}; //  make a function to calculate ships chance to hit and comparing that with my accuracy. leave the .8
// let alienShip = alienShip;


// console.log(rockenbach.hull);

let myAttack = (ship) => {
    let myTurn = 1;
    alert("Powering up Yamato cannon...")
    alert("The alien ships hull has " + ship + " health left.")
    if (myTurn > 0 && rockenbach.hull >= 0) {
    alienShip.hull -= rockenbach.firepower;
    myTurn--;
    alert("You've attacked the alien spaceship for 5 damage! " + "The alien ships hull has " + alienShip.hull + " health remaining.")
    }
}

let alienAttack = (ship) => {
    let myTurn = 1;
    alert("Strange alien lights glow amongst the radiant stars...")
    if (myTurn > 0 && alienShip.hull >= 0) {
    rockenbach.hull -= alienShip.firepower;
    myTurn--;
    alert("The alien ships aim is true, striking you for " + alienShip.firepower + " damage, leaving your hull with " + rockenbach.hull + " health left.")
    }
}

alert("TEST!");
let battle = () => {
    
    while (rockenbach.hull > 0 && alienShip.hull > 0) {
        console.log(myAttack(alienShip.hull));
        console.log(alienAttack(rockenbach.hull));
    } 
    }
battle()

// alert("Time to attack");
// myAttack(alienShip.hull)
// alienAttack(rockenbach.hull)
// console.log(rockenbach);

// Alien Horde properties
// 6 alien ships in the fleet.
// Need a random function to determine HP, firepower, and accuracy. Use Math.random
// HP = 3 - 6, firepower = 2 - 4, accuracy = .6-.8



// alert("ATTENTION: USS Rockenbach Your heavy artillery is needed in the Orion constellation immediately");
// prompt("Are you ready to depart?", "yes/no");
// alert("Preparing to initiate warp speed...");
// alert("Destination reached. Security perimeter breached.")
// alert("USS Rockenbach prepare for battle...");
// alert("Moving in range");
// myAttack(alienShip.hull)
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
//   myAttack(alienShip.Hull);
// } else {
//   
//}
// ex.
/* While (USS Rockenbach.hull > 0 && Alien Ship.hull > 0) {
   attacks = 0;
   attacks++;
   myAttack(alienShip.Hull);
   alienAttack(rockenbach.hull)
}

Late night next example --- try to implement a function similar to this. STAY POSITIVE!
*/
// alert("TEST");
// let battle = () => {
    
// if (rockenbach.hull > 0 && alienShip.hull > 0) {
//     let round = 0;
//     console.log(myAttack(alienShip.hull));
//     console.log(alienAttack(rockenbach.hull));
//     round++;    
// } else if (rockenbach.hull > 0 && alienShip.hull < 0) {
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
    
//     while (rockenbach.hull > 0 && alienShip.hull > 0) {
//         console.log(myAttack(alienShip.hull));
//         console.log(alienAttack(rockenbach.hull));
//     };
//     }
// battle()

// const spaceBattle = [
//     {
//         player: "player1",
//         properties: [
//             {
//                 hull: 20,
//                 firepower: 5,
//                 accuracy: .8
//             }
//         ]
//     },
//     {   
//         player: "alienShip",
//         properties: [
//             {
//                 hull: 6,
//                 firepower: 5,
//                 accuracy: .6
//             }
//         ]
//     }
// ]