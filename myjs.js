// Victims
var victims = 0;
var enterVictim = confirm("Would you like to add a victim's information?")
// var victims = prompt("How many disaster victims do you have?");

var victimsArray = [];
var victimInfo = [];
var victim = {};
if (enterVictim) {
    victims += 1;
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
}
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
var victimNames = [];

var showVictimNames = function() {
    for (var i =0; i<victimsArray.length; i++) {
        victimNames.push(victimsArray[i].name);
    }
    return victimNames.join(',' + ' ');
}

var volunteerNames = [];

var showVolunteerNames = function() {
    for (var i =0; i<volunteersArray.length; i++) {
        volunteerNames.push(volunteersArray[i].name);
    }
    return volunteerNames.join(',' + ' ');
}
alert("There are " + victimsArray.length + " vitcims in need. \n There are " + volunteersArray.length + " volunteers available.  \n Victims: " + showVictimNames() + "\n Volunteers: " + showVolunteerNames() );