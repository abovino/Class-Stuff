var expect = require('chai').expect;
    Nightmare = require('nightmare'),
    nightmare = Nightmare({ show: true });
    mocha = require('mocha');
    

describe('NPM Packages', function () {

  var search = '#site-search'

  it('Should search the Nightmare package', function () {
    //nightmare.goto();

    nightmare
      .goto('https://www.npmjs.com/')
      .type(search, 'Nightmare')
      .click('form[action*="/search"] [type=submit]')
      .click('href="/package/nightmare"')
      .screenshot('nightmare.png')
      .end()
  })
 })