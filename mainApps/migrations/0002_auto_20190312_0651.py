# Generated by Django 2.1.5 on 2019-03-12 06:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApps', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chart',
            name='labelName',
        ),
        migrations.RemoveField(
            model_name='chart',
            name='labelValue',
        ),
        migrations.AddField(
            model_name='chart',
            name='cryptocurrency_name',
            field=models.CharField(default='Bitcoin', max_length=30),
        ),
        migrations.AddField(
            model_name='chart',
            name='cryptocurrency_value',
            field=models.FloatField(default=100, max_length=15),
        ),
    ]