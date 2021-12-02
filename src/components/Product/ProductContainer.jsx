import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DesktopCategories from "./DesktopCategories";
import MobileCategories from "./MobileCategories";
import ProductList from "./ProductList";

const ProductContainer = () => {
  const theme = useTheme();
  const matchBreakPoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ minHeight: "60vh", mt: -23, mr: 2, ml: 2 }}>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Box
            component="img"
            src="images/products/f1.png"
            sx={{ width: { xs: "100%", lg: "40%" } }}
          />
          <Box sx={{ pl: "10px", mt: { xs: 2, lg: 22 } }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Winter suits 2021
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#ff4081" }}
              variant="h6"
            >
              $50.5
            </Typography>
            <Button variant="outlined" size="medium">
              Add To Cart
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Box
            component="img"
            src="images/products/f2.png"
            sx={{ width: { xs: "100%", lg: "40%" } }}
          />
          <Box sx={{ pl: "10px", mt: { xs: 2, lg: 22 } }}>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              New Styles 2021
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", color: "#ff4081" }}
              variant="h6"
            >
              $105.77
            </Typography>
            <Button variant="outlined" size="medium">
              Add To Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
      {matchBreakPoint ? <MobileCategories /> : <DesktopCategories />}

      {/*  
// another way to render 

      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <DesktopCategories />{" "}
      </Box>
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        <MobileCategories />
      </Box>
*/}
      <ProductList />
    </Box>
  );
};

export default ProductContainer;
