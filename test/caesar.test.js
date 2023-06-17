// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

// ENCRYPTION

describe("Caesar Shift", () => {
  describe("Encryption", () => {
    // positive shift
    describe("positive shift", () => {
      it("encrypts single word", () => {
        const input = "thinkful";
        const shift = 2;
        const expected = "vjkpmhwn";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });
  
      it("encrypts multiple words", () => {
        const input = "hello mother leopard";
        const shift = 1;
        const expected = "ifmmp npuifs mfpqbse";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });
  
      it("encrypts when wrapping around the alphabet", () => {
        const input = "oxygenize zooprophylaxis xylophone";
        const shift = 9;
        const expected = "xghpnwrin ixxyaxyqhujgrb ghuxyqxwn";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);    
      });
    });


    // negative shift
    describe("negative shift", () => {
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

      it("encrypts when wrapping around the alphabet", () => {
        const input = "new canopies arise";
        const shift = -10;
        const expected = "dum sqdefyui qhyiu";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });
    });
  });


// DECRYPTION
  describe("decryption", () => {
    describe ("positive shift", () => {
      it("decrypts single word", () => {
        const input = "vjkpmhwn";
        const shift = 2;
        const expected = "thinkful";
        const actual = caesar(input, shift, false);
        expect(actual).to.be.equal(expected);
      });

      it("decrypts multiple words", () => {
        const input = "ifmmp npuifs mfpqbse";
        const shift = 1;
        const expected = "hello mother leopard";
        const actual = caesar(input, shift, false);
        expect(actual).to.be.equal(expected);
      });

      it("decrypts when wrapping around the alphabet", () => {
        const input = "xghpnwrin ixxyaxyqhujgrb ghuxyqxwn";
        const shift = 9;
        const expected = "oxygenize zooprophylaxis xylophone";
        const actual = caesar(input, shift, false);
        expect(actual).to.be.equal(expected);
      });
    });
    
    describe("negative shift", () => {
      it("decrypts a single word", () => {
        const input = "lzafcxmd";
        const shift = -8;
        const expected = "thinkful";
        const actual = caesar(input, shift, false);
        expect(actual).to.be.equal(expected);
      });

      it("decrypts multiple words", () => {
        const input = "vszzc achvsf zscdofr";
        const shift = -12;
        const expected = "hello mother leopard";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });
      it("decrypts when wrapping around the alphabet", () => {
        const input = "dum sqdefyui qhyiu";
        const shift = -10;
        const expected = "new canopies arise";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });
    });
  });

  


});