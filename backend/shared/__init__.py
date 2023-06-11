import traceback
import uuid


def format_exception(exception: Exception) -> str:
    return "\n".join(traceback.format_exception(type(exception), exception, exception.__traceback__))

def parse_uuid(t: str) -> uuid.UUID:
    if t is not None:
        try:
            return uuid.UUID(t)
        except TypeError:
            raise ValueError()

    raise ValueError()

class UniqueDBError(Exception):
    def __init__(self, msg):
        self.message = msg
        super().__init__(self.message)

