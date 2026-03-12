from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def fstpage(request):
     return HttpResponse("appointment page is created")
