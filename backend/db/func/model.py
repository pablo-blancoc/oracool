from db.utils import tuple_to_next_result, tuple_to_driver
from db.postgres import db_cursor
from db.objects import NextResult
from db import queries
import uuid


def predict(circuit: uuid.UUID) -> list[NextResult]:
    q = queries.PREDICT_CIRCUIT
    data = (str(circuit), )
    results = None
    preds = list()

    with db_cursor() as cur:
        cur.execute(q, data)
        results = cur.fetchall()

    for result in results:
        pred = tuple_to_next_result(result[:NextResult.num_attrs])
        pred.driver = tuple_to_driver(result[NextResult.num_attrs:])
        preds.append(pred)
    
    return preds