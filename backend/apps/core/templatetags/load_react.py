from django import template
from django.conf import settings
from django.utils.safestring import mark_safe

register = template.Library()

"""
Alternative for django-webpack-loader
"""


@register.simple_tag
def load_react():
    """
    Loads all necessary files from React

    Returns:
        html: mark_safe ensures the preloaded is not changed by django
    """
    css = load_css()
    js = load_js()
    return mark_safe("".join(css + js))


def load_css():
    """
    Loads all css files from static dir

    Returns:
        css: all css files needed
    """
    return [
        '<link rel="stylesheet" href="/static/{}" />'.format(asset)
        for asset in load_files(".css")
    ]


def load_js():
    """
    Loads all js files from static dir

    Returns:
        js: all js files needed
    """
    return [
        '<script type="text/javascript" src="/static/{}"></script>'.format(asset)
        for asset in load_files(".js")
    ]


def load_files(extension: str):
    """
    Load files from static dir based on extension

    Args:
        extension (str): file type in static dir

    Returns:
        files: all files matching extension provided
    """
    files = []
    for path in settings.STATICFILES_DIRS:
        for file_name in path.iterdir():
            if file_name.name.endswith(extension):
                files.append(file_name.name)
    return files
