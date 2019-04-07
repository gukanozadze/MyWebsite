
from django.urls import path
from . import views


urlpatterns = [
    path('', views.restaurant, name='food-page')
]
