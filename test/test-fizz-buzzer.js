const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should return fizz-buzz if number is divisible by 15', function() {
		const normalCases = [
		15,
		30,
		45,
		-60];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('fizz-buzz');
		});
	});
	it('should return buzz if number is divisible by 5', function() {
		const normalCases = [
		5,
		-10,
		25,
		20];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('buzz');
		});
	});
	it('should return fizz if number is divisible by 3', function() {
		const normalCases = [
		3,
		6,
		-9,
		12];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input);
			expect(answer).to.equal('fizz');
		});
	});
	it('should return number if not divisible by 15, 5 or 3', function() {
		const normalCases = [
		4,
		-7,
		13,
		22];
		normalCases.forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal(input);
		});
	});
	it('should throw error if args are not numbers', function() {
		const badInputs = [
		false,
		'a',
		'1'];
		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});