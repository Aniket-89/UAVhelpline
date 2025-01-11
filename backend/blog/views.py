from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import SearchFilter
# from rest_framework_api_key.permissions import HasAPIKey
from .serializers import BlogSerializer
from .models import Blog


class BlogListAPIView(ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter,)
    search_fields = ['title', 'brief']
    # authentication_classes = [HasAPIKey]
    # permission_classes = [HasAPIKey]


class BlogRetrieveAPIView(RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    # authentication_classes = [HasAPIKey]
    # permission_classes = [HasAPIKey]

