'use strict';

require('mocha');

const expect = require('chai').expect;
const should = require('chai').should();

describe('re-commonjs-examples', () => {
  describe('examples.test', () => {
    it('should run', () => {
      require('../publish');
    });
  });
});
