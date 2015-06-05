import os
# from test.integration.agent_test_helper import register_agent
#
# config_file = os.path.join(os.path.dirname(__file__), 'config/blueware.ini')
# register_agent(config_file)
import time
from flask import Flask

app = Flask(__name__)


class NetworkInterfaceException(Exception):
    pass


@app.route('/')
def index():
    # import sys
    # import traceback
    # traceback.print_stack(file=sys.stdout)
    time.sleep(0.05)
    return 'Hello World'


@app.route('/error')
def error():
    raise NetworkInterfaceException('Error')


@app.route('/users')
def get_user_list():
    return 'List users.'


@app.route('/user', methods=['GET', 'POST'])
def create_user():
    return 'Create user.'


@app.route('/user/<id>')
def get_user(id):
    return 'Show user.'


@app.route('/user/<id>', methods=['PUT'])
def update_user(id):
    return 'Update user.'


@app.route('/user/<id>', methods=['DELETE'])
def delete_user(id):
    return 'Delete user.'


@app.route('/user/rename')
def rename_user():
    blueware.agent.set_transaction_name('RenamedTxn')
    return 'Rename user.'


if __name__ == '__main__':
    app.run()
