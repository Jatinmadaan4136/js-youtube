// Declare a constant variable for user ID (cannot be changed)
const userId = 45637;

// Declare a block-scoped variable for user email
let userEmail = "jatin@gmail.com";

// Declare a function-scoped variable for user password (avoid using 'var' in modern JS)
var userPassward = "12345";

// Declare a block-scoped variable for user name (currently undefined)
let userName;

// Assign a value to userCity without declaration (becomes global variable, not recommended)
userCity = "Malout";

// userId cannot be changed because it is initialized as a constant variable

// Update userEmail, userPassward, and userCity with new values
userEmail = "jatinMadaan@gmail.com"
userPassward = "121212";
userCity = "Goa";

// Display all variables in a table format
console.table([userId, userEmail, userPassward, userCity, userName]);