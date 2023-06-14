// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const keys = {
    mainKey: createKey("alpha"),
    coordinateKey: createKey("coord"),
  };

  function polybius(input, encode = true) {
    try {
      if (!input.length) throw new Error("Input cannot be empty.");
      return input
        .split(" ")
        .map((word) => iterateWord(word, encode, keys))
        .join(" ");
    } catch (error) {
      return false;
    }
  }

  // Helper functions

  function iterateWord(word, encode, {mainKey, coordinateKey}) {
    if (encode)
      return word
        .toLowerCase()
        .split("")
        .map((letter) => mapMatrix(letter, mainKey, coordinateKey))
        .join("");

    if (word.length % 2 !== 0)
      throw new Error("Coordinates come in pairs. Decryption cannot occur with an odd numbered total.")
    
    let output = "";
    for (let char = 0; char < word.length; char += 2) {
      const column = word[char];
      const row = word[char +1];
      const code = `${column}${row}`;
      output += mapMatrix(code, coordinateKey, mainKey);
    }
    return output;
  }

  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
