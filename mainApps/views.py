from django.core import serializers
from django.shortcuts import render, redirect












def projects(request):
    return render(request, 'mainApps/index.html', {'title': 'Projects'})


