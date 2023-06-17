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
  
  })

  
});