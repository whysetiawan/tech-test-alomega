export const isPalindrome = (str: string): boolean => {
  if (!str) {
    return false;
  }
  const cleanedStr = str.toLowerCase().replace(/\s/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
};
