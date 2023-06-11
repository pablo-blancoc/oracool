import os
from contextlib import contextmanager

import psycopg2.pool
from dotenv import load_dotenv
from psycopg2 import extensions

from shared import UniqueDBError

load_dotenv()

# DATABASE CREDENTIALS
HOST = os.getenv("DB_HOST")
DATABASE = os.getenv("DB_NAME")
USERNAME = os.getenv("DB_USER")
PASSWORD = os.getenv("DB_PASSWORD")
PORT = os.getenv("DB_PORT")

dbpool = psycopg2.pool.ThreadedConnectionPool(
    minconn=1,
    maxconn=8,
    host=HOST,
    port=PORT,
    dbname=DATABASE,
    user=USERNAME,
    password=PASSWORD,
)


@contextmanager
def db_cursor() -> extensions.cursor:
    """
    More information: https://stackoverflow.com/questions/74511042/one-connection-to-db-for-app-or-a-connection-on-every-execution
    """
    conn = dbpool.getconn()
    try:
        with conn.cursor() as cur:
            yield cur
            conn.commit()

    except psycopg2.Error as e:
        conn.rollback()

        # unique constraint violation
        if e.pgcode == "23505":
            raise UniqueDBError(e.diag.message_primary)
        else:
            raise Exception(e.pgcode)

        raise Exception(e.pgcode)

    finally:
        dbpool.putconn(conn)