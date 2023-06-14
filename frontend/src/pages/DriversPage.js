import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Container,
} from "@mui/material";

function DriverList() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    async function fetchDrivers() {
      try {
        const response = await fetch('http://0.0.0.0:5001/drivers');
        if (response.ok) {
          const data = await response.json();
          const driversWithTeams = await Promise.all(
            data.drivers.map(async (driver) => {
              const teamResponse = await fetch(`http://0.0.0.0:5001/teams/${driver.team}`);
              if (teamResponse.ok) {
                const teamData = await teamResponse.json();
                driver.team = teamData.team;
              } else {
                console.error('Error fetching team:', teamResponse.stat);
              }
              return driver;
            })
          );
          setDrivers(driversWithTeams);
        } else {
          console.error('Error fetching drivers:', response.status);
        }
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }
    }

    fetchDrivers();
  }, []);

  return (
    <>
      <Grid
        container
        alignItems="center"
        minHeight="calc(100vh - 550px)"
        spacing={2}
      >
        {drivers.map((driver, index) => (
          <Grid
            key={`${index}-${driver.name}`}
            item
            xs={12}
            sm={6}
            md={3}
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
                      borderTop: '8px solid #d60000',
                      borderRight: '8px solid #d60000',
                      borderLeft: 'none',
                      borderBottom: 'none'
                    }}
                  >
                    <Grid container direction="row" alignItems="center" spacing={2}>
                      <Grid item xs={12}>
                        <img
                          src={driver.image}
                          alt="description of image"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Grid>

                      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around', maxWidth: '100%' }}>
                        <Grid item xs={12} md={4}>
                          <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                            Name
                          </Typography>
                          <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)' }}>
                            {driver.name}
                          </Typography>
                        </Grid>

                        <Grid item xs={12} md={4}>
                          <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                            Nationality
                          </Typography>
                          <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)' }}>
                            {driver.nationality}
                          </Typography>
                        </Grid>

                        <Grid item xs={12} md={4}>
                          <Typography variant="body2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>
                            Team
                          </Typography>
                          <Typography variant="body1" gutterBottom style={{ fontWeight: 'bold', color: 'rgba(0, 0, 0, 1)' }}>
                            {driver.team ? driver.team.name : 'Unknown'}
                          </Typography>
                        </Grid>
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
      />

      <DriverList />
    </>
  );
}
