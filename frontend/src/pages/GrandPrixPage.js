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


// Cambiar a que sean del query
const trackOptions = [
  { id: 1, name: 'Track 1' },
  { id: 2, name: 'Track 2' }
];

const trackDetails = [
  {
    id: 1,
    city: "Mexico city",
    country: 'Mexico',
    description: 'description of the Grand Prix',
    image: "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/6col-retina/image.png",
    length: 5.303,
    name: 'Mexico City Grand Prix'
  },
];

export default function SimulationPage({ secondaryNavbar }) {

  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [results, setResults] = useState([]);

  const handleTrackSelect = (event) => {
    setSelectedTrackId(event.target.value);
  };

  const handlePredictClick = async () => {
    // Reemplazar con query
    const response = await fetch(`http://your-api-url/predict?trackId=${selectedTrackId}`);
    const data = await response.json();
    setResults(data);
  };

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
        <Grid item style={{ zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography
            variant="h4"
            width="70%"
            style={{
              fontWeight: 'bold',
              color: 'rgba(255, 255, 255, 1)', // Adjust the RGB values as desired
              textAlign: 'center'
            }}
          >
            {trackDetails[0].name}
          </Typography>
        </Grid>
      </Grid>


      <Box mt={8} mb={8}>
        <Container>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={3}
          >
            <Grid item>
              <Select
                value={selectedTrackId || ''}
                onChange={handleTrackSelect}
                displayEmpty
                style={{ width: 160, marginRight: '10px' }}
              >

                <MenuItem disabled value="">
                  <em style={{ color: 'lightgray' }}>Select Track</em>
                </MenuItem>

                {trackOptions.map((track) => (
                  <MenuItem key={track.id} value={track.id}>{track.name}</MenuItem>
                ))}
              </Select>
              <Button
                variant="contained"
                color="secondary"
                onClick={handlePredictClick}
                disabled={!selectedTrackId}
                style={{ backgroundColor: selectedTrackId ? 'red' : '', marginLeft: '10px' }}
              >
                Show details
              </Button>

            </Grid>


            <Grid item>

            </Grid>


          </Grid>
        </Container>
      </Box>

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
            maxWidth: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "30px",
            borderRadius: "40px",
            borderTop: '6px solid #d60000', // Top border color
            borderRight: '6px solid #d60000', // Right border color
            borderLeft: 'none', // Hide the left border
            borderBottom: 'none' // Hide the bottom border
          }}
        >
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <img
                src={trackDetails[0].image}
                alt="description of image"
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', maxWidth: '100%' }}>
              <Grid item>
                <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                  City
                </Typography>
                <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)' }}>
                  {trackDetails[0].city}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                  Country
                </Typography>
                <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)' }}>
                  {trackDetails[0].country}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                  Length km
                </Typography>
                <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)' }}>
                  {trackDetails[0].length}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>


      
    </>
  )
}