from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from . import views 

urlpatterns = [
    path('addchart/', views.addChart, name='chart-form'),
    path('', views.projects),
    path('projects/', views.projects, name='projects'),
    path('projects/charts', views.charts, name='charts'),
    path('addcity', views.addcity),
    path('login', views.login),

    path('addsport', views.addsport),
    path('citydetails', views.citydetails),
    path('dashboard', views.Dashboard),
    path('viewall', views.viewall),







] 
