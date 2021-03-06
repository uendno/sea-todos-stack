import os
from importlib import import_module

basedir = os.path.abspath(os.path.dirname(__file__))
env = os.getenv('ENV', 'local')
config_name = 'main.cfg.' + env

module = import_module(config_name)

config = module.config
config.MIGRATIONS_PATH = os.path.join(basedir, 'migrations')
