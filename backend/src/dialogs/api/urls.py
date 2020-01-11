from django.urls import path
from .views import PostListView, PostDetailView, PostCreateView, UserListView, UserDetailView, UserCreateView
from rest_framework.authtoken import views as drf_views

urlpatterns = [
    path('users/', UserListView.as_view()),
    path('users/<pk>', UserDetailView.as_view()),
    path('users/create/', UserCreateView.as_view()),
    path('posts/', PostListView.as_view()),
    path('posts/<pk>', PostDetailView.as_view()),
    path('posts/create/', PostCreateView.as_view()),
    path('auth', drf_views.obtain_auth_token, name='auth')
]