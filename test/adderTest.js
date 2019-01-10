var adder = require('../adder');
var assert = require('assert');

describe("adder tests ", function() {
    var _numberA;
    var _numberB;

    beforeEach(function() {
    });

    it("should return numberA pulse numberB", function() {
        _numberA = 1;
        _numberB = 2;
        var result = adder.add(_numberA, _numberB);
		assert.equal(result, 3);
       
    });

    it("should return undefined for numberA equals 0", function() {
        _numberA = 0;
        _numberB = 2;
        var result = adder.add(_numberA, _numberB);
		assert.equal(result, undefined);
    });
    it("should return undefined for numberA equals 6", function() {
        _numberA = 4;
        _numberB = 2;
        var result = adder.add(_numberA, _numberB);
		assert.equal(result, 6);
    });
});