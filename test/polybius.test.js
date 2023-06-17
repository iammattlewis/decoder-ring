// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

// ENCRYPTION

describe("Polybius Square", () => {
  describe("Encryption", () => {
    it("encrypts letters before i", () => {
      const input = "abcdefgh";
      const expected = "1121314151122232";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });
  
    it("encrypts all letters of the alphabet", () => {
      const input = "abcdefghijklmnopqrstuvwxyz";
      const expected = "1121314151122232424252132333435314243444541525354555";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });
  
    it("encrypts letters separated by spaces", () => {
      const input = "abcde fghij klmno pqrst uvwxy z";
      const expected = "1121314151 1222324242 5213233343 5314243444 5415253545 55";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });

    it("ignores input case", () => {
      const input = "aBcDefGHijKLmnOpqRstUVWxYz";
      const expected = "1121314151122232424252132333435314243444541525354555";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });

    it("returns false when input is something other than letters and spaces", () => {
      const input = "5555";
      const actual = polybius(input);
      expect(actual).to.be.false;
    });

    it("returns false when no input is given", () => {
      const actual = polybius();
      expect(actual).to.be.false;
    });
  });

  
  


})