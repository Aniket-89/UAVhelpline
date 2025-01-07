from django.urls import path
from .views import BlogListAPIView, BlogRetrieveAPIView


app_name = 'blog'

urlpatterns = [
    path('blogs/', BlogListAPIView.as_view(), name='blog-list'),
    path('blogs/<str:pk>', BlogRetrieveAPIView.as_view(), name='blog-detail')
]