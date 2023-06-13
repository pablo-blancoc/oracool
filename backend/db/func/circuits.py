from db.utils import tuple_to_circuit
from db.postgres import db_cursor
from db.objects import Circuit
from db import queries

def get_all_circuits() -> list[Circuit]:
    try:
        q = queries.GET_ALL_CIRCUITS
        data = tuple()
        results = None

        with db_cursor() as cur:
            cur.execute(q, data)
            results = cur.fetchall()

        return [tuple_to_circuit(result) for result in results]
    
    except Exception as err:
        print(err)
        return []