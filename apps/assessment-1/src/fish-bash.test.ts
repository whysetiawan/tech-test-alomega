import { fishBash } from "../src/fish-bash";

describe("fishBash function", () => {
  it('should return "Fish" for multiples of 3', () => {
    expect(fishBash(3)).toBe("Fish");
    expect(fishBash(6)).toBe("Fish");
  });

  it('should return "Bash" for multiples of 5', () => {
    expect(fishBash(5)).toBe("Bash");
    expect(fishBash(10)).toBe("Bash");
  });

  it('should return "FishBash" for multiples of both 3 and 5', () => {
    expect(fishBash(15)).toBe("FishBash");
    expect(fishBash(30)).toBe("FishBash");
  });

  it("should return the number itself for non-multiples of 3 and 5", () => {
    expect(fishBash(1)).toBe("1");
    expect(fishBash(7)).toBe("7");
  });
});
