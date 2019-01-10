var assert = require('assert');
var adder = require('../divider');

describe("divider tests ", function() {
    var _numberA;
    var _numberB;

    beforeEach(function() {
    });

    it("should return numberA divided by numberB", function() {
        _numberA = 6;
        _numberB = 2;
        var result = divider.divide(_numberA, _numberB);
		assert.equal(result, 3);
    });

    it("should return undefined for numberA equals 0", function() {
        _numberA = 0;
        _numberB = 2;
        var result = divider.divide(_numberA, _numberB);
		assert.equal(result, undefined);
    });

    it("should return undefined for numberB equals 0", function() {
        _numberA = 2;
        _numberB = 0;
        var result = divider.divide(_numberA, _numberB);
		assert.equal(result, undefined);
    });

});