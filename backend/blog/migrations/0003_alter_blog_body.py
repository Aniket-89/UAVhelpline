# Generated by Django 5.1.4 on 2025-01-06 12:54

import froala_editor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0002_alter_blog_options"),
    ]

    operations = [
        migrations.AlterField(
            model_name="blog",
            name="body",
            field=froala_editor.fields.FroalaField(),
        ),
    ]
