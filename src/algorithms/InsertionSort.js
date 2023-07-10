function InsertionSort(arr, steps) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i;
    while (j >= 0 && arr[j - 1] > value) {
      arr[j] = arr[j - 1];
      steps.push({ array: arr.slice(), blue: [i, j] });
      j = j - 1;
    }
    arr[j] = value;
    steps.push({ array: arr.slice(), blue: [i, j] });
  }
}

function InsertionSortWithSteps(arr) {
  const steps = [];
  InsertionSort(arr, steps);
  return steps;
}
export default InsertionSortWithSteps;
