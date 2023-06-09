from db.utils import tuple_to_driver
from db.postgres import db_cursor
from db.objects import Driver
from db import queries


def get_all_drivers() -> list[Driver]:
    q = queries.GET_ALL_DRIVERS
    data = tuple()
    result = None

    with db_cursor() as cur:
        cur.execute(q, data)
        result = cur.fetchall()

    return [tuple_to_driver(x) for x in result]