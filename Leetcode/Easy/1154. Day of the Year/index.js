/* 
Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.
*/

// My Solution
const dayOfYear = date => {
  // Leap years every 4 years
  // Leap year means 29 days in February (02)
  // Normally, February (02) has 28 days
  // All odd number dates have 31 days
  // All even number dates exluding February (02) have 30 days
  let dateArray = date.split("-");
  let year = parseInt(dateArray[0].replace(/^[0]+/, ""));
  let month = parseInt(dateArray[1].replace(/^[0]+/, ""));
  let days = parseInt(dateArray[2].replace(/^[0]+/, ""));
  let totalDays = 0;
  for (let i = 1; i <= month; i++) {
    if (i === 2) {
      if (year % 4 !== 0 || year === 1900) {
        totalDays += 28;
      } else {
        totalDays += 29;
      }
    } else {
      if (
        i === 1 ||
        i === 3 ||
        i === 5 ||
        i === 7 ||
        i === 8 ||
        i === 10 ||
        i === 12
      ) {
        totalDays += 31;
      } else {
        totalDays += 30;
      }
    }
  }
  if (month === 2) {
    if (year % 4 !== 0 || year === 1900) {
      totalDays -= 28;
    } else {
      totalDays -= 29;
    }
  } else {
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      totalDays -= 31;
    } else {
      totalDays -= 30;
    }
  }
  return totalDays + days;
};
