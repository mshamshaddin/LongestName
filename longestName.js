function longestName(name1, name2, name3, name4) {

// Hey here is my test code on adding a food function
  name1 = "Carlos";
  name2 = "Mike";
  name3 = "Carlos";
  name4 = "Carlosa";

  const length1 = name1.length;
  const length2 = name2.length;
  const length3 = name3.length;
  const length4 = name4.length;

  // find the name with longest length
  const maxLength = Math.max(length1, length2, length3, length4);

  const longestNames = [];

  if (length1 === maxLength) longestNames.push(name1);
  if (length2 === maxLength) longestNames.push(name2);
  if (length3 === maxLength) longestNames.push(name3);
  if (length4 === maxLength) longestNames.push(name4);

  if (longestNames.length === 1) {
    console.log(`${longestNames[0]} has the longest name.`);
  }
  
  if (length1 === length2)
    console.log(`${name1} and ${name2} are the same length.`);
  if (length1 === length3)
    console.log(`${name1} and ${name3} are the same length.`);
  if (length1 === length4)
    console.log(`${name1} and ${name4} are the same length.`);
  if (length2 === length3)
    console.log(`${name2} and ${name3} are the same length.`);
  if (length2 === length4)
    console.log(`${name2} and ${name4} are the same length.`);
  if (length3 === length4)
    console.log(`${name3} and ${name4} are the same length.`);
}

 longestName();
