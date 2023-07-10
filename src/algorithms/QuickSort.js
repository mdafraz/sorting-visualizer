function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function QuickSort(arr, start, end, steps) {
  if (start < end) {
    let pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
      if (arr[j] <= pivot) {
        swap(arr, i, j);
        steps.push({ array: arr.slice(), blue: [i, j], pivot: [end] });
        i++;
      }
    }
    swap(arr, i, end);
    steps.push({ array: arr.slice(), blue: [i, end] });
    QuickSort(arr, start, i - 1, steps);
    QuickSort(arr, i + 1, end, steps);
  }
}

function QuickSortWithSteps(arr, start, end) {
  const steps = [];
  QuickSort(arr, start, end, steps);
  return steps;
}
export default QuickSortWithSteps;

// function swap(arr, i, j) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// function partition(arr, start, end, steps) {
//   const pivot = arr[end];
//   let i = start;

//   for (let j = start; j < end; j++) {
//     if (arr[j] <= pivot) {
//       swap(arr, i, j);
//       steps.push({ array: arr.slice(), blue: [i, end] });
//       i++;
//     }
//   }

//   swap(arr, i, end);

//   return i;
// }

// function QuickSort(steps, arr, start, end = arr.length - 1) {
//   if (start < end) {
//     const pivotIndex = partition(arr, start, end, steps);

//     QuickSort(steps, arr, start, pivotIndex - 1);

//     QuickSort(steps, arr, pivotIndex + 1, end);
//   }
// }

// const quickSortWithSteps = (...args) => {
//   const steps = [];

//   QuickSort(steps, ...args);

//   return steps;
// };

// export default quickSortWithSteps;
