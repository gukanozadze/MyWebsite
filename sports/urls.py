from django.urls import path
from . import views

urlpatterns = [
    # SPORT_DASHBOARD
    path('addcity', views.addcity, name='addcity'),
    path('login', views.login, name='login'),
    path('addsport', views.addsport, name='addsport'),
    path('addcategory', views.addcategory, name='addcategory'),
    path('citydetails', views.citydetails, name='citydetails'),
    path('dashboard', views.Dashboard, name='dashboard'),
    path('viewall', views.viewall, name='viewall'),
    path('popup', views.popup, name='popup'),
]