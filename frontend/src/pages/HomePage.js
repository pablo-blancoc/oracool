import { Grid, Typography } from "@mui/material";
import SecondaryNavbar from "../components/SecondaryNavbar";
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: "Learn More",
    imageURL: "https://ausuaebc.com/wp-content/uploads/2021/11/ScaileCar_Dot.jpg.webp",
    navigateTo: "/rules"
  },
  {
    title: "Predict Results",
    imageURL: "https://storage.googleapis.com/afs-prod/media/e5cd8998849449e6956e370c0e22be2b/1000.jpeg",
    navigateTo: "/"
  },
  {
    title: "Simulate",
    imageURL: "https://www.record.com.mx/sites/default/files/styles/v2-crop768x433/public/articulos/2023/01/30/20221118_3228.jpg?itok=zvFAtAKx&changed=20230130195210",
    navigateTo: "/simulation"
  }
]

export default function HomePage({secondaryNavbar}) {
  
  const navigate = useNavigate();

  return (
    <>
      {secondaryNavbar}
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
        spacing={2}
        sx={{ backgroundColor: "#242424" }}
      >
        {
          cards.map((obj, ind) => (
            <Grid
              key={`${ind}-${obj.title}`}
              item
              sx={{
                color: "white"
              }}
              xs={12} sm={6} md={4}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="center"
              >
                <Grid
                  item
                  sx={{ width: "80%" }}
                >
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      height: "200px",
                      borderRadius: "50px",
                      boxShadow: "inset 0px 0px 14px 4px rgba(245, 245, 245, 0.5), inset 0px -3px 6px",
                      "&:hover": {
                        cursor: "pointer"
                      },
                      background: `url(${obj.imageURL})`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      objectFit: 'cover'
                    }}
                    onClick={() => (navigate(obj.navigateTo))}
                  >
                    <Grid item>
                      <Typography variant="h5" fontWeight="bold">
                        {obj.title}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}
