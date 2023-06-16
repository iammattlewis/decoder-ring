// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");


describe("Caesar Shift", () => {
  describe("Encryption", () => {
    // positive shift
    it("encrypts single word", () => {
      const input = "thinkful";
      const shift = 3;
      const expected = "wklqnixo";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("encrypts multiple words, phrases, and sentences", () => {
      const input = "hello mother leopard"
      const shift = 2;
      const expected = "jgnnq oqvjgt ngqrctf";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });
  });
  
})