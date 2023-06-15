import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Container,
} from "@mui/material";

export default function SimulationPage({ secondaryNavbar }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await fetch('http://0.0.0.0:5001/teams');
        if (response.ok) {
          const data = await response.json();
          setTeams(data.teams);
        } else {
          console.error('Error fetching teams:', response.status);
        }
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    }

    fetchTeams();
  }, []);

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
      />

      <Grid
        container
        alignItems="center"
        minHeight="calc(100vh - 550px)"
        spacing={2}
      >
        {teams.map((team, index) => (
          <Grid
            key={`${index}-${team.name}`}
            item
            xs={12}
            sm={12}
            md={6}
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
                      borderTop: '8px solid #000000',
                      borderRight: '8px solid #000000',
                      borderLeft: 'none',
                      borderBottom: 'none'
                    }}
                  >
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item xs={12}>
                        <img
                          src={team.image}
                          alt="description of image"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Grid>

                      <Grid item xs={12} sx={{ maxWidth: '100%' }}>
                        <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)' }}>
                          {team.name}
                        </Typography>

                        <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                          {team.description}
                        </Typography>

                        <Typography variant="body2" marginTop="10px" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                          {team.car_description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
