from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('accounts.api.urls')),
    path('api/', include('dialogs.api.urls'))
]
