import { bubbleSort, selectionSort } from "./sorting";

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const emptyArray: number[] = [];
const singleElementArray = [42];
const sortedArray = [1, 2, 3, 4, 5];

describe("Bubble Sort", () => {
  it("should sort an array in ascending order", () => {
    const sortedArray = bubbleSort(unsortedArray);
    expect(sortedArray).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  it("should handle an empty array", () => {
    const sortedArray = bubbleSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const sortedArray = bubbleSort(singleElementArray);
    expect(sortedArray).toEqual([42]);
  });

  it("should handle an array that is already sorted", () => {
    const result = bubbleSort(sortedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Selection Sort", () => {
  it("should sort an array in ascending order", () => {
    const sortedArray = selectionSort(unsortedArray);
    expect(sortedArray).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  it("should handle an empty array", () => {
    const emptyArray: number[] = [];
    const sortedArray = selectionSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const sortedArray = selectionSort(singleElementArray);
    expect(sortedArray).toEqual([42]);
  });

  it("should handle an array that is already sorted", () => {
    const result = selectionSort(sortedArray);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
