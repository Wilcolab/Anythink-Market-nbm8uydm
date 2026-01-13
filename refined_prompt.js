// Prompt:
// Write a JavaScript function named toCamelCase that converts a given string into camelCase format.
// Include proper error handling for invalid inputs such as null, undefined, empty strings, or non-string values.
// Handle edge cases like multiple spaces, special characters, hyphens, and underscores.
// Throw a descriptive error message if input is invalid.

function toCamelCase(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new Error("Input must be a non-empty string");
  }

  return input
    .toLowerCase()
    .replace(/[_\-]+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim()
    .split(/\s+/)
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}
