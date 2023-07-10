function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function SelectionSort(arr, steps) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      steps.push({ array: arr.slice(), blue: [i, j] });
    }
    swap(arr, i, min);
    steps.push({ array: arr.slice() });
  }
}

function SelectionSortWithSteps(arr) {
  const steps = [];
  SelectionSort(arr, steps);
  return steps;
}

export default SelectionSortWithSteps;
