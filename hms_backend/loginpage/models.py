from django.db import models

# Create your models here.
class Users(models.Model):
    user_id=models.IntegerField(primary_key=True)
    username=models.CharField(max_length=30)
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=20)
    role=models.CharField(max_length=20)
