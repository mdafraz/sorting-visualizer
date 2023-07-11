import { Box } from "@mui/material";
import SortingVisualizer from "./components/SortingVisualizer";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { mergeSortWithSteps } from "./algorithms/MergeSort";
import BubbleSort from "./algorithms/BubbleSort";
import "./app.css";
import QuickSort from "./algorithms/QuickSort";
import InsertionSortWithSteps from "./algorithms/InsertionSort";
import SelectionSortWithSteps from "./algorithms/SelectionSort";

function createRandomArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 350));
  }
  return arr;
}

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  });

  const [Sortarr, setSortarr] = useState({
    array: createRandomArray(70),
  });

  const handleReset = () => {
    setSortarr({
      array: createRandomArray(70),
    });
  };

  const handleMergeSort = () => {
    const steps = mergeSortWithSteps(
      Sortarr.array,
      0,
      Sortarr.array.length - 1
    );
    let i;
    for (i = 0; i < steps.length - 1; i++) {
      const step = steps[i];
      setTimeout(() => {
        setSortarr(step);
      }, i * 45);
    }
  };

  const handleQuickSort = () => {
    const steps = QuickSort(Sortarr.array, 0, Sortarr.array.length - 1);
    let i;
    console.log(steps.length);
    for (i = 0; i < steps.length; i++) {
      const step = steps[i];
      console.log(step.array.join(" "));
      setTimeout(() => {
        setSortarr(step);
      }, i * 60);
    }
  };

  const handleInsertionSort = () => {
    const steps = InsertionSortWithSteps(Sortarr.array);
    for (let i = 0; i < steps.length - 1; i++) {
      let step = steps[i];
      setTimeout(() => {
        setSortarr(step);
      }, i * 10);
    }
  };

  const handleSelectionSort = () => {
    const steps = SelectionSortWithSteps(Sortarr.array);
    console.log(steps);
    for (let i = 0; i < steps.length - 1; i++) {
      const step = steps[i];
      setTimeout(() => {
        setSortarr(step);
      }, i * 50);
    }
  };

  const handleBubbleSort = () => {
    const { steps } = BubbleSort(Sortarr.array);
    let i;

    for (i = 0; i < steps.length - 1; i++) {
      const step = steps[i];
      setTimeout(() => {
        setSortarr(step);
      }, i * 80);
    }
  };

  return (
    <Box
      minHeight={"103vh"}
      sx={{ background: "#212121" }}
      styles={{ scrollY: "hidden" }}
    >
      <NavBar
        handleMergeSort={handleMergeSort}
        handleBubbleSort={handleBubbleSort}
        handleReset={handleReset}
        handleQuickSort={handleQuickSort}
        handleInsertionSort={handleInsertionSort}
        handleSelectionSort={handleSelectionSort}
      />
      <SortingVisualizer Sortarr={Sortarr} />
    </Box>
  );
}

export default App;
