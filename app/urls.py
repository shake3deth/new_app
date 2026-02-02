from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name = "index"),
    path("mypage/", views.mypage, name = "mypage"),
    path("game/", views.game , name = "game"),
    path("renshu/", views.renshu , name = "renshu"),
    path("university/", views.university , name = "university"),
    path("department/", views.department , name = "department"),
    path("aogaku/",views.aogaku , name="aogaku"),
    path("dendai/",views.dendai, name="dendai"),
]