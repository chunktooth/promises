// Exercise 1

const testNum = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("Great number comes great resolution!");
    } else {
      reject("A number too less will be rejected");
    }
  }) 
}

// Exercise 2
let strings = wordArray.every(word => typeof word === 'string');

const makeAllCaps = (wordArray) => {
  return new Promise((resolve, reject) => {
    if (strings) {
      let upperCase = wordArray.map(word => word.toUpperCase());

      resolve(upperCase);
    } else {
      reject("Only strings can be upperCased");
    }
  });
};

const sortWords = (wordArray) => {
  return new Promise((resolve, reject) => {
    if (strings) {
      let sortedWords = wordArray.sort();

      resolve(sortedWords);
    } else {
      reject("Only strings can be sorted");
    }
  }); 
};
