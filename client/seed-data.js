const axios = require("axios");
function generateRandomPhoneNumber() {
    // Helper function to generate a random number with a fixed length
    const randomNumber = (length) => {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10); // generate a single random digit (0-9)
      }
      return result;
    };
  
    return `${randomNumber(3)}-${randomNumber(4)}-${randomNumber(4)}`;
  }
// Creates 20 Students
function randomDate(startYear, endYear) {
    // Create a date object for the start year and end year
    let startDate = new Date(startYear, 0, 1); // January 1, startYear
    let endDate = new Date(endYear, 11, 31);   // December 31, endYear
    
    // Generate a random timestamp between the start and end dates
    let randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  
    // Create a new date object based on the random timestamp
    let randomDate = new Date(randomTimestamp);
  
    // Return the random date
    return randomDate;
  }
  
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }
let parents = `LISA
NANCY
KAREN
BETTY
HELEN
SANDRA
DONNA
CAROL
RUTH
SHARON
MICHELLE
LAURA
SARAH
KIMBERLY
DEBORAH
JESSICA
SHIRLEY
CYNTHIA
ANGELA
MELISSA`.split("\n")
let firstNames = `JAMES
JOHN
ROBERT
MICHAEL
WILLIAM
DAVID
RICHARD
CHARLES
JOSEPH
THOMAS
MARY
PATRICIA
LINDA
BARBARA
ELIZABETH
JENNIFER
MARIA
SUSAN
MARGARET
DOROTHY`.split("\n")
let lastNames = `SMITH
JOHNSON
WILLIAMS
JONES
BROWN
DAVIS
MILLER
WILSON
MOORE
TAYLOR
ANDERSON
THOMAS
JACKSON
WHITE
HARRIS
MARTIN
THOMPSON
GARCIA
MARTINEZ
ROBINSON`.split("\n");
for(let i = 0;i < 20;i++){
    axios.post("http://localhost:3001/api/student/", {
        firstName: toTitleCase(firstNames[i]),
        lastName: toTitleCase(lastNames[i]),
        DOB: randomDate(2018, 2019),
        contactFirstName: toTitleCase(parents[i]),
        contactLastName: toTitleCase(lastNames[i]),
        contactNumber: generateRandomPhoneNumber(),
        relationshipToStudent: "Mother",
    })
}