//Emma Schmitt
//Github Repo: https://github.com/EmmaSchmitt22/cs81-module4b-mydataexplorer

//Define Array
let weekData = [
    {day: "Monday", sleepHours: 9, screenTime: 2.5, mood: "fine", caffeineIntake: 1, focusLevel: 3},
    {day: "Tuesday", sleepHours: 8, screenTime: 5, mood: "tired", caffeineIntake: 2, focusLevel: 5},
    {day: "Wednesday", sleepHours: 9, screenTime: 3, mood: "fine", caffeineIntake: 1, focusLevel: 6},
    {day: "Thursday", sleepHours: 10, screenTime: 2.5, mood: "focused", caffeineIntake: 2,focusLevel: 8},
    {day: "Friday", sleepHours: 9, screenTime: 0, mood: "tired", caffeineIntake: 3,focusLevel: 4},
    {day: "Saturday", sleepHours: 10, screenTime: 2.5,mood: "energized", caffeineIntake: 2, focusLevel: 7},
    {day: "Sunday", sleepHours: 9, screenTime: 5, mood: "fine", caffeineIntake: 1, focusLevel: 5},
];

//Tuesday had the most screen time, and the best focus day was Thursday.
//I predict that higher caffeine intake helps focus (if capped at 2 cups).

//Function for finding average sleep time
function averageSleep(log){
    let sleepTotal = 0
    for (let entry of log) {
        sleepTotal += entry.sleepHours;
    }
    return sleepTotal / log.length;
}

//Function for finding the number of days with caffeine intake of 1 or lower
function numLowCafDays(log){
    let lowCafDays = 0
    for (let entry of log) {
        if (entry.caffeineIntake <= 1) {
            lowCafDays++
        }
    }
    return lowCafDays
}

//Function for finding the highest amount of screen time in an entry
function highestScreenTime(log) {
    let highestScreenTime = log[0].screenTime;
    for (let entry of log) {
        if (entry.screenTime > highestScreenTime) {
            highestScreenTime = entry.screenTime;
        }
    }
    return highestScreenTime;
}

//Function for determining the correlation of caffeine intake to focus
function correlateCaffeineToFocus(log) {
    let lowCafHighFocus = 0;
    let highCafHighFocus = 0;
    let lowCafLowFocus = 0;
    let highCafLowFocus = 0;

    for (let entry of log) {
        if (entry.caffeineIntake <= 1 && entry.focusLevel > 5) {
            lowCafHighFocus++;
        } else if (entry.caffeineIntake <= 1 && entry.focusLevel <= 5) {
            lowCafLowFocus++;
        } else if (entry.caffeineIntake > 1 && entry.focusLevel > 5) {
            highCafHighFocus++;
        } else if (entry.caffeineIntake > 1 && entry.focusLevel <= 5) {
            highCafLowFocus++;
        }
    }

    if (lowCafHighFocus > highCafHighFocus) {
        return "You have higher focus with lower caffeine intake.";
    } else if (highCafLowFocus > lowCafHighFocus) {
        return "You have higher focus with higher caffeine intake.";
    } else {
        return "Results inconclusive.";
    }
}

//TEST CALLS
console.log(averageSleep(weekData));
console.log(numLowCafDays(weekData));
console.log(highestScreenTime(weekData));
console.log(correlateCaffeineToFocus(weekData));