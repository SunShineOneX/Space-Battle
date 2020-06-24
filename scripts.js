// Space Battle Mod Project

// First steps: We need to create our actors
// 1. Create the USS Rockenbach and outline it's attributes
// 2. Create the fleet of 6 alien ships and outline their attributes
// 3. 


// Second Steps: We need to create actions for our actors
// 1. Show console promot asking "are you ready to engage in battle?"
// 2. accept and input and continue to next prompt asking to attack/retreat
// 3. Get the first attack to work.


// USS Rockenbach properties
// let shipHull = 20;
// let firePower = 5

const rockenbach = {
    health: 20,
    firepower: 5,
    accuracy: .7
}
// Alien Horde properties
// 6 alien ships in the fleet.
// Need a random function to determine HP, firepower, and accuracy. Use Math.random
// HP = 3 - 6, firepower = 2 - 4, accuracy = .6-.8
const alienFleet = [
    {
        name: ship1,
        properties: [
            {
                hp: Math.floor(Math.random()*6),
                firepower: 4,
                accuracy: .8
            }
        ]
    },
    {
        name: ship2,
        properties: [
            {
                hp: 6,
                firepower: 4,
                accuracy: .8
            }
        ]
    },
    {
        name: ship3,
        properties: [
            {
                hp: 6,
                firepower: 4,
                accuracy: .8
            }
        ]
    },   {
        name: ship4,
        properties: [
            {
                hp: 6,
                firepower: 4,
                accuracy: .8
            }
        ]
    },
    {
        name: ship5,
        properties: [
            {
                hp: 6,
                firepower: 4,
                accuracy: .8
            }
        ]
    },
    {
        name: ship6,
        properties: [
            {
                hp: 6,
                firepower: 4,
                accuracy: .8
            }
        ]
    }
]

alert("ATTENTION: USS Rockenbach Your heavy artillery is needed in the Orion constellation immediately")
prompt("Are you ready to depart? ")
alert("Preparing to initiate warp speed...")
alert("Destination reached. Security perimeter breached.")
alert("USS Rockenbach prepare for battle...");
