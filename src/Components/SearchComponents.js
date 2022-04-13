import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
const filter = createFilterOptions();

export default function SearchComponents() {
  const [value, setValue] = React.useState(null);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", backgroundColor: "#2596be" }}
    >
      <Grid item xs={5} style={{ color: "black" }}>
        <Typography variant="h2" gutterBottom component="div">
          Search your favourite movie
        </Typography>

        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            // Suggest the creation of a new value
            const isExisting = options.some(
              (option) => inputValue === option.title
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="Search-your-film"
          options={hints}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === "string") {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          freeSolo
          renderInput={(params) => (
            <TextField
              style={{ width: "100%" }}
              {...params}
              label="Search your film"
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

const hints = [{ title: "The Shawshank Redemption", year: 1994 }];
