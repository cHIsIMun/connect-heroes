# Generated by Django 4.2 on 2023-04-24 05:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('connectApp', '0014_remove_comment_likes'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='likes',
        ),
    ]
