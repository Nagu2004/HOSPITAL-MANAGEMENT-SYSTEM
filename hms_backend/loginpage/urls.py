
from django.urls import path
from . import views

urlpatterns=[
    path('logininsert/',views.LoginInsert.as_view(),name='logininsert'),
    path('logincheck/',views.LoginCheck.as_view(),name='logincheck'),
]