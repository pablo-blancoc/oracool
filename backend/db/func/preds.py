import json
from typing import Union
import uuid
from db.objects import Prediction
from db.utils import tuple_to_prediction
from db.postgres import db_cursor
from db import queries

from db.func.model import predict


def create_prediction(user_id: uuid.UUID, circuit_id: uuid.UUID, preds: list[dict[str, Union[int, str]]]) -> None:

    model = predict(circuit=circuit_id)
    points = 0
    for x in model:
        for y in preds:
            if int(x.prediction) == int(y.get("position", 0)) and str(x.driver.id.hex) == str(y.get("driver", "")):
                points += 10

    try:
        q = queries.SAVE_PREDS
        data = (str(user_id), str(circuit_id), json.dumps(preds))

        with db_cursor() as cur:
            cur.execute(q, data)

        # update points
        if points > 0:
            q = queries.UPDATE_USER_POINTS
            data = (int(points), str(user_id))

            with db_cursor() as cur:
                cur.execute(q, data)

        return
    
    except Exception as err:
        print(err)
        return


def get_prediction(user_id: uuid.UUID, circuit_id: uuid.UUID) -> Prediction:
    try:
        q = queries.GET_PREDICTION_FROM_USER
        data = (str(user_id), str(circuit_id))
        result = None

        with db_cursor() as cur:
            cur.execute(q, data)
            result = cur.fetchone()

        print(result)

        return tuple_to_prediction(result)
    
    except Exception as err:
        print(err)
        return
