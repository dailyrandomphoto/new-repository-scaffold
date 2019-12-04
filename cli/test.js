'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const {expect} = chai;
const main = require('new-repository-scaffold');

describe('new-repository-scaffold', () => {
  it('module should to be a function', () => {
    expect(main).to.be.a('function');
  });

  it('should throw an error', () => {
    expect(() => main()).to.throw();
  });

  it('should not throw an error', () => {
    expect(() => main('test.json')).not.to.throw();
  });
});
