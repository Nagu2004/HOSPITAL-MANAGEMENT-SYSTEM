from django.db import models


# Create your models here.
# class User(models.Model):
#     i
class Department(models.Model):
    id=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=20)
    description=models.TextField(null=True)

class Doctor(models.Model):
    doc_id=models.IntegerField(primary_key=True)
    dept_id=models.ForeignKey(Department,on_delete=models.SET_NULL,null=True)
    specialization=models.CharField(max_length=20)
    experience_years=models.IntegerField()
    consultion_fee=models.FloatField()
    phone_no=models.CharField(max_length=20)


