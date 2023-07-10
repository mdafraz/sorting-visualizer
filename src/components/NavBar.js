import { Box, Button, Grid } from "@mui/material";

function NavBar({
  handleMergeSort,
  handleReset,
  handleBubbleSort,
  handleQuickSort,
  handleInsertionSort,
  handleSelectionSort,
}) {
  const handleResetClick = () => {
    handleReset();
  };

  return (
    <Grid
      direction="row"
      justifyContent="center"
      alignItems="flexstart"
      spacing={2}
      container
      minHeight={54}
      style={{ backgroundColor: "black" }}
    >
      <Grid marginRight={60} padding={2}>
        <Button style={{ color: "red" }} onClick={handleResetClick}>
          Reset Button
        </Button>
      </Grid>
      <Grid padding={2}>
        <Button onClick={handleMergeSort}>Merge Sort</Button>
        <Button onClick={handleQuickSort}>Quick Sort</Button>
        <Button onClick={handleInsertionSort}>Insertion Sort</Button>
        <Button onClick={handleBubbleSort}>Bubble Sort</Button>
        <Button onClick={handleSelectionSort}>Selection Sort</Button>
      </Grid>
    </Grid>
  );
}

export default NavBar;
