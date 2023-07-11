import Box from "@mui/material/Box";

function SortingVisualizer({ Sortarr }) {
  const { array: arr, blue, pivot, orange } = Sortarr;

  return (
    <Box
      pt={25}
      display={"flex"}
      sx={{ justifyContent: "center", alignItems: "flex-end" }}
    >
      {arr.map((h, idx) => (
        <Box
          width={7}
          mx={0.15}
          height={h}
          sx={{
            background: orange?.includes(idx)
              ? "#F05454"
              : pivot?.includes(idx)
              ? "#F05454"
              : !blue?.includes(idx)
              ? "#A7D2CB"
              : "#554994",
          }}
        />
      ))}
    </Box>
  );
}

export default SortingVisualizer;

// {
//   Sortarr[0].array.map((h) => (
//     <Box width={7} height={h} sx={{ background: "red" }} />
//   ));
// }
