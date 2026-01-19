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
//I predict that higher caffeine intake helps focus, if capped at 2 cups.

//Function for finding average sleep time
function averageSleep(log){
    let sleepTotal = 0
    for (let entry of log) {
        sleepTotal += entry.sleepHours;
    }
    return sleepTotal / log.length;
}

function numLowCafDays(log){
    let lowCafDays = 0
    for (let i = 0; i < cafCount.length; i++) {
        if (cafCount <= 1) {
            lowCafDays++
        }
    }
    return lowCafDays
}


function mostFrequentMood(log){
    for (let i = 0; i <= 7; i++) {

    }

}

//def correlateCaffeineToFocus(log)

//TEST CALLS
console.log(averageSleep(weekData));