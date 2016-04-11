// Victims

var victims = prompt("How many disaster victims do you have?");

var victimsArray = [];
var victimInfo = [];
var victim = {};

for (var i=0; i<victims; i++) {
    var gatherVictimInfo = function() {
        var victimName = prompt("Enter the vicitm's name:");
        var victimPhone = prompt("Enter the vicitm's phone number:");
        var victimStreet = prompt("Enter the vicitm's street:");
        var victim = {
            name : victimName,
            phone : victimPhone,
            street : victimStreet
        }
        victimsArray.push(victim);
    }
    gatherVictimInfo();
}
console.log(victimsArray);

// Volunteers

var volunteers = prompt("How many disaster volunteers do you have?");

var volunteersArray = [];
var volunteerInfo = [];
var volunteer = {};

for (var i=0; i<volunteers; i++) {
    var gathervolunteerInfo = function() {
        var volunteerName = prompt("Enter the volunteer's name:");
        var volunteerPhone = prompt("Enter the volunteer's phone number:");
        var volunteerStreet = prompt("Enter the volunteer's street:");
        var volunteer = {
            name : volunteerName,
            phone : volunteerPhone,
            street : volunteerStreet
        }
        volunteersArray.push(volunteer);
    }
    gathervolunteerInfo();
}
console.log(volunteersArray);