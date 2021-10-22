from django.contrib import admin
from django.urls import path, include
from oauth2.views import FacebookLogin, GoogleLogin


# Register your models here.

# urlpatterns = [
#     path('admin/', admin.site.urls),

#     path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
#     path('rest-auth/google/', GoogleLogin.as_view(), name='google_login')
# ]