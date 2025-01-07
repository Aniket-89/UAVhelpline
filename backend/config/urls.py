from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import global_settings as settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('froala_editor/', include('froala_editor.urls')),
    path('api/v1/', include('blog.urls'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)