from django.urls import path,include
from rest_framework.routers import DefaultRouter 
from .views import UserViewSet,LoginAuthTokenViewSet,SignupAuthTokenViewSet,PropertyViewSet
from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()
router.register('users',UserViewSet)
router.register('properties',PropertyViewSet)

urlpatterns = [
    path('api/',include(router.urls)),
    path('auth/login/',LoginAuthTokenViewSet.as_view(),name='login'),
    path('auth/signup/',SignupAuthTokenViewSet.as_view(),name='signup'),
    
    
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)