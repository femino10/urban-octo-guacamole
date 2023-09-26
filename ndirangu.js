'(function) (CalculateDemeritPoints); (speed)'
const speedlimit = 70;
const kmPerDemeritPoint =5;
if (speed<=speedlimit) {
    console.log('ok');
}  else {
        const excessSpeed = speed -speedlimit;
        const demeritPoints = Math.floor.excessSpeed / kmPerDemeritPoint;
    }
    if (demeritPoints >= maxDemeritPoints) {
        console.log('License Suspended');
    } else {
        console.log('Points: ${demeritPoints}');
    }


    //prompt the user for the car's speed
    const userInput = prompt('Enter the car\'s speed (in km/h):')
    const carspeed = parseFloat(userInput);

    // Check if the input is a valid number 
    if (isNaN(carSpeed)) {
        console.log('Invalid input. Please enter a valid speed.')
    } else {
        calculateDemeritPoints(carSpeed);
