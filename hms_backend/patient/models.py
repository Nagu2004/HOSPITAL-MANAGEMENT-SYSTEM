from django.db import models

# Create your models here.
class Patient(models.Model):
    patient_id=models.IntegerField(primary_key=True)
    first_name=models.CharField(max_length=20)
    last_name=models.CharField(max_length=20)
    gender=models.CharField(max_length=10)
    date_of_birth=models.DateField()
    phone=models.CharField(max_length=15)
    address=models.TextField()
    blood_group=models.CharField(max_length=10)
    created_at=models.DateTimeField()
