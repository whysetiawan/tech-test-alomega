export const bubbleSort = (arr: number[]): number[] => {
  const copyArr = [...arr];
  const n = copyArr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      const current = copyArr[j]!;
      const next = copyArr[j + 1]!;
      if (current > next) {
        const temp = current;
        copyArr[j] = next;
        copyArr[j + 1] = temp!;
      }
    }
  }

  return copyArr;
};

export const selectionSort = (arr: number[]): number[] => {
  const copyArray = [...arr];
  const n = copyArray.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (copyArray[j]! < copyArray[minIndex]!) {
        minIndex = j;
      }
    }

    const temp = copyArray[i];
    copyArray[i] = copyArray[minIndex]!;
    copyArray[minIndex] = temp!;
  }

  return copyArray;
};

// const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
// const sortedArray = selectionSort(unsortedArray);

// console.log("Unsorted Array:", unsortedArray);
// console.log("Sorted Array:", sortedArray);
