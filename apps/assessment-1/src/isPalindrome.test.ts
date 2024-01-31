import { isPalindrome } from "./isPalindrome";

describe("isPalindrome function", () => {
  it("should return true for a palindrome string", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    expect(isPalindrome("Was it a car or a cat I saw")).toBe(true);
    expect(isPalindrome("Kasur rusak")).toBe(true);
    expect(isPalindrome("Katak")).toBe(true);
  });

  it("should return false for a non-palindrome string", () => {
    expect(isPalindrome("Hello, World!")).toBe(false);
    expect(isPalindrome("This is not a palindrome")).toBe(false);
  });

  it("should handle case sensitivity", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("Palindrome")).toBe(false);
  });

  it("should handle empty strings", () => {
    expect(isPalindrome("")).toBe(false);
  });
});
