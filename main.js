//Current Day of the Week
const currentDay = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayIndex = currentDay.getDay();
const dayName = daysOfWeek[dayIndex];
const dayOfWeek = document.getElementById("dayOfWeek");
dayOfWeek.textContent = `Today is ${dayName}`;


//Current UTC Time in Milliseconds
const currentTimeInMilliseconds = new Date().getTime();
document.getElementById('utc_time').textContent = `UTC Time in Milliseconds: ${currentTimeInMilliseconds}`;
