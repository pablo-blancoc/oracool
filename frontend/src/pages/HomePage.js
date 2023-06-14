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
    imageURL: "https://cnnespanol.cnn.com/wp-content/uploads/2022/05/GettyImages-1399930547-e1653842365454.jpg?quality=100&strip=info",
    navigateTo: "/simulation"
  }
]

export default function HomePage({ secondaryNavbar }) {

  const navigate = useNavigate();

  return (
    <>
      {secondaryNavbar}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        minHeight="475px"
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
        minHeight="calc(100vh - 550px)"
        spacing={2}
        sx={{ backgroundColor: "#18141c" }}
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
                  sx={{
                    width: "87%"

                  }}
                >
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      height: "200px",
                      borderRadius: "10px",
                      boxShadow: "inset 0px 0px 14px 4px rgba(200, 0, 7, 0.8), inset 0px -3px 6px rgba(200, 0, 7, 0.1)",
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
                      <Typography variant="body1" style={{ fontSize: '28px' }} fontWeight="bold">
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
