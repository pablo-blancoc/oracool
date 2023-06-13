import { Box, Grid } from "@mui/material";
import SecondaryNavbar from "../components/SecondaryNavbar";

export default function HomePage() {
  return (
    <>
      <SecondaryNavbar />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        minHeight="350px"
        sx={{
          background: `url(https://upload.wikimedia.org/wikipedia/commons/b/b0/FIA_F1_Austria_2018_Nr._3_Ricciardo.jpg)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          objectFit: 'cover'
        }}
      >
        <Grid item>
          <img src="oracool_logo.svg" width="100%" alt="Oracool Logo"></img>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        minHeight="250px"
        sx={{ backgroundColor: "#242424" }}
      >
        <Grid
          item
          sx={{ color: "white", border: "1px solid magenta" }}
          xs={12} sm={6} md={4}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
          >
            <Grid item sx={{border: "1px solid wheat"}}>
              popo
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ color: "white", border: "1px solid magenta" }}
          xs={12} sm={6} md={4}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
          >
            <Grid item sx={{border: "1px solid wheat"}}>
              popo
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ color: "white", border: "1px solid magenta" }}
          xs={12} sm={6} md={4}
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
          >
            <Grid item sx={{border: "1px solid wheat"}}>
              popo
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
