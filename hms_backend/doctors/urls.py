from django.urls import path
from . import views

urlpatterns=[
    path('insertdoctor/',views.InsertDoctor.as_view(),name='insertdoc'),
    path('updatedoctor/<int:pk>/',views.UpdateDoctor.as_view(),name='updatedoctor'),
]