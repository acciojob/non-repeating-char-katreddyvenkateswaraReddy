function firstNonRepeatedChar(str) {
    // Create an object to store the character frequencies
    const charCount = {};

    // Iterate through the string to count the characters
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with a count of 1
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null or a message
    return null; // You can also return a message like "No non-repeated character found."
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
