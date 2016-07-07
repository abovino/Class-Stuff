/*Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)

Each character created using your constructor should have the following properties...

Name: The character's name --> String

Profession: What the character does for a living --> String

Gender: The character's gender --> String

Age: The character's age --> Integer

Strength: Abstraction for how strong the character is --> Integer

HitPoints (HP): Abstraction for how much health the character has --> Integer

PrintStats: Function which prints all of a character's properties to the screen

Once you have created your constructor, create two new characters and print their properties to the screen

Fool around and get comfortable with your constructor before moving onto the next parts of the activity
Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!*/

//CONSTRUCTOR FUNCTION WHICH CAN TAKE IN A SERIES OF VALUES AND CREATE OBJECTS WITH THE PROPERTIES CONTAINED INSIDE//



function Character(name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;

    //METHOD WHICH PRINTS ALL OF THE STATS FOR A CHARACTER//
    this.printStats = function() {
        console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength + "\nHitPoints: " + this.hitpoints);
        console.log("\n-------------\n");
    };

    //METHOD WHICH DETERMINES WHETHER OR NOT A CHARACTER'S "hitpoints" ARE LESS THEN ZERO AND RETURNS TRUE OR FALSE DEPENDING UPON THE OUTCOME//
    this.isAlive = function() {
        if (this.hitpoints > 0) {
            console.log(this.name + " is still alive!");
            console.log("\n-------------\n");
            return true;
        } else {
            console.log(this.name + " has died!");
            return false;
        }
    };

    //METHOD WHICH TAKES IN A SECOND OBJECT AND DECREASES THEIR "hitpoints" BY THIS CHARACTER'S STRENGTH//
    this.attack = function(character2) {
        character2.hitpoints -= this.strength;
    };

    //METHOD WHICH INCREASES THIS CHARACTER'S STATS WHEN CALLED//
    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    }
}

//CREATES TWO UNIQUE CHARACTERS USING THE "Character" CONSTRUCTOR//
var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
var rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);

rogue.throwKnife = function() {
    console.log('2 damage')
}

Character.prototype.throwKnife = function() {
    console.log('2 damage');
}

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
rogue.printStats();

//WHILE LOOP WHICH CONTINUES TO RUN SO LONG AS BOTH CHARACTERS' "hitpoints" ARE ABOVE ZERO//
while (warrior.isAlive() == true && rogue.isAlive() == true) {
    //CHARACTERS DEAL DAMAGE TO ONE ANOTHER//
    warrior.attack(rogue);
    rogue.attack(warrior);
    //PRINTS STATS TO SHOW CHANGES//
    warrior.printStats();
    rogue.printStats();
}