// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const keys = {
    mainKey: createKey("main"),
    coordinateKey: createKey("coordinate"),
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

  function iterateWord(word, encode, { mainKey, coordinateKey }) {
    // encode
    if (encode)
      return word
        .toLowerCase()
        .split("")
        .map((letter) => mapMatrix(letter, mainKey, coordinateKey))
        .join("");
    
    // decode
    if (word.length % 2 !== 0)
      throw new Error("Coordinates come in pairs. Decryption cannot occur with an odd numbered total.")
    
    let output = "";
    for (let char = 0; char < word.length; char += 2) {
      const col = word[char];
      const row = word[char + 1];
      const code = `${col}${row}`;
      output += mapMatrix(code, coordinateKey, mainKey);
    }
    return output;
  }

  function mapMatrix(input, fromKey, toKey) {
    const coord = findCoordinate(input, fromKey);
    if (!coord) throw new Error (`${input} is not valid. Please re-enter a valid input.`);
    const row = coord[0];
    const col = coord[1];
    return toKey[row][col];
  }
  
  function findCoordinate(input, key) {
    if (input === "i" || input === "j") input = "(i/j)";
    for (let row = 0; row < 5; row++)
      for (let col = 0; col < 5; col++) {
        if (key[row][col] === input) return [row, col];
      }
    return false;  
  }

  function createKey(type = "main", size = 5) {
    const grid = [];
    for (let row = 0; row < size; row++) {
      const thisRow = [];
      for (let col = 0; col < size; col++) {
        type === "main"
        ? thisRow.push(mainIndex(row, col, size))
        : thisRow.push(coordIndex(row, col));
      }
      grid.push(thisRow);
    }
    return grid;
  }

  function mainIndex(row, col, size) {
    const number = row * size + col;
    let charCode = number + 97;
    if (charCode === 105) return "(i/j)";
    const shift = charCode > 105 ? 1 : 0;
    return String.fromCharCode(charCode + shift);
  }
  function coordIndex(row, col) {
    return `${col + 1}${row + 1}`;
  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
