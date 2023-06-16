// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const mainKey = "abcdefghijklmnopqrstuvwxyz".split("");


  function substitution(input, alphabet, encode = true) {
    try {
      validAlphabet(alphabet);
      const codeKey = alphabet.toLowerCase().split("");
      return input
        .toLowerCase()
        .split("")
        .map(
          (word) =>
            encode
              ? mapTo(word, mainKey, codeKey) // if encoding, going from standard alphabet to coded alphabet
              : mapTo(word, codeKey, mainKey) // if not, we're going from coded to standard
        )
        .join("")
    } catch (error) {
      return false; // if we catch any errors, it will return false
    }
  }

  function mapTo(input, fromKey, toKey) {
    if (input.match(/\s/)) return input; // found out about character classes and escapes on MDN
    const index = fromKey.indexOf(input);
    if (index === -1)
      throw new Error(`${input} not found in alphabet.`);
    return toKey[index];
  }

  function validABC(alphabet) {
    if (alphabet.length !== 26)
      throw new Error(`A valid alphabet must be twenty-six characters long.`);

    if ([...new Set(alphabet)].length !== alphabet.length)
      throw new Error(`A valid alphabet cannot contain any repeating characters.`);
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
