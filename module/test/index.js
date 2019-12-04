'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const {expect} = chai;
const lib = require('new-repository-scaffold');

describe('new-repository-scaffold', () => {
  it('should do something', () => {
    expect(lib).to.be.a('object');
  });
});
