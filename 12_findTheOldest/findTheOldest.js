const findTheOldest = function(people) {
    const currentYear = new Date(Date.now()).getFullYear();
    return people.reduce((oldest, person) => {
        let oldestAge = 
            oldest.yearOfDeath === undefined ?
            currentYear - oldest.yearOfBirth :
            oldest.yearOfDeath - oldest.yearOfBirth;
        let personAge = 
            person.yearOfDeath === undefined ?
            currentYear - person.yearOfBirth :
            person.yearOfDeath - person.yearOfBirth;
        return personAge > oldestAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
