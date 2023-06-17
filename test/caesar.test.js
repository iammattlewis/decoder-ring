// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");



describe("Caesar Shift", () => {
  
  // ENCRYPTION

  describe("Encryption", () => {

    // positive shift
    
    describe("positive shift", () => {
      it("should encrypt single word", () => {
        const input = "thinkful";
        const shift = 2;
        const expected = "vjkpmhwn";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });
  
      it("should encrypt multiple words", () => {
        const input = "hello mother leopard";
        const shift = 1;
        const expected = "ifmmp npuifs mfpqbse";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });
  
      it("should encrypt when wrapping around the alphabet", () => {
        const input = "oxygenize zooprophylaxis xylophone";
        const shift = 9;
        const expected = "xghpnwrin ixxyaxyqhujgrb ghuxyqxwn";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);    
      });
    });


    // negative shift

    describe("negative shift", () => {
      it("should encrypt a single word", () => {
        const input = "thinkful";
        const shift = -8;
        const expected = "lzafcxmd";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });

      it("should encrypt multiple words", () => {
        const input = "hello mother leopard";
        const shift = -12;
        const expected = "vszzc achvsf zscdofr";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });

      it("should encrypt when wrapping around the alphabet", () => {
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
    // positive shift

    describe ("positive shift", () => {
      it("should decrypt single word", () => {
        const input = "vjkpmhwn";
        const shift = 2;
        const expected = "thinkful";
        const actual = caesar(input, shift, false);
        expect(actual).to.be.equal(expected);
      });

      it("should decrypt multiple words", () => {
        const input = "ifmmp npuifs mfpqbse";
        const shift = 1;
        const expected = "hello mother leopard";
        const actual = caesar(input, shift, false);
        expect(actual).to.be.equal(expected);
      });

      it("should decrypt when wrapping around the alphabet", () => {
        const input = "xghpnwrin ixxyaxyqhujgrb ghuxyqxwn";
        const shift = 9;
        const expected = "oxygenize zooprophylaxis xylophone";
        const actual = caesar(input, shift, false);
        expect(actual).to.be.equal(expected);
      });
    });
    
    describe("negative shift", () => {

      // negative shift

      it("should decrypt a single word", () => {
        const input = "lzafcxmd";
        const shift = -8;
        const expected = "thinkful";
        const actual = caesar(input, shift, false);
        expect(actual).to.be.equal(expected);
      });

      it("should decrypt multiple words", () => {
        const input = "vszzc achvsf zscdofr";
        const shift = -12;
        const expected = "hello mother leopard";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });
      it("should decrypt when wrapping around the alphabet", () => {
        const input = "dum sqdefyui qhyiu";
        const shift = -10;
        const expected = "new canopies arise";
        const actual = caesar(input, shift);
        expect(actual).to.be.equal(expected);
      });
    });
  });

  // FRINGE CASES

  describe("Fringe Cases", () => {
    it("should gnore input case", () => {
      const input = "HeLLo MOTHer LeoPArd";
      const shift = 1;
      const expected = "ifmmp npuifs mfpqbse";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });
    
    it("should return correct encryption when given non-letters", () => {
      const input = "2+2 always makes up 5!&*";
      const shift = 4;
      const expected = "2+2 epaecw qeoiw yt 5!&*";
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("should return input message when input message contains all non-letters", () => {
      const input = "6(&0}++=";
      const shift = 10;
      const expected = input;
      const actual = caesar(input, shift);
      expect(actual).to.be.equal(expected);
    });

    it("should return false when shift is valid but no input is given", () => {
      const shift = 5;
      const actual = caesar(undefined, shift);
      expect(actual).to.be.false;
    });
  });

  // INVALID SHIFT ERRORS

  describe("Invalid Shift Errors", () => {
    it("should return false when shift = 0", () => {
      const input = "wormed our way through distant earth";
      const shift = 0;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });

    it("should return false when shift < -25", () => {
      const input = "lazarus threw the fight";
      const shift = -75;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });

    it("should return false when shift > 25", () => {
      const input = "jefferson survives";
      const shift = 100;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
  });
});