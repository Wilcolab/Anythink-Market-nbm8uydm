// Chain Prompt:
// Create a JavaScript function named toKebabCase by following these steps:
// 1. Validate the input to ensure it is a non-empty string.
// 2. Normalize the string by trimming spaces, converting to lowercase, and replacing separators with hyphens.
// 3. Remove special characters and return the kebab-case result.

function toKebabCase(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new Error("Input must be a non-empty string");
  }

  return input
    .toLowerCase()
    .trim()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}
