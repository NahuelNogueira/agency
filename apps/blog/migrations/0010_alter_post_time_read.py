# Generated by Django 3.2.16 on 2023-04-18 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_auto_20230417_2149'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='time_read',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]