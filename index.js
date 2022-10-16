// Code your solution in this file!
function distanceFromHqInBlocks(start) {
    const distance = start - 42;
    return (distance < 0) ? (distance * -1) : distance;
}

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(start, end) {
    const distance = start - end;
    return (distance < 0) ? (distance * -264) : (distance * 264);
}

function calculatesFarePrice(start, end) {
    const feet = distanceTravelledInFeet(start, end);
    let fare;
    if(feet <= 400) {
        fare = 0;
    } else if(feet <= 2000) {
        fare = (feet - 400) * .02;
    } else if (feet <= 2500) {
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }

    return fare;
}