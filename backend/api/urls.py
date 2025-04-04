from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static


router=DefaultRouter()
router.register('registerform',RegisterformViewSet, basename='registerform')


urlpatterns=router.urls

# urlpatterns=[
#     path('',home)
# ]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
