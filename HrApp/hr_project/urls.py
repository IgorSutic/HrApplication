
from django.contrib import admin
from django.urls import path, include
from oauth2.views import FacebookLogin, GoogleLogin

# urlpatterns = [
#     path('admin/', admin.site.urls),
    # path('api/', include('oauth2.urls')),
    # path('auth/', include('rest_framework_social_oauth2.urls')),
# ]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('oauth2.urls')),
    path('auth/', include('rest_framework_social_oauth2.urls')),
    path('rest-auth/', include('rest_auth.urls')),

    # Add these lines
    path('rest-auth/facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('rest-auth/google/', GoogleLogin.as_view(), name='google_login')
]
