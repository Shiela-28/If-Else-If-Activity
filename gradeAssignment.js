// Get score from user input.
let score = (prompt("Enter your score:"));

// Check score and assign grade.
if (score >= 90) { console.log("Excellent"); }
else if (score >= 80) { console.log("Good"); }
else if (score >= 70) { console.log("Fair"); }
else { console.log("Needs Improvement"); }