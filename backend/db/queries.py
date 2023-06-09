GET_ALL_DRIVERS = "SELECT * FROM drivers"

GET_ALL_TEAMS = "SELECT * FROM teams"

GET_A_TEAM = "SELECT * FROM teams WHERE id = %s"

GET_DRIVERS_OF_TEAM = "SELECT * FROM drivers LEFT JOIN teams ON drivers.team = teams.id WHERE teams.id = %s"
