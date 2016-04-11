// Victims

var victimsArray = [];
var victim = {};
    
// var victims = prompt("How many disaster victims do you have?");

var getVictim = function() {
    var enterVictim = confirm("Would you like to add a victim's information?")
    
    if (enterVictim) {
        // for (var i=0; i<victims; i++) {
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
        // }
        getVictim();
    }
}
getVictim();

// Volunteers

var volunteersArray = [];
var volunteer = {};

// var volunteers = prompt("How many disaster volunteers do you have?");
var getVolunteer = function() {
    var enterVolunteer = confirm("Would you like to add a volunteer's information?")
    
    if (enterVolunteer) {
        // for (var i=0; i<volunteers; i++) {
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
        // }
        getVolunteer();
    }
}
getVolunteer();

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

var needsHelp = prompt("Enter the name of a person in need and we'll show you the volunteers on the same street");

var volunteersOnStreet = [];

var showVolunteersOnStreet = function() {
    for (var i=0; i<victimsArray.length; i++) {
        if (needsHelp === victimsArray[i].name) {
            for (var ii=0; ii<volunteersArray.length; ii++) {
                if (victimsArray[i].street === volunteersArray[ii].street) {
                    volunteersOnStreet.push(volunteersArray[ii].name)
                }
            }
        }
    }
    return volunteersOnStreet.join(',' + ' ');
}
alert("Here are some people on that street that can help: \n" + showVolunteersOnStreet())