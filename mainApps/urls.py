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

    # UPWORK
    path('addcity', views.addcity, name='addcity'),
    path('login', views.login, name='login'),
    path('addsport', views.addsport, name='addsport'),
    path('citydetails', views.citydetails, name='addcategory'),
    path('dashboard', views.Dashboard, name='dashboard'),
    path('viewall', views.viewall, name='viewall'),
    path('popup', views.popup, name='popup'),








] 
