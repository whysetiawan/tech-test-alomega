export const fishBash = (num: number): string => {
  let output = "";

  if (num % 3 === 0) {
    output += "Fish";
  }

  if (num % 5 === 0) {
    output += "Bash";
  }

  if (output === "") {
    output = num.toString();
  }

  return output;
};
