import uuid
from db.utils import tuple_to_group, tuple_to_user
from db.postgres import db_cursor
from db.objects import Group, User
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


def join_group(user_id: uuid.UUID, group_id: uuid.UUID) -> bool:
    try:
        q = queries.ADD_USER_TO_GROUP
        data = (str(user_id), str(group_id))
        result = None

        with db_cursor() as cur:
            cur.execute(q, data)
            result = cur.fetchone()

        return (result is not None)
    
    except Exception as err:
        print(err)
        return False


def remove_group(user_id: uuid.UUID, group_id: uuid.UUID) -> bool:
    try:
        q = queries.REMOVE_USER_FROM_GROUP
        data = (str(user_id), str(group_id))

        with db_cursor() as cur:
            cur.execute(q, data)

        return True
    
    except Exception as err:
        print(err)
        return False


def get_all_users_from_group(group_id: uuid.UUID) -> list[User]:
    try:
        q = queries.GET_ALL_USERS_FROM_GROUP
        data = (str(group_id), )
        results = None

        with db_cursor() as cur:
            cur.execute(q, data)
            results = cur.fetchall()

        return [tuple_to_user(result) for result in results]
    
    except Exception as err:
        print(err)
        return []


def get_all_users() -> list[User]:
    try:
        q = queries.GET_ALL_USERS_ORDERED_BY_POINTS
        data = tuple()
        results = None

        with db_cursor() as cur:
            cur.execute(q, data)
            results = cur.fetchall()

        return [tuple_to_user(result) for result in results]
    
    except Exception as err:
        print(err)
        return []

