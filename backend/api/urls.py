from django.urls import path,include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
from .views import PropertyViewSet
router = DefaultRouter()
router.register('property',PropertyViewSet)

urlpatterns = [
   path('api/',include(router.urls)),

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)