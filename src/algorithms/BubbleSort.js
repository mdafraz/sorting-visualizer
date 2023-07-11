const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const BubbleSort = (arr) => {
  const steps = [];
  let n = arr.length;
  let i, j;
  for (i = 1; i < n; i++) {
    for (j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      steps.push({ array: [...arr], blue: [j], orange: [j + 1] });
    }
  }

  return { steps: steps };
};

export default BubbleSort;
