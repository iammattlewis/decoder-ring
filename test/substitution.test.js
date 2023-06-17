// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

// ENCRYPTION

describe("Substitution Cipher", () => {
  describe("Encryption", () => {
    it("should encrypt single word", () => {
      const input = "hello";
      const alphabet = "kgwujvyeopltncdamhfzxqrbsi";
      const expected = "ejttd";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.equal(expected);
    });
  
    it("should encrypt multiple words", () => {
      const input = "hello world";
      const alphabet = "kgwujvyeopltncdamhfzxqrbsi";
      const expected = "ejttd rdhtu";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.equal(expected);
    });

    it("should ignore case", () => {
      const input = "HeLlO";
      const alphabet = "kgwujvyeopltncdamhfzxqrbsi";
      const expected = "ejttd";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.equal(expected);
    });
    
    it("should encrypt correctly when substitution alphabet contains numbers or special characters", () => {
      const input = "hello";
      const alphabet = "qodp8ij%rkt3sm?geycfaxlwbu";
      const expected = "%833?";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.equal(expected);
    });

    it("should return input when substitution alphabet matches standard alphabet", () => {
      const input = "this is not a secret";
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.equal(input);
    });

    it("should return false when trying to encrypt a character not found in the standard alphabet", () => {
      const input = "you can't include apostrophes, it won't work";
      const alphabet = "kgwujvyeopltncdamhfzxqrbsi";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  })

  
});