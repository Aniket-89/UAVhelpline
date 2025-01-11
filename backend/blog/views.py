from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework_api_key.permissions import HasAPIKey
from .serializers import BlogSerializer
from .models import Blog


class BlogListAPIView(ListAPIView):
    permission_classes = [HasAPIKey]
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class BlogRetrieveAPIView(RetrieveAPIView):
    permission_classes = [HasAPIKey]
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
