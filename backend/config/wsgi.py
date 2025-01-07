import os
from django.core.wsgi import get_wsgi_application

settings_module = os.getenv('DJANGO_ENV', 'prod')  # Default to 'prod' for production
os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'config.settings.{settings_module}')

application = get_wsgi_application()
