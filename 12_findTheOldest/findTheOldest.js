const findTheOldest = function (array) {
  const currentYear = new Date().getFullYear(); // Get the current year

  let oldestAgeIndex = array.reduce(
    (oldestIndex, currentPerson, currentIndex) => {
      const deathYear = currentPerson.yearOfDeath || currentYear; // Use current year if yearOfDeath is not available
      const currentAge = deathYear - currentPerson.yearOfBirth;
      const oldestAge =
        array[oldestIndex].yearOfDeath - array[oldestIndex].yearOfBirth ||
        currentYear - array[oldestIndex].yearOfBirth;

      return currentAge > oldestAge ? currentIndex : oldestIndex;
    },
    0
  );

  return array[oldestAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
