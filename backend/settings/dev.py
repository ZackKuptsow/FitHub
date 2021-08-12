from .settings import LOGGING, INSTALLED_APPS, MIDDLEWARE

LOGGING["handlers"]["file"]["backupCount"] = 1

INSTALLED_APPS += ["corsheaders"]
CORS_ORIGIN_ALLOW_ALL = True
MIDDLEWARE.insert(2, "corsheaders.middleware.CorsMiddleware")

# Here we tell Django to allow interacting with our react dev server,
# which will be running on different port and therefore considered as cross origin
