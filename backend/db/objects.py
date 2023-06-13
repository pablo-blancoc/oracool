from typing import Any, Union
import uuid

class Driver:

    num_attrs = 7

    def __init__(self):
        self.id: uuid.UUID = None
        self.name: str = None
        self.team: Union[uuid.UUID, Team] = None
        self.nationality: str = None
        self.description: str = None
        self.image: str = None
        self.link: str = None

    def d(self) -> dict:
        return {
            "id": self.id.hex,
            "name": self.name,
            "team": self.team.hex if isinstance(self.team, uuid.UUID) else self.team.d(),
            "nationality": self.nationality,
            "description": self.description,
            "image": self.image,
            "link": self.link,
        }


class Team:

    num_attrs = 6

    def __init__(self):
        self.id: uuid.UUID = None
        self.name: str = None
        self.description: str = None
        self.car_description: str = None
        self.image: str = None

    def d(self) -> dict:
        return {
            "id": self.id.hex,
            "name": self.name,
            "description": self.description,
            "car_description": self.car_description,
            "image": self.image,
        }


class Group:

    num_attrs = 4

    def __init__(self):
        self.id: uuid.UUID = None
        self.name: str = None
        self.description: str = None
        self.owner: Union[uuid.UUID, User] = None

    def d(self) -> dict:
        return {
            "id": self.id.hex,
            "name": self.name,
            "description": self.description,
            "owner": self.owner.d() if isinstance(self.owner, User) else self.owner.hex,
        }


class User:

    num_attrs = 7

    def __init__(self):
        self.id: uuid.UUID = None
        self.name: str = None
        self.username: str = None
        self.password: str = None
        self.profile_picture: Any = None
        self.bio: str = None
        self.points: int = 0

    def d(self) -> dict:
        return {
            "id": self.id.hex,
            "name": self.name,
            "username": self.username,
            "bio": self.bio,
            "points": self.points,
        }


class Circuit:

    num_attrs = 7

    def __init__(self):
        self.id: uuid.UUID = None
        self.name: str = None
        self.description: str = None
        self.country: str = None
        self.city: str = None
        self.image: str = None
        self.length: float = None

    def d(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "country": self.country,
            "city": self.city,
            "image": self.image,
            "length": self.length,
        }