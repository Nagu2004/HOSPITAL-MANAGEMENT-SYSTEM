from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
from .models import Users
from rest_framework.views import APIView
from .serializers import LoginSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST,HTTP_200_OK
from doctors.models import Doctor,Department
from patient.models import Patient
# Create your views here.
class LoginInsert(APIView):
    def get(self,request):
        data=Users.objects.all()
        s_obj=LoginSerializer(data,many=True)
        return Response(s_obj.data)
    def post(self,request):
        if request.data['role']=='DOCTOR':
            username=request.data['username']
            email=request.data['email']
            password=request.data['password']
            role=request.data['role']
            u_obj=Users.objects.create(username=username,email=email,password=password,role=role)
            id=u_obj.user_id
            specialization = request.data['specialization']
            try:
                dept = Department.objects.get(name=specialization)
            except Department.DoesNotExist:
                dept = Department.objects.create(
                    name=specialization,
                    description=specialization + " expert"
                )
            Doctor(doc_id=id,doc_name=username,dept_id=dept,specialization=request.data['specialization'],experience_years=request.data['experience'],consultion_fee=request.data['fee'],phone_no=request.data['phoneno']).save()
            return Response(status=HTTP_201_CREATED)
        elif request.data['role']=="PATIENT":
            print(request.data)
            username=request.data['firstname']+'_'+request.data['lastname']
            email=request.data['email']
            password=request.data['password']
            role=request.data['role']
            u_obj=Users.objects.create(username=username,email=email,password=password,role=role)
            patient_id=u_obj.user_id
            Patient.objects.create(patient_id=patient_id,first_name=request.data['firstname'],last_name=request.data['lastname'],gender=request.data['gender'],date_of_birth=request.data['dob'],phone=request.data['phoneno'],address=request.data['address'],blood_group=request.data['bloodgroup'],created_at=request.data['created'])
            return Response(status=HTTP_201_CREATED)

class LoginCheck(APIView):
    def get(self,request):
        return HttpResponse('created')
    def post(self,request):
        username=request.data.get('username')
        password=request.data.get('password')
        user=Users.objects.get(username=username,password=password)
        print(user.username,user.password,user.role)
        e_obj=LoginSerializer(user)
        print(e_obj.data.get('role'))
        return Response(e_obj.data,status=HTTP_200_OK)