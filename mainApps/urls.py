from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views 

urlpatterns = [
    path('addchart/', views.addChart, name='chart-form'),
    path('', views.projects),
    path('projects/', views.projects, name='projects'),
    path('projects/charts', views.charts, name='charts-page'),
    path('foodpage', views.foodPage, name='food-page'),


    

] 
