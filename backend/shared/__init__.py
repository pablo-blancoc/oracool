import traceback


def format_exception(exception: Exception) -> str:
    return "\n".join(traceback.format_exception(type(exception), exception, exception.__traceback__))