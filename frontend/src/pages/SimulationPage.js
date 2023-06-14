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



export default function SimulationPage({secondaryNavbar}){

  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [results, setResults] = useState([]);

  const handleTrackSelect = (event) => {
    setSelectedTrackId(event.target.value);
  };

  const handlePredictClick = async () => {
    // You would have to replace this with your AJAX request to your backend service.
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
            variant="h5"
            width="70%"
            style={{
              fontWeight: 'bold',
              color: 'rgba(255, 255, 255, 1)', // Adjust the RGB values as desired
              textAlign: 'center'
            }}
          >
            Revolutionizing the Track: Unleashing AI's Unprecedented Power to Predict Formula 1's Victors!
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
                Predict Results
              </Button>

            </Grid>


            <Grid item>
              <TableContainer component={Paper} style={{ minWidth: '340px' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Position</TableCell>
                      <TableCell>Pilot Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {results.map((row, index) => (
                      <TableRow key={row.pilotId}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{row.pilotName}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
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
            borderRadius: "25px",
            border: "2px solid rgba(0, 0, 0, 0.1)"
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            How does Oracle allows you to predict results?
          </Typography>
          <Typography variant="body2">
            Oracle allows you to predict results by leveraging various machine learning models through Oracle Cloud. These models are utilized to analyze data, identify patterns, and make accurate predictions based on the provided information. By leveraging the power of Oracle's cloud infrastructure and machine learning capabilities, users can access advanced prediction functionalities for a wide range of applications and industries.
          </Typography>
          <br />
          <Typography variant="body1" fontWeight="bold">
            How can you create your own scenario?
          </Typography>
          <Typography variant="body2">
            To create your own scenario in a Formula 1 simulator, choose a track, select a pilot, set parameters, simulate the race, and view the prediction. Optional: Customize and iterate.
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            maxWidth: "15%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
            borderRadius: "25px",
            border: "2px solid rgba(0, 0, 0, 0.1)",
            marginLeft: "10px"
          }}
        >
          <img
            src="https://www.thomsonreutersmexico.com/content/dam/ewp-m/images/mexico/powered-by-oracle-cloud-rgb.png.transform/q90/image.png"
            alt="Powered by Oracle cloud image"
            style={{
              maxHeight: "100%",
              maxWidth: "50%",
              objectFit: "contain"
            }}
          />
        </Grid>
      </Grid>
      {/* ...rest of your code */}
    </>
  )
}
