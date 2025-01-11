from django.db import models
from django.utils.text import slugify
from froala_editor.fields import FroalaField
from django.utils import timezone


# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=200, unique=True)
    cover_image = models.ImageField(upload_to='cover_images/', blank=True, null=True)
    slug = models.SlugField(max_length=120, unique=True, blank=True)
    body = FroalaField()
    brief = models.TextField(max_length=400)
    published_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated_at']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title