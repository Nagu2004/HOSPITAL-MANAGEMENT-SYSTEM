from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
from .models import Users
from rest_framework.views import APIView
from .serializers import LoginSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST
# Create your views here.
class LoginInsert(APIView):
    def get(self,request):
        data=Users.objects.all()
        s_obj=LoginSerializer(data,many=True)
        return Response(s_obj.data)
    def post(self,request):#http://127.0.0.1:8000/login/logininsert/
        s_obj=LoginSerializer(data=request.data)
        if s_obj.is_valid():
            s_obj.save()
            return Response(status=HTTP_201_CREATED)
        else:
            return Response(s_obj.errors,status=HTTP_400_BAD_REQUEST)

class LoginCheck(APIView):
    def get(self,request):
        return HttpResponse('created')
    def post(self,request):
        username=request.data.get('username')
        password=request.data.get('password')
        user=Users.objects.get(username=username,password=password)
        print(user.username,user.password,user.role)
        return HttpResponse('posted')