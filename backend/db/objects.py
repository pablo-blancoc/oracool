from typing import Any, Union
import uuid

class Driver:

    num_attrs = 6

    def __init__(self):
        self.id: uuid.UUID = None
        self.name: str = None
        self.team: Union[uuid.UUID, Team] = None
        self.nationality: str = None
        self.description: str = None
        self.image: Any = None

    def d(self) -> dict:
        return {
            "id": self.id.hex,
            "name": self.name,
            "team": self.team.hex if isinstance(self.team, uuid.UUID) else self.team.d(),
            "nationality": self.nationality,
            "description": self.description,
            "image": self.image,
        }


class Team:

    num_attrs = 6

    def __init__(self):
        self.id: uuid.UUID = None
        self.name: str = None
        self.description: str = None
        self.car_description: str = None
        self.image: Any = None

    def d(self) -> dict:
        return {
            "id": self.id.hex,
            "name": self.name,
            "description": self.description,
            "car_description": self.car_description,
            "image": self.image,
        }