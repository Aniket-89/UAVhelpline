from django.urls import path
from . import views
app_name = 'blog'

urlpatterns = [
    path('blogs/', views.blog_list_view, name='blog-list'),
    path('blogs/<str:pk>', views.blog_detail_view, name='blog-detail')
]