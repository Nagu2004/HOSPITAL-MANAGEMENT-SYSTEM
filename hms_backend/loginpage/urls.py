
from django.urls import path
from . import views

urlpatterns=[
    path('logininsert/',views.LoginInsert.as_view(),name='logininsert')
]