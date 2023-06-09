from shared import format_exception
from db.objects import Driver, Team
import uuid


def tuple_to_driver(data: tuple) -> Driver:
    if data is None:
        return None

    try:
        if data[0] is None:
            return None

        driver = Driver()
        driver.id = uuid.UUID(data[0])
        driver.name = str(data[1])
        driver.team = uuid.UUID(data[2])
        driver.nationality = str(data[3])
        driver.description = str(data[4])
        driver.image = data[5]

    except Exception as err:
        print(format_exception(err))
        return None

    return driver


def tuple_to_team(data: tuple) -> Team:
    if data is None:
        return None

    try:
        if data[0] is None:
            return None

        team = Team()
        team.id = uuid.UUID(data[0])
        team.name = str(data[1])
        team.description = str(data[2])
        team.car_description = str(data[3])
        team.image = data[4]

    except Exception as err:
        print(format_exception(err))
        return None

    return team
