import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  Container,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";


const driver = [
  {
    id: 1,
    car_description: "Description of the car",
    description: 'Description',
    image: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/6col/image.png",
    name: "Red Bull Racing"
  },
  {
    id: 1,
    name: "Checo Perez",
    nationality: 'Mexican',
    description: 'description of the driver',
    team: 'Red Bull',
    image: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/6col/image.png",
    link: ""
  },
  {
    id: 1,
    name: "Checo Perez",
    nationality: 'Mexican',
    description: 'description of the driver',
    team: 'Red Bull',
    image: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/6col/image.png",
    link: ""
  },
];

export default function SimulationPage({ secondaryNavbar }) {



  return (
    <>
      {secondaryNavbar}

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        minHeight="200px"
        sx={{
          background: "black"
        }}
      >

      </Grid>


      <Grid
        container
        alignItems="center"
        minHeight="calc(100vh - 550px)"
        spacing={2}
      >
        {
          driver.map((obj, ind) => (
            <Grid
              key={`${ind}-${obj.title}`}
              item
              xs={12} sm={12} md={6}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="center"
              >
                <Grid
                  item
                  sx={{
                    width: "85%"

                  }}
                >
                  <Grid
                    container
                    direction="row"
                    alignItems="stretch"
                    justifyContent="center"
                    sx={{
                      padding: "4px",
                      borderRadius: "25px"
                    }}
                  >
                    <Grid
                      item
                      sx={{
                        maxWidth: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "30px",
                        borderRadius: "40px",
                        borderTop: '8px solid #000000', // Top border color
                        borderRight: '8px solid #000000', // Right border color
                        borderLeft: 'none', // Hide the left border
                        borderBottom: 'none' // Hide the bottom border
                      }}
                    >
                      <Grid container direction="row" alignItems="center" spacing={2}>
                        <Grid item xs={12}>
                          <img
                            src={obj.image}
                            alt="description of image"
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </Grid>

                        <Grid item xs={12} sx={{ maxWidth: '100%' }}>
                          <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)' }}>
                            {obj.name}
                          </Typography>

                          <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                            {obj.description}
                          </Typography>

                          <Typography variant="body2" marginTop="10px" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                            {obj.car_description}
                          </Typography>

                        </Grid>
                      </Grid>
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
