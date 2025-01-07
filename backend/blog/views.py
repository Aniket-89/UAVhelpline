from django.shortcuts import render
from .models import Blog


# Create your views here.
def index_view(request):
    blog = Blog.objects.get(pk=1)

    return render(request, 'blog/home.html', context={'blog': blog})