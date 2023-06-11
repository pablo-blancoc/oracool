import uuid
from db.utils import tuple_to_group
from db.postgres import db_cursor
from db.objects import Group
from db import queries


def get_my_groups(user_id: uuid.UUID) -> list[Group]:
    q = queries.GET_MY_GROUPS
    data = (str(user_id), )
    result = None

    with db_cursor() as cur:
        cur.execute(q, data)
        result = cur.fetchall()

    return [tuple_to_group(x) for x in result]


def create_a_group(name: str, description: str, owner: uuid.UUID) -> Group:
    q = queries.CREATE_A_GROUP
    data = (name, description, str(owner))
    result = None

    with db_cursor() as cur:
        cur.execute(q, data)
        result = cur.fetchone()

    group = tuple_to_group(result)

    q = queries.ADD_USER_TO_GROUP
    data = (str(owner), str(group.id))

    with db_cursor() as cur:
        cur.execute(q, data)

    return group
