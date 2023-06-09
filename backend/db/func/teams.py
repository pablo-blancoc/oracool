from db.utils import tuple_to_team, tuple_to_driver
from db.postgres import db_cursor
from db.objects import Team, Driver
from db import queries
import uuid


def get_all_teams() -> list[Team]:
    q = queries.GET_ALL_TEAMS
    data = tuple()
    result = None

    with db_cursor() as cur:
        cur.execute(q, data)
        result = cur.fetchall()

    return [tuple_to_team(x) for x in result]


def get_a_team(team_id: uuid.UUID) -> Team:
    q = queries.GET_A_TEAM
    data = (str(team_id), )
    result = None

    with db_cursor() as cur:
        cur.execute(q, data)
        result = cur.fetchone()

    return tuple_to_team(result)


def get_drivers_of_team(team_id: uuid.UUID) -> list[Driver]:
    q = queries.GET_DRIVERS_OF_TEAM
    data = (str(team_id), )
    result = None

    with db_cursor() as cur:
        cur.execute(q, data)
        result = cur.fetchall()

    return [tuple_to_driver(x) for x in result]
