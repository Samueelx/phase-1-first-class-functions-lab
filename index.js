// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let firstTwo = [];
    for(let i = 0; i < 2; i++)
    firstTwo.push(drivers[i]);

    return firstTwo;
}

const returnLastTwoDrivers = function(drivers) {
    let lastTwo;
    for(let i = 0; i < 2; i++)
    lastTwo = (drivers.slice(2));

    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (fare) => fare * multiplier; 
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFunction) {
    return returnFunction(drivers);
}