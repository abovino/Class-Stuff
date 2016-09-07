var vowels = ['a', 'e', 'i', 'o', 'u'];

function disemvowel(string) {
  /*for (i = 0; i < string.length; i++) {}*/
  console.log(string.replace(/[aeiou]/gi, ''));
}

disemvowel("angelo");

module.exports = disemvowel;