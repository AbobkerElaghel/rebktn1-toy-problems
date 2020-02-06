/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
    const splitedArray = time.split(':');
    if (splitedArray.length !== 2) {
        throw new Error("Please Enter a Currect Time Format");
    }
    if (splitedArray[0] > 12 || splitedArray[1] > 60) {
        throw new Error("Please Enter a Currect Time Format");
    }
    if (splitedArray[0].length === splitedArray[1].length) {
        return time;
    } else {
        format = splitedArray[1].slice(2).toLowerCase();
        if (format != 'am' && format != 'pm') {
            throw new Error("Please Enter a Currect Time Format");
        }
        splitedArray[1] = splitedArray[1].slice(0, 2);
        if (format === 'pm' && splitedArray[0] < 12) {
            splitedArray[0] = parseInt(splitedArray[0]) + 12;
            return splitedArray.join(":");
        } else if (format === 'am' && splitedArray[0] == 12) {
            return '00:00';
        } else {
            return splitedArray.join(":");
        }
    }
}

console.log(toMilitary("1:00pm"));

// else {
//   splitedArray[1] = splitedArray[1].slice(0, 2);
//   if (splitedArray[0] > 23) {
//       splitedArray[0] = splitedArray[0] - 12;

//       return splitedArray.join(':');
//   }
//   return splitedArray.join(':');
// }

// else {
//   splitedArray[1] = splitedArray[1].slice(0, 2);
//   if (splitedArray[0] > 23) {
//       splitedArray[0] = splitedArray[0] - 12;

//       return splitedArray.join(':');
//   }
//   return splitedArray.join(':');
// }