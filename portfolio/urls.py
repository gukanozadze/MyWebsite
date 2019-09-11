from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('mysite.urls')),
    path('bookseller', include('bookseller.urls')),
    path('projects/restaurant', include('restaurant.urls')),
    path('projects/sports', include('sports.urls')),
    path('projects/charts', include('charts.urls')),
    

    path('admin/', admin.site.urls),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) 
