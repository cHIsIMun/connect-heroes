# Generated by Django 4.2 on 2023-05-07 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('connectApp', '0018_profile_background_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='content',
            field=models.CharField(max_length=255),
        ),
    ]