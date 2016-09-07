'use strict';

const disemvowel = ((str) => {
  if (typeof str === 'number')
    return String(str);
  else
    return str.replace(/[aeiou]/ig, '')
});

module.exports = disemvowel;

//in CMD npm install mocha chai -g