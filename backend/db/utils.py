from shared import format_exception
from db.objects import (
    Driver,
    Team,
    Group,
    User,
    Circuit,
    NextResult,
)
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
        driver.image = str(data[5])
        driver.link = str(data[6])

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
        team.image = str(data[4])

    except Exception as err:
        print(format_exception(err))
        return None

    return team


def tuple_to_group(data: tuple) -> Group:
    if data is None:
        return None

    try:
        if data[0] is None:
            return None

        group = Group()
        group.id = uuid.UUID(data[0])
        group.name = str(data[1])
        group.description = str(data[2])
        group.owner = uuid.UUID(data[3])

    except Exception as err:
        print(format_exception(err))
        return None

    return group


def tuple_to_user(data: tuple) -> User:
    if data is None:
        return None

    try:
        if data[0] is None:
            return None

        user = User()
        user.id = uuid.UUID(data[0])
        user.name = str(data[1])
        user.username = str(data[2])
        user.password = str(data[3])
        user.bio = str(data[5])
        user.points = int(data[6])

    except Exception as err:
        print(format_exception(err))
        return None

    return user


def tuple_to_circuit(data: tuple) -> Circuit:
    if data is None:
        return None

    try:
        if data[0] is None:
            return None

        circuit = Circuit()
        circuit.id = uuid.UUID(data[0])
        circuit.name = str(data[1])
        circuit.description = str(data[2])
        circuit.country = str(data[3])
        circuit.city = str(data[4])
        circuit.image = str(data[5])
        circuit.length = float(data[6])

    except Exception as err:
        print(format_exception(err))
        return None

    return circuit


def tuple_to_next_result(data: tuple) -> NextResult:
    if data is None:
        return None

    try:
        if data[0] is None:
            return None

        next_result = NextResult()
        next_result.circuit = uuid.UUID(data[0])
        next_result.driver = uuid.UUID(data[1])
        next_result.prediction = int(data[2])

    except Exception as err:
        print(format_exception(err))
        return None

    return next_result
