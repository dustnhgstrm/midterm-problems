function isEvenlyDivisible(num1, num2) {
  const itsTrue = num1 % num2 === 0;
  if (itsTrue) {
    return itsTrue;
  } else return false;
}

function halfSquare(num) {
  return Math.pow(num, 2) / 2;
}

function isLong(str) {
  const itIsLong = str.length >= 15;
  if (itIsLong) {
    return itIsLong;
  } else return false;
}

//given a str. returns str with one exclamation point at the end. plan: if doesn't have one then add one. if str[str.length-1 === '!' && str[str.length-1] !== str[str.length-2] then return original string. if it has multiple -> if str[i] === '!' && str[i] !== str[str.length-2]

function exclaim(str) {
  let regularExclamation = "";
  if (str[str.length - 1] !== "!") {
    return str + "!";
  }
  if (str[str.length - 1] === "!" && str[str.length - 2] !== "!") {
    return str;
  } else
    for (let i = 0; i < str.length - 2; i++) {
      if (str[i] !== "!") {
        regularExclamation = regularExclamation + str[i];
      }
    }
  return regularExclamation + "!";
}

function countWords(str) {
  let spaceCount = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      spaceCount++;
    }
  }
  return spaceCount;
}

function containsDigit(str) {
  let i;
  for (i = 0; i < str.length; i++) {
    let digitBoolean =
      str[i] === "1" ||
      str[i] === "2" ||
      str[i] === "3" ||
      str[i] === "4" ||
      str[i] === "5" ||
      str[i] === "6" ||
      str[i] === "7" ||
      str[i] === "8" ||
      str[i] === "9" ||
      str[i] === "0";
    if (digitBoolean) {
      return true;
    }
  }
  return false;
}

function containsLowerCase(str) {
  const lowerCases = str.toLowerCase();
  const upperCases = str.toUpperCase();
  if (lowerCases === upperCases) {
    return false;
  }
  if (lowerCases === str) {
    return true;
  }
  if (upperCases === str) {
    return false;
  } else return true;
}

function containsUpperCase(str) {
  const lowerCases = str.toLowerCase();
  const upperCases = str.toUpperCase();
  if (lowerCases === upperCases) {
    return false;
  }
  if (lowerCases === str) {
    return false;
  }
  if (upperCases === str) {
    return true;
  } else return true;
}

//true if contains at least one nonalpha char.

function containsNonAlphanumeric(str) {
  if (str.length < 1) {
    return false;
  }
  for (const value of str) {
    if (parseInt(value) % 1 === 0) {
      continue;
    }
    if (value !== value.toUpperCase()) {
      continue;
    }
    if (value !== value.toLowerCase()) {
      continue;
    } else return true;
  }
  return false;
}

function containsSpace(str) {
  let spaceCount = 0;
  if (str.length < 1) {
    return false;
  } else
    for (i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        spaceCount++;
      }
      if (spaceCount > 0) {
        return true;
      }
    }
  return false;
}

function digits(num) {
  if (num >= 0) {
    num = num;
  } else num = -num;
  let numStrings = num.toString();
  let ourArray = [];
  for (let i = 0; i < numStrings.length; i++) {
    let numAgain = parseInt(numStrings[i]);
    if (numStrings[i] === ".") {
      ourArray = ourArray;
    } else ourArray.push(numAgain);
  }
  return ourArray;
}

function truncate(str) {
  let shorterStr = "";
  if (str.length < 15) {
    return str;
  } else
    for (let i = 0; i < 8; i++) {
      //return first 8 chars and elipses.
      shorterStr = shorterStr + str[i];
    }
  return shorterStr + "...";
}

//false if no uppercase chars in given str;false if no lowercase; false if no digits, false if no non-alphanumeric; false if any spaces; true if a lower/upper/digit/non-alpha/and no spaces.

function isValidPassword(str) {
  let ifNums = 0;
  let ifUpper = 0;
  let ifLower = 0;
  let ifNoSpace = 1;
  let ifNoAlphaNum = 0;
  for (const value of str) {
    if (parseInt(value) % 1 === 0) {
      ifNums = 1;
      continue;
    }
    if (value !== value.toUpperCase()) {
      ifUpper = 1;
      continue;
    }
    if (value !== value.toLowerCase()) {
      ifLower = 1;
      continue;
    }
    if (value === " ") {
      ifNoSpace = 0;
      continue;
    } else ifNoAlphaNum = 1;
  }
  if (ifNums + ifUpper + ifLower + ifNoSpace + ifNoAlphaNum === 5) {
    return true;
  }
  return false;
}

// function exclaim(str) {
//   let regularExclamation = "";
//   if (str[str.length - 1] !== "!") {
//     return str + "!";
//   }
//   if (str[str.length - 1] === "!" && str[str.length - 2] !== "!") {
//     return str;
//   } else
//     for (let i = 0; i < str.length - 2; i++) {
//       if (str[i] !== "!") {
//         regularExclamation = regularExclamation + str[i];
//       }
//     }
//   return regularExclamation + "!";
// }

//given an array, it returns items shorter than 15 chars, adds '!' if needed, removes excess '!', if more than one '!' it does not count extras as chars for 15 req.

//plan:

function onlyPunchy(arr) {
  let myBetterArray = [];
  for (const value of arr) {
    //if ends with '!' ->
    if (value.indexOf("!") !== -1) {
      if (value.length - 1 === value.indexOf("!") && value.length < 15) {
        myBetterArray.push(value);
        continue;
      } else myBetterArray.push(value.slice(0, value.indexOf("!") + 1));
      continue;
    }
    //it does not have '!'
    if (value.indexOf("!") === -1) {
      if (value.length < 15) {
        let newThing = value + "!";
        myBetterArray.push(newThing);
        continue;
      }
      if (value.length > 15) {
        myBetterArray = myBetterArray;
      }
    }
  }
  return myBetterArray;
}

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
};
