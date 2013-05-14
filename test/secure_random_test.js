var assert = require('assert');
var SecureRandom = require('../index');

it("creates a 1byte string", function() {
  assert.equal(SecureRandom.hex(1).length, 2);
});

it("creates a 12byte string", function() {
  assert.equal(SecureRandom.hex(12).length, 24);
});

it("creates a 24byte string", function() {
  assert.equal(SecureRandom.hex(24).length, 48);
});

it("creates a 32byte string", function() {
  assert.equal(SecureRandom.hex(32).length, 64);
});

// not sure of the best way to do this
it("creates a random string", function() {
  var string1 = SecureRandom.hex(12);
  var string2 = SecureRandom.hex(12);
  var string3 = SecureRandom.hex(12);
  var string4 = SecureRandom.hex(12);
  var string5 = SecureRandom.hex(12);
  assert.notEqual(string1, string2);
  assert.notEqual(string1, string3);
  assert.notEqual(string1, string4);
  assert.notEqual(string1, string5);
});

