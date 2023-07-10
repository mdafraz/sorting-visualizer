function merge(arr, start, mid, end, steps) {
  let start2 = mid + 1;

  if (arr[mid] <= arr[start2]) {
    return;
  }

  while (start <= mid && start2 <= end) {
    if (arr[start] <= arr[start2]) {
      start++;
      steps.push({ array: arr.slice(), blue: [start, start2] });
    } else {
      let value = arr[start2];
      let index = start2;

      while (index !== start) {
        arr[index] = arr[index - 1];
        index--;
      }
      arr[start] = value;
      steps.push({ array: arr.slice(), blue: [start, index] });
      start++;
      mid++;
      start2++;
    }
  }
}

function mergeSort(arr, l, r, steps) {
  if (l < r) {
    let m = Math.floor(l + (r - l) / 2);

    mergeSort(arr, l, m, steps);
    mergeSort(arr, m + 1, r, steps);

    merge(arr, l, m, r, steps);
    steps.push({ array: arr.slice(), blue: [l, r] });
  }
}

export const mergeSortWithSteps = (arr, startIdx, endIdx) => {
  const steps = [];
  mergeSort(arr, startIdx, endIdx, steps);

  return steps;
};
