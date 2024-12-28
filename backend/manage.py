import os
import sys

if __name__ == '__main__':
    # Default to 'dev' settings if no environment variable is set
    settings_module = os.getenv('DJANGO_ENV', 'dev')
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'config.settings.{settings_module}')

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
