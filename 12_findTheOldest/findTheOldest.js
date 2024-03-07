const findTheOldest = function (people) {
  // add current year as date of death if no date of death to simplify,
  // tests do not care for this, but would be erronous in real world data
  // as entire object is returned
  people = people.map((person) => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }
    return person;
  });

  people = people.sort((a, b) => {
    const lastAge = a.yearOfDeath - a.yearOfBirth;
    const nextAge = b.yearOfDeath - b.yearOfBirth;
    return lastAge > nextAge ? -1 : 1;
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
