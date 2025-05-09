
from django.contrib import admin
from django.urls import path, include
from knox import views as knox_views
from api.views import ProfessorProjectListView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/',include('users.urls')),
    path('api/auth/',include('knox.urls')),
    path('logout/',knox_views.LogoutView.as_view(), name='knox_logout'),
    path('logoutall/',knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
    path('api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    path('api/professors/', ProfessorProjectListView.as_view(), name='professor-projects'),
    path('api/',include('api.urls')),
]
 



#  used logout all because, it deletes all the tokens related to  particular user 
# generated when he is login many times, so different tokens are created, thats why
