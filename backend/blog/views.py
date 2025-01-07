from django.shortcuts import render
from .models import Blog


# Create your views here.
def blog_list_view(request):
    blog = Blog.objects.get(pk=1)

    return render(request, 'blog/home.html', context={'blog': blog})


def blog_detail_view(request):

    return render(request, 'blog/home.html', context={})