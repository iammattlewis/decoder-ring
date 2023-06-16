// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");


describe("Caesar Shift", () => {
  describe("Encryption", () => {
    // positive shift
    it("encrypts single word", () => {
      const input = "thinkful";
      const shift = 2;
      const expected = "vjkpmhwn";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("encrypts multiple words", () => {
      const input = "hello mother leopard"
      const shift = 1;
      const expected = "ifmmp npuifs mfpqbse";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("encrypts when wrapping around the alphabet", () => {
      const input = "oxygenize zooprophylaxis xylophone"
      const shift = 9;
      const expected = "xghpnwrin ixxyaxyqhujgrb ghuxyqxwn"
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });
  });


  // negative shift
  describe("Negative Shift", () => {
    it("encrypts a single word", () => {
      const input = "thinkful";
      const shift = -8;
      const expected = "lzafcxmd";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("encrypts multiple words", () => {
      const input = "hello mother leopard";
      const shift = -12;
      const expected = "vszzc achvsf zscdofr";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("ecrypts when wrapping around the alphabet", () => {
      const input = "new canopies arise";
      const shift = -10;
      const expected = "dum sqdefyui qhyiu";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

  })
  
})