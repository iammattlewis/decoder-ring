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
  
    it("should encrypt all letters of the alphabet", () => {
      const input = "abcdefghijklmnopqrstuvwxyz";
      const expected = "1121314151122232424252132333435314243444541525354555";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });
  
    it("should encrypt letters separated by spaces", () => {
      const input = "abcde fghij klmno pqrst uvwxy z";
      const expected = "1121314151 1222324242 5213233343 5314243444 5415253545 55";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });

    it("should ignore input case", () => {
      const input = "aBcDefGHijKLmnOpqRstUVWxYz";
      const expected = "1121314151122232424252132333435314243444541525354555";
      const actual = polybius(input);
      expect(actual).to.be.equal(expected);
    });

    it("should returnsfalse when input is something other than letters and spaces", () => {
      const input = "5555";
      const actual = polybius(input);
      expect(actual).to.be.false;
    });

    it("should return false when no input is given", () => {
      const actual = polybius();
      expect(actual).to.be.false;
    });
  });

// DECRYPTION

  describe("Decryption", () => {
    it("should decrypt a single code", () => {
      const input = "3251131343";
      const expected = "hello";
      const actual = polybius(input, false);
      expect(actual).to.be.equal(expected);
    });

    it("should decrypt codes separated by spaces", () => {
      const input = "3251131343 2543241341";
      const expected = "hello world";
      const actual = polybius(input, false);
      expect(actual).to.be.equal(expected);
    });

    it("should decrypt code 42 as (i/j)", () => {
      const input = "42";
      const expected = "(i/j)";
      const actual = polybius(input, false);
      expect(actual).to.be.equal(expected);
    });

    it("should return false when input is odd length", () => {
      const input = "3251131343 443242335212541 2543241341 ";
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });

    it("should return decrypted message, even if it contains the world 'false'", () => {
      const input = "1211133451";
      const expected = "false";
      const actual = polybius(input, false);
      expect(actual).to.be.equal(expected);
    });

    it("should return false when given invalid codes", () => {
      const input = "66778899";
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });

    it("should return false when no input is entered", () => {
      const actual = polybius();
      expect(actual).to.be.false;
    });
  });
});