import { Grid, Paper, Typography } from "@mui/material";
import SecondaryNavbar from "../components/SecondaryNavbar";

const data2 = [
  { title: 'Basics', text: 'Formula 1, often abbreviated as F1, is the highest class of international auto racing sanctioned by the Fédération Internationale de l\'Automobile (FIA). F1 seasons consist of a series of races, known as Grands Prix, held worldwide on both public roads and specialized circuits. The results of each race are evaluated using a points system to determine two annual World Championships: one for drivers and one for constructors (teams).', image: 'https://www.formula1.com/content/dam/fom-website/sutton/2020/Portugal/Sunday/1282134941.jpg.transform/6col/image.jpg' },
  { title: 'Race Weekend Format', text: 'An F1 weekend typically includes practice sessions, qualifying, and the race. Practice sessions allow drivers to familiarize themselves with the circuit and test different car setups. The qualifying session decides the starting grid for the race. The main race usually occurs on Sunday and is the primary contest where championship points are scored.', image: 'https://www.formula1.com/content/dam/fom-website/Upgrade/Misc/Ey2I7YTWEAEXdrJ.jpg.transform/6col/image.jpg' },
  // ... add as many rules as needed
];

const data = [
  {
    title: 'Basics',
    text: 'Formula 1, often abbreviated as F1, is the highest class of international auto racing sanctioned by the Fédération Internationale de l\'Automobile (FIA). F1 seasons consist of a series of races, known as Grands Prix, held worldwide on both public roads and specialized circuits. The results of each race are evaluated using a points system to determine two annual World Championships: one for drivers and one for constructors (teams).',
    image: 'https://www.formula1.com/content/dam/fom-website/sutton/2020/Portugal/Sunday/1282134941.jpg.transform/6col/image.jpg'
  },
  {
    title: 'Race Weekend Format',
    text: 'An F1 weekend typically includes practice sessions, qualifying, and the race. Practice sessions allow drivers to familiarize themselves with the circuit and test different car setups. The qualifying session decides the starting grid for the race. The main race usually occurs on Sunday and is the primary contest where championship points are scored.',
    image: 'https://www.formula1.com/content/dam/fom-website/Upgrade/Misc/Ey2I7YTWEAEXdrJ.jpg.transform/6col/image.jpg'
  },
  {
    title: 'Points System',
    text: 'Points are awarded to drivers and teams based on their finishing positions in the race. As of 2023, the top ten finishers score points (25, 18, 15, 12, 10, 8, 6, 4, 2, 1), with the first-place finisher receiving the most. Also, the driver who sets the fastest lap during the race receives an additional point, provided they finish within the top ten.',
    image: 'https://pbs.twimg.com/media/Cd8BYc6UEAA__ea.jpg'
  },
  {
    title: 'Car Specifications',
    text: 'F1 cars are unique open-wheel cars with hybrid power systems, combining internal combustion engines with energy recovery systems. The FIA sets specific regulations regarding the car\'s weight, dimensions, and safety features. These regulations change over the years to enhance competition, safety, and sustainability.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/solvay-f1-1665770667.png'
  },
  {
    title: 'Tyres',
    text: 'Tyre strategy plays a crucial role in F1. Currently, the official tyre supplier is Pirelli, providing teams with three dry-weather compounds (soft, medium, hard), one intermediate, and one full wet tyre. The teams have to use at least two different types of tyres during a dry race, making pit stop strategy a critical element.',
    image: 'https://www.racefans.net/wp-content/uploads/2019/02/racefansdotnet-pirellityres2019testing.jpg'
  },
  {
    title: 'Safety',
    text: 'Safety is paramount in F1, with the introduction of various safety measures over the years. These include the HANS device, the Halo cockpit protection system, and stringent crash testing for cars.',
    image: 'https://i.ytimg.com/vi/3-3gIAkYEX8/maxresdefault.jpg'
  },
  {
    title: 'Penalties',
    text: 'Drivers can receive penalties for various infractions, like causing collisions, speeding in the pit lane, or ignoring yellow flags. Penalties may range from time penalties added to a driver\'s race time, grid penalties for the next race, or even disqualification.',
    image: 'https://storage.googleapis.com/the-race-com.appspot.com/1/2023/04/XPB_1198874_HiRes.jpg'
  }
];

const navbarItems = [
  {
    title: "Overview",
    navigateTo: "/rules"
  },
  {
    title: "Grand Prix",
    navigateTo: ""
  },
  {
    title: "Drivers",
    navigateTo: "/drivers"
  },
  {
    title: "Teams",
    navigateTo: "/teams"
  },
  {
    title: "Historical Data",
    navigateTo: "/historicalData"
  }

]

export default function RulesPage() {
  return (
    <>
      <SecondaryNavbar listItems={navbarItems}/>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        minHeight="350px"
        sx={{
          background: `url(https://rare-gallery.com/thumbs/901943-hexagon-3D-Abstract-grid-abstract-digital-art-texture.png)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          objectFit: 'cover'
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
            Unleash the power of speed and strategy with a deep dive into the captivating rules of Formula 1!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{
          padding: "4px"
        }}
      >
        {data.map((rowObject, index) => (
          <Grid item key={rowObject.text}>
            <Grid
              container
              direction={index % 2 === 0 ? "row-reverse" : "row"} // Inverts layout for even index items
              justifyContent="center"
              // alignItems="center"
              sx={{
                padding: "15px"
              }}
            >
              <Grid
                item
                sx={{
                  height: "100%",
                  maxWidth: "35%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={rowObject.image}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain"
                  }}
                />
              </Grid>
              <Grid
                item
                sx={{
                  maxWidth: "40%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "30px"
                }}
              >
                <Typography variant="h3" fontWeight="bold" sx={{ marginBottom: "10px" }}>
                  {rowObject.title}
                </Typography>
                <Typography variant="body1">
                  {rowObject.text}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        minHeight="350px"
        marginTop="50px"
        sx={{
          position: 'relative',
          background: `url(https://upload.wikimedia.org/wikipedia/commons/b/b0/FIA_F1_Austria_2018_Nr._3_Ricciardo.jpg)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          objectFit: 'cover'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}
        />

        <Grid item style={{ zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography
            variant="body1"
            width="40%"
            style={{
              fontWeight: 'bold',
              color: 'rgba(200, 200, 200, 1)', // Adjust the RGB values as desired
              textAlign: 'center'
            }}
          >
            As you dive deeper into the world of Formula 1, don't forget you can utilize our chatbot for further inquiries regarding F1 rules, teams, and drivers. Enjoy the adrenaline-packed sport!
          </Typography>
        </Grid>
      </Grid>
    </>

  );
}