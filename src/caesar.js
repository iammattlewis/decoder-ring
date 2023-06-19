// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25 || typeof input !== "string") {
      return false;
    }
  // activates decode mode, which inverts the shift  
  if (encode === false) {
    shift = shift * -1;
  }    
  // returns our input to lower case, splits its, maps it, shifts it using the shifter helper function and joins it back again
  return input
      .toLowerCase()
      .split("")
      .map((character) => shifter(character, shift))
      .join("");
    }
    
    /*
    Option 2: If using this option, comment out the above code
    from the first if statement to the return statement.

        try {
      if (!shift || shift < -25 || shift > 25)
        throw new Error("Shift must be between -25 and 25.");
      if (typeof input !== "string")
        throw new Error("Input must be a string.");

      shift *= encode ? 1 : -1;

      return input
        .toLowerCase()
        .split("")
        .map((character) => shifter(character, shift))
        .join("");
    }    
    } catch (error) {
      return false;
    }
  }
    */
    // this performs the actual algorithm
    function shifter(character, shift) {
      // alphabet array for the key
      const key = "abcdefghijklmnopqrstuvwxyz".split(""); 

      if (!character.match(/[a-z]/)) return character;

      
      let index = key.indexOf(character);
      let shifted = (((index + shift) % 26) + 26) % 26;
      return key[shifted];
    }  
  

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
