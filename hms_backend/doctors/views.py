from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .models import Doctor
from rest_framework.views import APIView 
from rest_framework.response import Response
from .serializers import DocSerializer
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST,HTTP_200_OK

# Create your views here.
class InsertDoctor(APIView):
    def get(self,request):
        doc=Doctor.objects.all()
        d_obj=DocSerializer(doc,many=True)
        return Response(d_obj.data)
    def post(self,request):
        s_obj=DocSerializer(data=request.data)
        if s_obj.is_valid():
            s_obj.save()
            return Response(status=HTTP_201_CREATED)
        else:
            return Response(s_obj.errors,status=HTTP_400_BAD_REQUEST)

class UpdateDoctor(APIView):
    def get(self,request,pk):
        d_obj=Doctor.objects.get(doc_id=pk)
        s_obj=DocSerializer(d_obj)
        return Response(s_obj.data)
    def put(self,request,pk):
        d_obj=Doctor.objects.get(doc_id=pk)
        s_obj=DocSerializer(d_obj,data=request.data)
        if s_obj.is_valid():
            s_obj.save()
            return Response(status=HTTP_200_OK)
        else:
            return Response(s_obj.errors,status=HTTP_400_BAD_REQUEST)
