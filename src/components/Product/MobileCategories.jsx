import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const data = [
  { label: "The Shawshank Redemption" },
  { label: "The Godfather" },
  { label: "The Godfather: Part II" },
  { label: "The Dark Knight" },
  { label: "12 Angry Men" },
  { label: "Schindler's List" },
];

const MobileCategories = () => {
  return (
    <Autocomplete
      disablePortal
      options={data}
      sx={{ width: 300, mt: 8, mb: 8 }}
      align="center"
      renderInput={(params) => <TextField {...params} label="categories" />}
    />
  );
};

export default MobileCategories;
