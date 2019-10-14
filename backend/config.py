class Config(object):
    DEBUG = False
    TESTING = False
    SECRET_KEY = 'kyhjfhjbrfbhjbfh'
    MONGO_URI = 'mongodb+srv://dbUser:dbUser123@aryalecannon-uobyl.mongodb.net/aryalecannon?retryWrites=true&w=majority'
    SESSION_COOKIE_SECURE = True


class ProductionConfig(Config):
    MONGO_URI = ''

class DevelopmentConfig(Config):
    DEBUG = True
    SESSION_COOKIE_SECURE = False

class TestingConfig(Config):
    TESTING = True
    SESSION_COOKIE_SECURE = False