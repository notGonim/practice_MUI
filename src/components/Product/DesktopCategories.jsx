import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const DesktopCategories = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ border: "1px solid #e0e0e0", mt: 8, mb: 4}}
    >
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/babysitter.png" />
        <Typography variant="h6">Babysitter</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/barley.png" />
        <Typography variant="h6">barley</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/cinema.png" />
        <Typography variant="h6">cinema</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/concert.png" />
        <Typography variant="h6">concert</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/fitness.png" />
        <Typography variant="h6">fitness</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/hanger.png" />
        <Typography variant="h6">hanger</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/nuclear.png" />
        <Typography variant="h6">nuclear</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/observation.png" />
        <Typography variant="h6">observation</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/pets.png" />
        <Typography variant="h6">pets</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/powerstation.png" />
        <Typography variant="h6">powerstation</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/restaraunt.png" />
        <Typography variant="h6">restaraunt</Typography>
      </Grid>
      <Grid
        item
        md={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box component="img" src="images/categories/ship.png" />
        <Typography variant="h6">ship</Typography>
      </Grid>
    </Grid>
  );
};

export default DesktopCategories;
