import os
from oracooool.app import app as application

if __name__ == "__main__":
    run_debug = bool(int(os.getenv('IS_DEBUG')))
    application.run()