const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, names){
    let pickedDrivers = drivers.filter(drivers => drivers.toLowerCase() === names.toLowerCase());
   return pickedDrivers;
};

findMatching(drivers, 'Bobby');

function fuzzyMatch(drivers, names){
    let matchedDrivers = drivers.filter(drivers => drivers.startsWith(names) === names.startsWith(names));
    return matchedDrivers;
}

fuzzyMatch(drivers, "Annette");

const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driver, names){
    let nameMatcher = driver.filter(driver => driver.name === names);
    return nameMatcher
};

matchName(driver, "Bobby");