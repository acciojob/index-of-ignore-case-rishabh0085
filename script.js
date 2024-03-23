function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerCaseS1 = s1.toLowerCase();
  const lowerCaseS2 = s2.toLowerCase();
  
  // Use indexOf to find the index of first occurrence of lowerCaseS2 in lowerCaseS1
  return lowerCaseS1.indexOf(lowerCaseS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
