# Generated by Django 4.2 on 2023-05-07 19:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('connectApp', '0017_rename_user_post_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='background_image',
            field=models.ImageField(blank=True, null=True, upload_to='backgrounds/'),
        ),
    ]
