var
    expect = require('chai').expect;

describe("#reverse-string", function () {
    var assignment = require('../js/reverse-string');
    it('should return the input String, reversed', function () {
        expect(assignment.reverseString('hello')).to.equal('olleh');
        expect(assignment.reverseString('goodbye')).to.equal('eybdoog');
    });
});