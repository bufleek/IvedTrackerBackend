from django.urls import path
from . import views

urlpatterns = [
    path(
        "users/",
        views.UserListCreate.as_view(),
    ),
    path("users/<pk>/", views.UserDetail.as_view()),
]
