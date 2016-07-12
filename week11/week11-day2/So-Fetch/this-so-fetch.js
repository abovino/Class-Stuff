var inquirer = require('inquirer');

//Constructor function which takes in a series of values and creates objects with properties
function Player(name, position, offense, defense) {
  this.name = name,
  this.position = position,
  this.offense = offense,
  this.defense = defense;
  
/*  this.goodGame = function() {

  }
  
  this.badGame = function() {

  }
  
  //Prints all of the stats for a character
  this.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense Rating: " + this.offense + "\nDefense Rating: " + this.defense)
  }*/
}

Player.prototype.printStats = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense Rating: " + this.offense + "\nDefense Rating: " + this.defense);
}

//Counts how many times the questions have been asked
var count = 0;
//Array to store Player objects
var starterArray = [];
var subArray = [];

var createTeam = function() {
  if (count < 5) {
    console.log("-----CREATE FIVE STARTERS-----");
    //Runs inquirer and asks the user a series of questions and stores replies inside variable
    inquirer.prompt([{
      name: "name",
      message: "Enter Player's Name"
    }, {
      name: "position",
      message: "Enter Player's Position",
    }, {
      name: "offense",
      message: "Enter Player's Offense Rating",
      validate: function(value) {
        if (isNaN(value) == false && parseInt(value) > 0 && parseInt(value) <= 10) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      name: "defense",
      message: "Enter Player's Defense Rating"
    }]).then(function(team){
      var newTeam = new Player(team.name, team.position, team.offense, team.defense);

      starterArray.push(newTeam);

      count++;

      createTeam();
    })
  } else if (count < 3) {

  } else {
    for (var x = 0; x < starterArray.length; x++){
      starterArray[x].printStats();
    }
  }
}

createTeam();