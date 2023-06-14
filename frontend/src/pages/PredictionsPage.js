import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Container,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import oracoooolAPI from '../api/oracoooolAPI';

// Sample data
const leaderboardData = [
  { id: 1, user: 'User 1', points: 100 },
  { id: 2, user: 'User 2', points: 90 },
  { id: 3, user: "User 3", points: 150 },
  // ...
];

const user = [
  { id: 9, user: 'Current user', points: 90 }
]

// Se tiene que hacer sort de los puntos para el leaderboard
leaderboardData.sort((a, b) => b.points - a.points);

const pilots = [
  { id: 1, name: 'Pilot 1' },
  { id: 2, name: 'Pilot 2' },
  { id: 3, name: 'Pilot 3' },
  { id: 4, name: 'Pilot 4' },
  { id: 5, name: 'Pilot 5' },
];

export default function PredictionsPage({ secondaryNavbar }) {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [results, setResults] = useState([]);

  const [trackOptions, setTrackOptions] = useState(null);

  const handleTrackSelect = (event) => {
    setSelectedTrackId(event.target.value);
  };

  const handlePredictClick = async () => {
    try {
      const response = await oracoooolAPI.get(`/model/${selectedTrackId}`); // make API call
      const rawData = await response.data;
      if (rawData) { // if property was found
        setResults(rawData.prediction)
      } else {
        throw new Error(`Response has no property 'data'`); // raise error explaining property couldn't be found
      }
    } catch (error) {
      console.error(error); // raise error explaining inability to connect to the endpoint 
    }
  };

  const handleMakePredictionClick = async () => {
    // Reemplazar con query de subir datos de prediccion
    const response = await fetch(`http://your-api-url/predict?trackId=${selectedTrackId}`);
    const data = await response.json();
    setResults(data);
  };

  const [selectedPilots, setSelectedPilots] = useState([null, null, null]);

  const handlePilotSelect = (pilotId, index) => {
    let newSelectedPilots = [...selectedPilots];
    newSelectedPilots[index] = pilotId;
    setSelectedPilots(newSelectedPilots);
  };

  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await oracoooolAPI.get("/circuits"); // make API call
        const rawData = await response.data; // extract property
        if (rawData) { // if property was found
          setTrackOptions(rawData["circuits"])
        } else {
          throw new Error(`Response has no property 'data'`); // raise error explaining property couldn't be found
        }
      } catch (error) {
        console.error(error); // raise error explaining inability to connect to the endpoint 
      }
    };

    // Main call:
    const makeRequests = async () => {
      try {
        await Promise.all([ // ensures all the calls are finished before proceeding
          getTracks()
        ]);
      } catch (error) {
        console.error(error); // handle error
      }
    };

    makeRequests(); // make main call
  }, []);

  return (
    <Box

      sx={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://car-images.bauersecure.com/wp-images/3514/indy_aero_050.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      {secondaryNavbar}

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        marginTop: '2rem'
      }}
      >
        <Box sx={{ width: '60%', marginBottom: '2rem' }}>
          <TableContainer component={Paper} style={{ width: '100%' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    Profile
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    Points
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  leaderboardData.length > 0 ?
                    <TableRow key={leaderboardData[0].id}>
                      <TableCell>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel-content"
                            id="panel-header"
                          >
                            <Typography>{leaderboardData[0].user}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>

                            <Container sx={{ marginBottom: '15%' }}>
                              <Grid
                                container
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                spacing={3}
                              >

                                <Grid item>
                                  <Grid item sx={{ marginBottom: '13px' }}>
                                    <Typography variant="h6">
                                      Make new prediction
                                    </Typography>
                                  </Grid>

                                  <Grid item>
                                    <Select
                                      value={selectedTrackId || ''}
                                      disabled={!trackOptions}
                                      onChange={handleTrackSelect}
                                      displayEmpty
                                      style={{ width: 160, marginRight: '10px' }}
                                    >

                                      <MenuItem disabled value="">
                                        <em style={{ color: 'lightgray' }}>
                                          {trackOptions ? "Select Track" : "Loading Tracks"}
                                        </em>
                                      </MenuItem>

                                      {trackOptions && trackOptions.map((track) => (
                                        <MenuItem key={track.id} value={track.id}>{track.name}</MenuItem>
                                      ))}
                                    </Select>
                                    <Button
                                      variant="contained"
                                      color="secondary"
                                      onClick={handleMakePredictionClick}
                                      disabled={!selectedTrackId || selectedPilots.some(pilotId => pilotId == null)}
                                      style={{ backgroundColor: selectedTrackId && !selectedPilots.some(pilotId => pilotId == null) ? 'black' : '', marginLeft: '10px' }}
                                    >
                                      Create prediction
                                    </Button>
                                  </Grid>

                                  <Grid item container spacing={3} direction="column" marginTop={"5px"}>
                                    {selectedPilots && selectedPilots.map((pilotId, index) => (
                                      <Grid item key={index} xs={4} marginTop={"5px"}>
                                        <FormControl fullWidth>
                                          <InputLabel>{`Select pilot for ${index + 1} position`}</InputLabel>
                                          <Select
                                            value={pilotId || ''}
                                            onChange={(e) => handlePilotSelect(e.target.value, index)}
                                          >
                                            {pilots.filter(
                                              (pilot) => !selectedPilots.includes(pilot.id) || pilot.id === pilotId
                                            ).map((pilotOption) => (
                                              <MenuItem key={pilotOption.id} value={pilotOption.id}>
                                                {pilotOption.name}
                                              </MenuItem>
                                            ))}
                                          </Select>
                                        </FormControl>
                                      </Grid>
                                    ))}
                                  </Grid>

                                </Grid>

                              </Grid>
                            </Container>

                            <Container>
                              <Grid
                                container
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                spacing={3}
                              >

                                <Grid item>
                                  <Grid item sx={{ marginBottom: '13px' }}>
                                    <Typography variant="h6">
                                      View past predictions
                                    </Typography>
                                  </Grid>

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

                                      {trackOptions && trackOptions.map((track) => (
                                        <MenuItem key={track.id} value={track.id}>{track.name}</MenuItem>
                                      ))}
                                    </Select>
                                    <Button
                                      variant="contained"
                                      color="secondary"
                                      onClick={handlePredictClick}
                                      disabled={!selectedTrackId}
                                      style={{ backgroundColor: selectedTrackId ? 'black' : '', marginLeft: '10px' }}
                                    >
                                      View prediction
                                    </Button>
                                  </Grid>
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
                                        {results && results.map((row, index) => (
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
                          </AccordionDetails>
                        </Accordion>
                      </TableCell>
                      <TableCell align="right">{leaderboardData[0].points}</TableCell>
                    </TableRow>
                    :
                    <TableRow>
                      <TableCell colSpan={2}>No data available</TableCell>
                    </TableRow>
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>


      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', marginTop: '2rem' }}>
        <Box sx={{ width: '60%', marginBottom: '2rem' }}>
          <TableContainer component={Paper} style={{ width: '100%' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    Leaderboard
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  >
                    Points
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaderboardData && leaderboardData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel-content"
                          id="panel-header"
                        >
                          <Typography>{row.user}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
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

                                  {trackOptions && trackOptions.map((track) => (
                                    <MenuItem key={track.id} value={track.id}>{track.name}</MenuItem>
                                  ))}
                                </Select>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={handlePredictClick}
                                  disabled={!selectedTrackId}
                                  style={{ backgroundColor: selectedTrackId ? 'black' : '', marginLeft: '10px' }}
                                >
                                  View prediction
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
                                      {results && results.map((row, index) => (
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
                        </AccordionDetails>
                      </Accordion>
                    </TableCell>
                    <TableCell align="right">{row.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );

}