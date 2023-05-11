/*
Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes of all capital letters in the string.
*/


// Solution

let capitals = function (word) {
  let caps = [];
  for (let i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
}

// or

let findTheCapitals = function (word) {
    return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

// or

let capitalLetters = function (word) {
  return word.split('')
    .map(function(l, i) {if (l.toUpperCase() === l) return i;})
    .filter(function(i) {return i != null})
}