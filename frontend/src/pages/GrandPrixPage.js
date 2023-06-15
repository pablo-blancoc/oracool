import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Button,
  Container,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

export default function SimulationPage({ secondaryNavbar }) {
  const [selectedTrackId, setSelectedTrackId] = useState('');
  const [trackOptions, setTrackOptions] = useState([]);
  const [trackDetails, setTrackDetails] = useState({});

  useEffect(() => {
    async function fetchCircuits() {
      try {
        const response = await fetch('http://0.0.0.0:5001/circuits');
        if (response.ok) {
          const data = await response.json();
          const circuits = data.circuits || [];
          setTrackOptions(circuits);
        } else {
          console.error('Error fetching circuits:', response.status);
        }
      } catch (error) {
        console.error('Error fetching circuits:', error);
      }
    }

    fetchCircuits();
  }, []);

  const handleTrackSelect = (event) => {
    setSelectedTrackId(event.target.value);
    const selectedTrack = trackOptions.find((track) => track.id === event.target.value);
    setTrackDetails(selectedTrack);
  };

  const handlePredictClick = async () => {
    if (selectedTrackId) {
      // Perform the desired action with the selected track
    }
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
              color: 'rgba(255, 255, 255, 1)',
              textAlign: 'center'
            }}
          >
            {trackDetails.name}
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
                value={selectedTrackId}
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
            borderTop: '8px solid #d60000',
            borderRight: '8px solid #d60000',
            borderLeft: 'none',
            borderBottom: 'none'
          }}
        >
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <img
                src={trackDetails.image}
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
                  {trackDetails.country}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                  Country
                </Typography>
                <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)' }}>
                  {trackDetails.city}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                  Length km
                </Typography>
                <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)' }}>
                  {trackDetails.length}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
