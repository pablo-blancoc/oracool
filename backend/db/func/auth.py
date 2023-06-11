from db.postgres import db_cursor
from db.objects import User
from db import queries
from db.utils import tuple_to_user
from passlib.hash import pbkdf2_sha256


def create_an_account(name: str, username: str, password: str) -> User:
    pwd = pbkdf2_sha256.hash(secret=password)

    q = queries.CREATE_AN_ACCOUNT
    data = (name, username, pwd)
    result = None

    with db_cursor() as cur:
        cur.execute(q, data)
        result = cur.fetchone()

    return tuple_to_user(result)


def get_user_by_username(username: str) -> User:
    q = queries.GET_USER_BY_USERNAME
    data = (username, )
    result = None

    with db_cursor() as cur:
        cur.execute(q, data)
        result = cur.fetchone()

    return tuple_to_user(result)
