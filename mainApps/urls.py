from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views 

urlpatterns = [
    path('addchart/', views.addChart, name='chart-form'),
    path('', views.home, name='home'),
] 
